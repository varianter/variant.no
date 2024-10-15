import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { richTextID, titleID } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";

export const customerCaseID = "customerCase";

const customerCase = defineType({
  name: customerCaseID,
  type: "document",
  title: "Customer Case",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Customer Case Title",
    },
    {
      ...titleSlug,
      type: "internationalizedArrayString",
    },
    defineField({
      name: richTextID,
      title: "Body",
      type: "internationalizedArrayRichText",
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
