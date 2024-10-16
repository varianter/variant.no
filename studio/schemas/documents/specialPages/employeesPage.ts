import { defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { title, titleID } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";

export const employeesPageId = "employeesPage";

const employeesPage = defineType({
  name: employeesPageId,
  type: "document",
  title: "Employees Page",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Page Title",
      description:
        "Enter the primary title that will be displayed at the top of the employees page. This is what users will see when they visit the page.",
    },
    {
      ...titleSlug,
      type: "internationalizedArrayString",
    },
  ],
  preview: {
    select: {
      title: title.name,
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

export default employeesPage;
