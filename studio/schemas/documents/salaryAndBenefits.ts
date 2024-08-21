import { defineField, defineType } from "sanity";
import { pageSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import { title } from "../fields/text";
import { benefitId } from "./benefit";

export const salaryAndBenefitsId = {
  _root: "salaryAndBenefits",
  showSalaryCalculator: "showSalaryCalculator",
};

const salaryAndBenefits = defineType({
  name: salaryAndBenefitsId._root,
  type: "document",
  title: "Salary and Benefits",
  fields: [
    title,
    pageSlug,
    seo,
    defineField({
      name: salaryAndBenefitsId.showSalaryCalculator,
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
