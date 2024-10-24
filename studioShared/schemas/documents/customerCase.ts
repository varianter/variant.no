import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { internationalizedImage } from "studio/schemas/fields/media";
import { titleID } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";
import { customerCaseProjectInfo } from "studioShared/schemas/fields/customerCaseProjectInfo";
import imageBlock from "studioShared/schemas/objects/imageBlock";
import listBlock from "studioShared/schemas/objects/listBlock";
import quoteBlock from "studioShared/schemas/objects/quoteBlock";
import richTextBlock from "studioShared/schemas/objects/richTextBlock";

export const customerCaseID = "customerCase";

const customerCase = defineType({
  name: customerCaseID,
  type: "document",
  title: "Customer Case",
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
        "Short paragraph displayed at the top of the customer case page. Description can not be more than 50 words.",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>(
          (value) => {
            if (!value) return true;
            if (value) {
              const invalidItems = value.filter(
                (item) =>
                  typeof item.value === "string" &&
                  item.value.split(" ").length > 50,
              );

              if (invalidItems.length) {
                return invalidItems.map((item) => ({
                  message: `Description can not be more than 50 words.`,
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
      of: [richTextBlock, imageBlock, listBlock, quoteBlock],
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
