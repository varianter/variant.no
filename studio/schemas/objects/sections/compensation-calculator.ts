import { ControlsIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { link } from "studio/schemas/objects/link";

const compensationCalculatorId = "compensationCalculator";

enum CompensationCalculatorBackground {
  Dark = "dark",
  Violet = "violet",
}

const backgroundOptions = [
  { title: "Dark", value: CompensationCalculatorBackground.Dark },
  { title: "Violet", value: CompensationCalculatorBackground.Violet },
];

export const compensationCalculator = defineField({
  name: compensationCalculatorId,
  title: "Compensation Calculator",
  type: "object",
  icon: ControlsIcon,
  fields: [
    {
      name: "moduleTitle",
      type: "internationalizedArrayString",
      title: "Module Title",
      description: "Title that will be displayed at the top of the section.",
      initialValue: [
        { _key: "en", value: "Employee Experience" },
        { _key: "no", value: "Ansattopplevelsen" },
      ],
    },

    {
      name: "background",
      title: "Background",
      type: "string",
      description:
        "Select whether the calculator should have a purple or dark background.",
      options: {
        list: backgroundOptions,
        layout: "radio",
      },
      initialValue: CompensationCalculatorBackground.Dark,
    },

    {
      name: "calculatorBlock",
      type: "object",

      fields: [
        {
          name: "calculatorTitle",
          type: "internationalizedArrayString",
          title: "Calculator Title",
          description: "Title that will be displayed inside the calculator.",
          initialValue: [
            { _key: "en", value: "Salary Calculator" },
            { _key: "no", value: "Lønnskalkulator" },
          ],
        },

        {
          name: "calculatorDescription",
          title: "Calculator Description",
          type: "internationalizedArrayString",
          description:
            "Description that will be displayed inside the calculator.",
          initialValue: [
            {
              _key: "en",
              value:
                "We believe that salary should be simple, open and predictable. Therefore, we designed a transparent salary model that equalizes all employees.",
            },
            {
              _key: "no",
              value:
                "Vi mener lønn bør være enkelt, åpent og forutsigbart. Derfor designet vi en transparent lønnsmodell som likestiller alle ansatte.",
            },
          ],
        },

        {
          ...link,
          name: "calculatorLink",
          description:
            "Bottom link that will be displayed inside the handbook section.",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Compensation Calculator",
      };
    },
  },
});
