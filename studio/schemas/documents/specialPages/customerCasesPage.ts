import { defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { title } from "studio/schemas/fields/text";
import seo from "studio/schemas/objects/seo";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";

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
    prepare({ title }) {
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
      };
    },
  },
});

export default customerCasesPage;
