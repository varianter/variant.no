import { defineField, defineType, type Slug } from "sanity";
import { SlugRule } from "@sanity/types";
import RedirectThumbnail from "../../components/RedirectThumbnail";
import { pageBuilderID } from "../builders/pageBuilder";
import { blogId } from "./blog";
import { compensationsId } from "./compensations";

const slugValidator = (rule: SlugRule) =>
  rule.required().custom((value: Slug | undefined) => {
    if (!value || !value.current) return "Can't be blank";
    if (!value.current.startsWith("/")) {
      return "The path must start with a forward slash ('/')";
    }
    return true;
  });

export const redirectId = "redirect";

const redirect = defineType({
  name: redirectId,
  title: "Redirect",
  type: "document",
  readOnly: (ctx) => {
    /*
      make permanent redirects read-only after initial publish
      this is a soft guardrail that is possible to bypass
     */
    return (
      (ctx.document?.permanent ?? false) &&
      !ctx.document?._id.startsWith("drafts.")
    );
  },
  fields: [
    defineField({
      name: "source",
      title: "Source",
      description: "Which url should this redirect apply for",
      type: "slug",
      validation: slugValidator,
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "object",
      fields: [
        defineField({
          name: "type",
          title: "Type",
          description: "Choose between an internal page or a static slug",
          type: "string",
          initialValue: "reference",
          options: {
            layout: "radio",
            list: [
              { value: "reference", title: "Internal Page" },
              { value: "slug", title: "Slug" },
            ],
          },
        }),
        defineField({
          name: "reference",
          title: "Internal Page",
          description: "Where should the user be redirected?",
          type: "reference",
          to: [
            { type: pageBuilderID },
            { type: blogId },
            { type: compensationsId },
          ],
          hidden: ({ parent }) => parent?.type !== "reference",
        }),
        defineField({
          name: "slug",
          title: "Slug",
          description: "Where should the user be redirected?",
          type: "slug",
          hidden: ({ parent }) => parent?.type !== "slug",
          validation: slugValidator,
          options: {
            isUnique: () => {
              /*
               does not need to be unique since multiple source paths
               can point to the same destination path
              */
              return true;
            },
          },
        }),
      ],
    }),
    defineField({
      name: "permanent",
      title: "Permanent",
      description:
        "Will this redirect exist throughout the foreseeable future?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      source: "source",
      destinationType: "destination.type",
      destinationSlug: "destination.slug.current",
      destinationReferenceSlug: "destination.reference.slug.current",
      permanent: "permanent",
    },
    prepare({
      source,
      destinationType,
      destinationSlug,
      destinationReferenceSlug,
      permanent,
    }) {
      const destination =
        destinationType === "slug" ? destinationSlug : destinationReferenceSlug;
      const title =
        source && destination
          ? `${source.current} → ${destination}`
          : undefined;
      return {
        title,
        subtitle: permanent ? "Permanent" : "Temporary",
        media: RedirectThumbnail({ permanent }),
      };
    },
  },
});

export default redirect;
