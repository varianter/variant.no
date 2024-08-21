import { defineField } from "sanity";
import { richText, title } from "../fields/text";
import { pageTitleSlug } from '../schemaTypes/slug';

export const legalDocumentID = "legalDocuments";

const legalDocument = defineField({
  name: legalDocumentID,
  type: "document",
  title: "Legal Document",
  fields: [title, pageTitleSlug, richText],
  preview: {
    select: {
      title: "basicTitle",
    },
  },
});

export default legalDocument;
