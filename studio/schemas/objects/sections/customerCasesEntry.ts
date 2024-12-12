import { CaseIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { firstTranslation } from "studio/utils/i18n";

export const customerCasesEntry = defineField({
  name: "customerCasesEntry",
  title: "Customer Cases Entry",
  type: "object",
  icon: CaseIcon,
  fields: [
    {
      name: "basicTitle",
      title: "Basic Title",
      type: "internationalizedArrayString",
      description:
        "This will be the title of the customer cases entry section. Make it engaging to capture the attention of your audience.",
    },
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
