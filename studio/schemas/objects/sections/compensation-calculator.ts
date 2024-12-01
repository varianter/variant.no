import { defineField } from "sanity";

export const compensationCalculatorId = "compensationCalculator";

export const compensationCalculator = defineField({
  name: compensationCalculatorId,
  title: "Compensation Calculator",
  type: "object",
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
      name: "calculatorDesc",
      title: "Calculator Description",
      type: "internationalizedArrayString",
      description: "Description that will be displayed inside the calculator.",
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
      name: "handbookTitle",
      type: "internationalizedArrayString",
      title: "Handbook Title",
      description: "Title that will be displayed inside the handbook section.",
      initialValue: [
        { _key: "en", value: "Handbook" },
        { _key: "no", value: "Håndbok" },
      ],
    },
    {
      name: "handbookDesc",
      title: "Handbook Description",
      type: "internationalizedArrayString",
      description:
        "Description that will be displayed inside the handbook section.",

      initialValue: [
        {
          _key: "en",
          value:
            "Words and actions should go hand in hand. All about us, rules and more you can find in the handbook. If we change, we change the handbook.",
        },
        {
          _key: "no",
          value:
            "Ord og handling bør gå hånd i hånd. Alt om oss, regler og finner du i håndboken. Endrer vi på oss, endrer vi håndboken.",
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
