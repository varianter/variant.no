import { defineField } from "sanity";

export const pensionPercent = defineField({
  name: "pensionPercent",
  title: "Pension Percentage",
  type: "number",
  initialValue: 7,
  description: `Specify the percentage of the pension provided by Variant for employees. The value should be a positive number and will be used to calculate the pension amount.`,
  validation: (rule) => [
    rule
      .min(0)
      .max(100)
      .error("The pension percentage must be a number between 0 and 100."),
  ],
});
