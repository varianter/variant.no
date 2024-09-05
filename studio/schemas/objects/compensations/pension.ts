import { defineField } from "sanity";

export const pension = defineField({
  name: "pensionData",
  title: "Pension Percentage",
  type: "number",
  initialValue: 7,
  description:
    "Enter the percentage of the pension offered by Variant when employed. The value should be a positive number and will be used to calculate the pension amount.",
  validation: (Rule) =>
    Rule.custom((value, context) => {
      if (
        context.document?.showSalaryCalculator &&
        (value === undefined || value === null)
      ) {
        return "Pension percentage is required when the salary calculator is shown.";
      }
      if (value !== undefined && (value < 0 || value > 100)) {
        return "Pension percentage must be a positive value and less than or equal to 100";
      }
      return true;
    }),
});
