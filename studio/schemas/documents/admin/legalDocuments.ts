import { defineField } from "sanity";

import { richText, title } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

export const legalDocumentID = "legalDocuments";

const legalDocument = defineField({
  name: legalDocumentID,
  type: "document",
  title: "Legal Document",
  fields: [title, titleSlug, richText],
  preview: {
    select: {
      title: "basicTitle",
    },
  },
});

export default legalDocument;
