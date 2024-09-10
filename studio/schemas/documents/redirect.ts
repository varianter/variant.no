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
      ],
    }),
  ],
  preview: {
    select: {
      sourceSlug: "source.current",
      destinationType: "destination.type",
      destinationReferenceSlug: "destination.reference.slug.current",
      destinationExternalURL: "destination.external",
    },
    prepare({
      sourceSlug,
      destinationType,
      destinationReferenceSlug,
      destinationExternalURL,
    }) {
      if (
        typeof sourceSlug !== "string" ||
        typeof destinationType !== "string" ||
        (destinationType === "reference" &&
          typeof destinationReferenceSlug !== "string") ||
        (destinationType === "external" &&
          typeof destinationExternalURL !== "string")
      ) {
        return {};
      }
      const destination = {
        reference: `/${destinationReferenceSlug}`,
        external: destinationExternalURL,
      }[destinationType];
      const title =
        sourceSlug && destination
          ? `/${sourceSlug} → ${destination}`
          : undefined;
      return {
        title,
        subtitle: {
          reference: "Internal",
          external: "External",
        }[destinationType],
      };
    },
  },
});

export default redirect;
