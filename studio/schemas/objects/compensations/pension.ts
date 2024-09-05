import { defineField } from "sanity";

export const pension = defineField({
  name: "pensionData",
  title: "Pension Percentage",
  type: "number",
  initialValue: 7,
  description:
    "Enter the percentage of the pension offered by Variant when employed. The value should be a positive number and will be used to calculate the pension amount.",
  validation: (Rule) =>
    Rule.min(0)
      .max(100)
      .error("Pension percentage must be a positive value and less than or equal to 100"),
});
