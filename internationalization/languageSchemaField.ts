import { defineField } from "sanity";

export const languageID = "language";

const languageSchemaField = defineField({
  name: languageID,
  title: "Language",
  description:
    "Select the language for this document from the translation menu. This field reflects the chosen language and is set automatically based on your selection.",
  type: "string",
  readOnly: true,
  validation: (Rule) => Rule.required(),
});

export default languageSchemaField;
