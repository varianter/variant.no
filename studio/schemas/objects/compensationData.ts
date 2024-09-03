import { defineField } from "sanity";

export const compensationDetailsID = "compensationDetails";

export const compensationDetails = defineField({
  name: compensationDetailsID,
  title: "Compensation Details",
  description:
    "Add and manage detailed information on compensation elements like salary, bonuses, pensions, and other financial benefits.",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "replaceMe",
      title: "Replace me",
      type: "string",
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
