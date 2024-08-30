import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import offices from "../objects/offices";
import { title } from "../fields/text";
import { benefitId } from "./benefit";

// smallest number of offices where ellipsis (...) will be used in preview
const OFFICES_PREVIEW_ELLIPSIS_LIMIT = 5;

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
      subtitle: "basicTitle",
      /*
       Array object values are accessed with dot notation and array index: "offices.0.basicTitle"
       This limits the preview to only select a subset of the array
       https://www.sanity.io/docs/previews-list-views#62febb15a63a
      */
      ...[...Array(OFFICES_PREVIEW_ELLIPSIS_LIMIT).keys()].reduce(
        (o, i) => ({ ...o, [`office${i}`]: `offices.${i}.basicTitle` }),
        {},
      ),
    },
    prepare({ subtitle, ...officesMap }) {
      const offices = Object.values<string>(officesMap).filter(
        (o) => o !== undefined,
      );
      let title;
      if (offices.length >= OFFICES_PREVIEW_ELLIPSIS_LIMIT) {
        title =
          offices.slice(0, OFFICES_PREVIEW_ELLIPSIS_LIMIT - 1).join(", ") +
          ", ...";
      } else {
        title = offices.join(", ");
      }
      return {
        title,
        subtitle,
      };
    },
  },
});

export default compensations;
