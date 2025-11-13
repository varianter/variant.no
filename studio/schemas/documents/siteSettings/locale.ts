import { defineField, defineType } from "sanity";

import { relevantCurrencies } from "studio/utils/currencies";
import { relevantLocales } from "studio/utils/locales";

export const localeID = "locale";

const locale = defineType({
  name: localeID,
  type: "document",
  title: "Region",
  fields: [
    defineField({
      name: "locale",
      type: "string",
      title: "Region",
      description: "Select the most relevant region for the website.",
      initialValue: relevantLocales[0].code,
      options: {
        list: relevantLocales.map(({ title, code }) => ({
          title: `${title} (${code})`,
          value: code,
        })),
      },
    }),
    defineField({
      name: "currency",
      type: "string",
      title: "Currency",
      description: "Select the most relevant currency for the website.",
      initialValue: relevantCurrencies[0].code,
      options: {
        list: relevantCurrencies.map(({ title, code }) => ({
          title: `${title} (${code})`,
          value: code,
        })),
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Region",
      };
    },
  },
});

export default locale;
