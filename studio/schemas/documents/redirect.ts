import { defineField, defineType, type Slug } from "sanity";
import { SlugRule } from "@sanity/types";
import { pageBuilderID } from "../builders/pageBuilder";
import { blogId } from "./blog";
import { compensationsId } from "./compensations";
import PrefixedSlugInput from "../../components/PrefixedSlugInput";

const slugValidator = (rule: SlugRule) =>
  rule.required().custom((value: Slug | undefined) => {
    if (!value || !value.current) return "Can't be blank";
    return true;
  });

export const redirectId = "redirect";

const redirect = defineType({
  name: redirectId,
  title: "Redirect",
  type: "document",
  fields: [
    defineField({
      name: "source",
      title: "Source",
      description: "Which url should this redirect apply for",
      type: "slug",
      validation: slugValidator,
      components: {
        input: (props) => PrefixedSlugInput({ prefix: "/", ...props }),
      },
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
          components: {
            input: (props) => PrefixedSlugInput({ prefix: "/", ...props }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      source: "source",
      destinationType: "destination.type",
      destinationSlug: "destination.slug.current",
      destinationReferenceSlug: "destination.reference.slug.current",
    },
    prepare({
      source,
      destinationType,
      destinationSlug,
      destinationReferenceSlug,
    }) {
      const destination =
        destinationType === "slug" ? destinationSlug : destinationReferenceSlug;
      const title =
        source && destination
          ? `/${source.current} → /${destination}`
          : undefined;
      return {
        title,
        subtitle: "type: " + destinationType,
      };
    },
  },
});

export default redirect;
