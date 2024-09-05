import { defineField } from "sanity";

export const pension = defineField({
  name: "pensionData",
  title: "Pension Percentage",
  type: "number",
  initialValue: 7,
  description:
    `Specify the percentage of the pension provided by Variant for employees. The value should be a positive number and will be used to calculate the pension amount.`,
  validation: (Rule) =>
    Rule.custom((value, context) => {
      if (
        context.document?.showSalaryCalculator &&
        (value === undefined || value === null)
      ) {
        return "Please enter a pension percentage. This is required when the salary calculator is enabled.";
      }
      if (value !== undefined && (value < 0 || value > 100)) {
        return "The pension percentage must be a number between 0 and 100.";
      }
      return true;
    }),
});
