import { defineField, defineType } from "sanity";

import languageSchemaField from "i18n/languageSchemaField";
import { richText, title } from "studio/schemas/fields/text";
import {
  isSlugUniqueAcrossDocuments,
  titleSlug,
} from "studio/schemas/schemaTypes/slug";

export const customerCaseID = "customerCase";

const customerCase = defineType({
  name: customerCaseID,
  type: "document",
  title: "Customer Case",
  fields: [
    languageSchemaField,
    title,
    {
      ...titleSlug,
      options: {
        ...titleSlug.options,
        isUnique: (slug, ctx) =>
          isSlugUniqueAcrossDocuments(slug, ctx, customerCaseID),
      },
    },
    defineField({
      ...richText,
      description: "Enter the body content of the Customer case.",
    }),
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare({ title }) {
      return { title, subtitle: "Customer case" };
    },
  },
});

export default customerCase;
