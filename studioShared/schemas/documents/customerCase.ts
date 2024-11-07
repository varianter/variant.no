import { DocumentTextIcon } from "@sanity/icons";
import { groq } from "next-sanity";
import { Reference, defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { internationalizedImage } from "studio/schemas/fields/media";
import { titleID } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { buildDraftId, buildPublishedId } from "studio/utils/documentUtils";
import { firstTranslation } from "studio/utils/i18n";
import { customerCaseProjectInfo } from "studioShared/schemas/fields/customerCaseProjectInfo";
import listBlock from "studioShared/schemas/objects/listBlock";
import resultsBlock from "studioShared/schemas/objects/resultsBlock";
import { baseCustomerCaseSections } from "studioShared/schemas/objects/sections";
import splitSection from "studioShared/schemas/objects/splitSection";

export const customerCaseID = "customerCase";

export const customerCaseSections = [
  ...baseCustomerCaseSections,
  splitSection,
  resultsBlock,
  listBlock,
];

const customerCase = defineType({
  name: customerCaseID,
  type: "document",
  title: "Customer Case",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      ...titleSlug,
      type: "internationalizedArrayString",
    }),
    defineField({
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "internationalizedArrayText",
      title: "Description",
      description:
        "Short paragraph displayed at the top of the customer case page. Description can not be more than 300 characters.",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>(
          (value) => {
            if (!value) return true;
            if (value) {
              const invalidItems = value.filter(
                (item) =>
                  typeof item.value === "string" && item.value.length > 300,
              );

              if (invalidItems.length > 0) {
                return invalidItems.map((item) => ({
                  message: `Description can not be more than 300 characters.`,
                  path: [{ _key: item._key }, "value"],
                }));
              }
            }

            return true;
          },
        ),
    }),
    defineField({
      ...internationalizedImage,
      title: "Header Image",
      description: "Large image displayed at the top of the customer case page",
    }),
    defineField({
      ...customerCaseProjectInfo,
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: "sections",
      title: "Sections",
      description: "Add sections here",
      type: "array",
      of: customerCaseSections,
    }),
    defineField({
      name: "featuredCases",
      title: "Featured Cases",
      description:
        "List of Customer Cases that should be displayed at the bottom of this Customer Case",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: customerCaseID }],
          validation: (rule) =>
            rule.custom((value: Reference, context) => {
              if (
                context.document !== undefined &&
                buildPublishedId(value._ref) ===
                  buildPublishedId(context.document._id)
              ) {
                return "Can not feature itself";
              }
              return true;
            }),
          options: {
            disableNew: true,
            filter: ({ document, parent }) => ({
              // hide current and already featured customer cases
              filter: groq`!(_id in $forbiddenIds)`,
              params: {
                forbiddenIds: [
                  buildPublishedId(document._id),
                  buildDraftId(document._id),
                  ...(Array.isArray(parent)
                    ? parent.flatMap((r) =>
                        typeof r._ref === "string"
                          ? [buildPublishedId(r._ref), buildDraftId(r._ref)]
                          : undefined,
                      )
                    : []),
                ],
              },
            }),
          },
        },
      ],
      validation: (rule) => rule.max(3).unique(),
    }),
  ],
  preview: {
    select: {
      title: titleID.basic,
    },
    prepare({ title }) {
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
        subtitle: "Customer case",
      };
    },
  },
});

export default customerCase;
