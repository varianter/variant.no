import { defineType } from "sanity";

import { title } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

export const customerCasesID = "customerCases";

const customerCases = defineType({
  name: customerCasesID,
  type: "document",
  title: "Customer Cases",
  fields: [
    {
      ...title,
      title: "Customer Case Page Title",
      description:
        "Enter the primary title that will be displayed at the top of the customer cases page. This is what users will see when they visit the page.",
    },
    titleSlug,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
});

export default customerCases;
