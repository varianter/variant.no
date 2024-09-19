import { defineField } from "sanity";

import languageSchemaField from "internationalization/languageSchemaField";
import { richText, title } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

export const legalDocumentID = "legalDocument";

const legalDocument = defineField({
  name: legalDocumentID,
  type: "document",
  title: "Legal Document",
  fields: [languageSchemaField, title, titleSlug, richText],
  preview: {
    select: {
      title: "basicTitle",
    },
  },
});

export default legalDocument;
