import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import { title } from "../fields/text";
import { benefitId } from "./benefit";
import { bonusesByLocation } from "../objects/compensations/bonusesByLocation";
import { pension } from "../objects/compensations/pension";

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
    // add salary here
    // benefits should be updated to match the grouping by location:
    // defineField({
    //   name: "benefits",
    //   title: "Benefits",
    //   type: "array",
    //   of: [
    //     defineField({
    //       name: "benefitGroup",
    //       title: "Benefit Group",
    //       type: "object",
    //       fields: [
    //         locations,
    //         defineField({
    //           name: "benefitsList",
    //           title: "List of Benefits",
    //           type: "array",
    //           of: [{ type: benefitId }],
    //         }),
    //       ],
    //     }),
    //   ],
    // }),
    // IMPORTANT: this is just a very simple mockup and might not represent a good ux
    defineField({
      name: "benefits",
      title: "Included Benefits",
      description:
        "Add and manage information on the benefits included with the compensation package, such as health insurance, retirement plans, and paid time off.",
      type: "array",
      of: [{ type: benefitId }],
    }),
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
