import { defineField, defineType } from "sanity";
import { richText, title } from "../fields/text";

export const benefitId = "benefit";
export const benefitTypeId = "benefitType";

const BENEFIT_TYPE_BASIC_VALUE = "basic";
const BENEFIT_TYPES = [
  { title: "Basic", value: BENEFIT_TYPE_BASIC_VALUE },
  { title: "Gadgets", value: "gadgets" },
  { title: "Bonus", value: "bonus" },
  { title: "Pension", value: "pension" },
  { title: "Salary Growth", value: "salaryGrowth" },
];

const benefitType = defineField({
  name: benefitTypeId,
  type: "string",
  title: "Benefit Type",
  description:
    "Choose the type of benefit. Some benefit types include visual graphs that will be displayed together with the text.",
  options: {
    list: BENEFIT_TYPES,
    layout: BENEFIT_TYPES.length > 5 ? "dropdown" : "radio",
  },
  initialValue: BENEFIT_TYPE_BASIC_VALUE,
  validation: (Rule) => Rule.required(),
});

const benefit = defineType({
  name: benefitId,
  type: "document",
  title: "Benefit",
  fields: [benefitType, title, richText],
  preview: {
    select: {
      title: title.name,
      type: benefitType.name,
    },
    prepare({ title, type }) {
      const subtitle =
        BENEFIT_TYPES.find((o) => o.value === type)?.title ??
        "Unknown benefit type";
      return {
        title,
        subtitle,
      };
    },
  },
});

export default benefit;
