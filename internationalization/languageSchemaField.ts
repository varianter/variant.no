import { defineField } from "sanity";

export const languageID = "language";

const languageSchemaField = defineField({
  name: languageID,
  type: "string",
  readOnly: true,
});

export default languageSchemaField;
