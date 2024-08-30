import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import offices from "../objects/offices";
import { title } from "../fields/text";
import { benefitId } from "./benefit";

/*
 maximum number of offices without preview string shortening
 (should be at least 2)
 given array: ["Trondheim", "Oslo", "Bergen", "Molde"]
 2 => Trondheim, and more
 3 => Trondheim, Oslo, and more
 4 => Trondheim, Oslo, Bergen, and Molde
*/
const OFFICES_PREVIEW_CUTOFF = 3;

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
      title: "basicTitle",
      /*
       Array object values are accessed with dot notation and array index: "offices.0.basicTitle"
       This limits the preview to only select a subset of the array
       https://www.sanity.io/docs/previews-list-views#62febb15a63a
      */
      ...[...Array(OFFICES_PREVIEW_CUTOFF + 1).keys()].reduce(
        (o, i) => ({ ...o, [`office${i}`]: `offices.${i}.basicTitle` }),
        {},
      ),
    },
    prepare({ title, ...officesMap }) {
      return {
        title,
        subtitle: previewStringFromOfficesMap(
          officesMap,
          OFFICES_PREVIEW_CUTOFF,
        ),
      };
    },
  },
});

function previewStringFromOfficesMap(
  officesMap: {
    [key: string]: string;
  },
  cutoff: number,
): string | undefined {
  const offices = Object.values<string>(officesMap).filter(
    (o) => o !== undefined,
  );
  if (offices.length === 0) {
    return undefined;
  } else if (offices.length === 1) {
    return `Office: ${offices[0]}`;
  } else if (offices.length > cutoff) {
    return `Offices: ${offices.toSpliced(cutoff - 1).join(", ")}, and more`;
  }
  return `Offices: ${offices.toSpliced(-1).join(", ")} and ${offices.at(-1)}`;
}

export default compensations;
