import { defineField, defineType } from "sanity";
import { title } from "../fields/text";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import { benefitId } from "./benefit";

// TODO: deprecated, drop support once important deployments have updated

const salaryAndBenefits = defineType({
  name: "salaryAndBenefits",
  title: "Salary and Benefits",
  type: "document",
  deprecated: {
    reason: "Use the Compensations document type instead",
  },
  readOnly: true,
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
      name: "benefits",
      title: "Benefits",
      description: "Manage benefits for the salary and benefits page",
      type: "array",
      of: [{ type: benefitId }],
    }),
  ],
});

export default salaryAndBenefits;
