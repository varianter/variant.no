import { defineField } from "sanity";

import languageSchemaField from "internationalization/languageSchemaField";
import { getLanguageById } from "internationalization/supportedLanguages";
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
      language: "language",
    },
    prepare({ title, language }) {
      const languageEntry = getLanguageById(language)?.title;

      const languageTitle = languageEntry
        ? languageEntry
        : "No language specified";

      return {
        title: title || "Untitled",
        subtitle: languageTitle,
      };
    },
  },
});

export default legalDocument;
