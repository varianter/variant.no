import { defineField, defineType, type Slug } from "sanity";
import { SlugRule } from "@sanity/types";
import RedirectThumbnail from "../../components/RedirectThumbnail";

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
      description: "Which url should this redirect apply for",
      type: "slug",
      validation: slugValidator,
    }),
    defineField({
      name: "destination",
      description: "Where should the user be redirected?",
      type: "slug",
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
    defineField({
      name: "permanent",
      description:
        "Will this redirect exist throughout the foreseeable future?",
      type: "boolean",
    }),
  ],
  initialValue: {
    permanent: false,
  },
  preview: {
    select: {
      source: "source",
      destination: "destination",
      permanent: "permanent",
    },
    prepare({ source, destination, permanent }) {
      const title =
        source && destination
          ? `${source.current} → ${destination.current}`
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
