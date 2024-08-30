import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import { title } from "../fields/text";
import { benefitId } from "./benefit";

export const compensationsId = "compensations";

const compensations = defineType({
  name: compensationsId,
  type: "document",
  title: "Compensations",
  fields: [
    title,
    titleSlug,
    seo,
    defineField({
      name: "showSalaryCalculator",
      title: "Show Salary Calculator",
      description: "Should the salary calculator be visible on the page?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "pensionPercentage",
      title: "Pension Percentage (%)",
      type: "number",
      initialValue: 7,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      description: "Manage benefits for the compensations page",
      type: "array",
      of: [{ type: benefitId }],
    }),
  ],
});

export default compensations;
