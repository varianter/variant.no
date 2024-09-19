"use client";
import { defineType } from "sanity";

import { supportedLanguages } from "internationalization/supportedLanguages";
import LanguageSelector from "studio/components/LanguageSelector";

export const languageSettingsID = "languageSettings";

const languageSettings = defineType({
  name: languageSettingsID,
  type: "document",
  fields: [
    {
      title: "Languages",
      description:
        "Select the languages you want to support. These will be used for website translation and you can choose a default language for the homepage.",
      name: "languages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "id", type: "string" },
            { name: "default", type: "boolean" },
          ],
        },
      ],
      components: { input: LanguageSelector },
      initialValue: () => [
        supportedLanguages.find((language) => language.default)?.id,
      ],
    },
  ],
});

export default languageSettings;
