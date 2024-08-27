import { defineField, defineType } from "sanity";
import { format, parseISO } from "date-fns";
import { richText, title } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

export const customerCasesID = "costumerCases";

const customerCases = defineType({
  name: customerCasesID,
  type: "document",
  title: "Costumer Cases",
  fields: [
    title,
    titleSlug,
    defineField({
      ...richText,
      description: "Enter the body content of the costumer case.",
    }),
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare({ title }) {
      return { title, subtitle: "Costumer case" };
    },
  },
});

export default customerCases;
