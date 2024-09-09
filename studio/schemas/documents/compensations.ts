import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import { title } from "../fields/text";
import { bonusesByLocation } from "../objects/compensations/bonusesByLocation";
import { pension } from "../objects/compensations/pension";
import { benefitsByLocation } from "../objects/compensations/benefitsByLocation";

export const compensationsId = "compensations";

const compensations = defineType({
  name: compensationsId,
  type: "document",
  title: "Compensations",
  fields: [
    {
      ...title,
      title: "Compensation Page Title",
      description:
        "Enter the primary title that will be displayed at the top of the compensation page. This is what users will see when they visit the page.",
    },
    titleSlug,
    defineField({
      name: "showSalaryCalculator",
      title: "Show Salary Calculator",
      description:
        "Toggle this setting to show or hide the salary calculator on the page. The salary calculator helps users estimate their total compensation based on various factors such as salary data, pension and bonuses.",
      type: "boolean",
      initialValue: true,
    }),
    pension,
    bonusesByLocation,
    benefitsByLocation,
    // add salary here
    seo,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
});

export default compensations;
