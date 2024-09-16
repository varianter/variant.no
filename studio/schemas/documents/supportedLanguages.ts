import { defineType } from "sanity";
import { languages } from "languages";

const languageOptions = languages.map((language) => {
  return { title: language.title, value: language.id };
});

export const supportedLanguageID = "languagesDetails";

const supportedLanguages = defineType({
  name: supportedLanguageID,
  type: "document",
  fields: [
    {
      name: "languages",
      type: "array",
      description:
        "Select languages available for translation and designate one as the default language for the homepage.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "language",
              type: "string",
              description: "Select the language available for translation",
              title: "Language",
              options: {
                list: languageOptions,
              },
            },
            {
              name: "isDefault",
              type: "boolean",
              title: "Default Language",
              description:
                "Indicate whether the language should be set as the default. Please note that only one default language is allowed.",
            },
          ],
          preview: {
            select: {
              title: "language",
            },
            prepare(selection) {
              const { title } = selection;
              const languageOption = languageOptions.find(
                (option) => option.value === title,
              );
              return {
                title: languageOption ? languageOption.title : title,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((languages: { language: string; isDefault: boolean }[]) => {
          const defaultLanguages = languages.filter((lang) => lang.isDefault);
          if (defaultLanguages.length > 1) {
            return "Only one default language is allowed";
          }
          if (defaultLanguages.length === 0 && languages.length > 0) {
            return "At least one language must be marked as default";
          }
          return true;
        }),
    },
  ],
});

export default supportedLanguages;
