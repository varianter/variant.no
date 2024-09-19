import { defineField, defineType } from "sanity";

import languageSchemaField from "internationalization/languageSchemaField";
import { richText, title } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

export const customerCaseID = "CustomerCase";

const customerCase = defineType({
  name: customerCaseID,
  type: "document",
  title: "Customer Case",
  fields: [
    languageSchemaField,
    title,
    titleSlug,
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
