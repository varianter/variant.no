import { defineField, defineType, type Slug } from "sanity";
import { SanityDocument, SlugRule } from "@sanity/types";
import { pageBuilderID } from "../builders/pageBuilder";
import { blogId } from "./blog";
import { compensationsId } from "./compensations";
import PrefixedSlugInput from "../../components/PrefixedSlugInput";

const slugRequired = (rule: SlugRule) =>
  rule.required().custom((value: Slug | undefined) => {
    if (!value || !value.current) return "Can't be blank";
    return true;
  });

const requiredIfDestinationType = (
  type: string,
  document: SanityDocument | undefined,
  value: unknown,
) => {
  const destination = document?.destination;
  if (
    typeof destination === "object" &&
    destination !== null &&
    "type" in destination &&
    destination.type === type &&
    value === undefined
  ) {
    return "Can't be blank";
  }
  return true;
};

export const redirectId = "redirect";

const redirect = defineType({
  name: redirectId,
  title: "Redirect",
  type: "document",
  fields: [
    defineField({
      name: "source",
      title: "Source",
      description: "The url slug to be redirected to the destination",
      type: "slug",
      validation: (rule) => slugRequired(rule),
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
          type: "string",
          initialValue: "reference",
          options: {
            layout: "radio",
            list: [
              { value: "reference", title: "Internal Page" },
              { value: "external", title: "External URL" },
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
          validation: (rule) =>
            rule.custom((value, { document }) =>
              requiredIfDestinationType("reference", document, value),
            ),
        }),
        defineField({
          name: "external",
          title: "External URL",
          description: "Where should the user be redirected?",
          type: "url",
          hidden: ({ parent }) => parent?.type !== "external",
          validation: (rule) =>
            rule.custom((value, { document }) =>
              requiredIfDestinationType("external", document, value),
            ),
        }),
        defineField({
          name: "slug",
          title: "Slug",
          description: "Where should the user be redirected?",
          type: "slug",
          hidden: ({ parent }) => parent?.type !== "slug",
          validation: (rule) =>
            rule.custom((value, { document }) =>
              requiredIfDestinationType("slug", document, value),
            ),
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
      sourceSlug: "source.current",
      destinationType: "destination.type",
      destinationSlug: "destination.slug.current",
      destinationReferenceSlug: "destination.reference.slug.current",
      destinationExternalURL: "destination.external",
    },
    prepare({
      sourceSlug,
      destinationType,
      destinationSlug,
      destinationReferenceSlug,
      destinationExternalURL,
    }: {
      sourceSlug: string;
      destinationType: string;
      destinationSlug: string;
      destinationReferenceSlug: string;
      destinationExternalURL: string;
    }) {
      const destination = {
        slug: `/${destinationSlug}`,
        reference: `/${destinationReferenceSlug}`,
        external: destinationExternalURL,
      }[destinationType];
      console.log(destination);
      const title =
        sourceSlug && destination
          ? `/${sourceSlug} → ${destination}`
          : undefined;
      return {
        title,
        subtitle: "type: " + destinationType,
      };
    },
  },
});

export default redirect;
