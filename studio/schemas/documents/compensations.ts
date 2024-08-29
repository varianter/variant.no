import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import offices from "../objects/offices";
import { title } from "../fields/text";
import { benefitId } from "./benefit";

export const compensationsId = "compensations";

const compensations = defineType({
  name: compensationsId,
  type: "document",
  title: "Compensations",
  fields: [
    offices,
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
      name: "benefits",
      title: "Benefits",
      description: "Manage benefits for the compensations page",
      type: "array",
      of: [{ type: benefitId }],
    }),
  ],
  preview: {
    select: {
      title: "office.basicTitle",
      subtitle: "basicTitle",
    },
  },
});

export default compensations;
