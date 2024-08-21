import { defineType } from 'sanity';
import { richText, title } from '../fields/text';

export const benefitId = "benefit";

const benefit = defineType({
  name: benefitId,
  type: "document",
  title: "Benefit",
  fields: [
    title,
    richText
  ],
  preview: {
    select: {
      title: title.name,
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Benefit",
      };
    },
  },
})

export default benefit;