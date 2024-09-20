import { defineType } from "sanity";

import { title } from "studio/schemas/fields/text";
import seo from "studio/schemas/objects/seo";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

export const customerCasesPageID = "customerCasesPage";

const customerCasesPage = defineType({
  name: customerCasesPageID,
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
    seo,
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
  },
});

export default customerCasesPage;
