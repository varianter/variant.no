import { defineField } from "sanity";

export const compensationDetailsID = "compensationDetails";

export const compensationDetails = defineField({
  name: compensationDetailsID,
  title: "Compensation Details",
  description:
    "Add and manage detailed information on compensation elements like estimated salary, bonuses, pensions, and other financial benefits.",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: "showEstimatedSalary",
      title: "Show Estimated Salary",
      type: "boolean",
      description:
        "Toggle this option to show or hide the estimated salary for the locations you've selected. Disable this if the feature isn't ready or if you prefer not to display salary details at this time.",
      initialValue: false,
    },
    {
      name: "pensionData",
      title: "Pension Percentage",
      type: "number",
      initialValue: 7, 
      description: "Enter the percentage of the pension offered by Variant when employed. The value should be a positive number and will be used to calculate the pension amount.",
      readOnly: ({ parent }) => !parent?.showEstimatedSalary,
      validation: Rule => Rule.min(0).error("Pension percentage must be a positive value").max(100).error("Pension percentage must be less than or equal to 100"),
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
});