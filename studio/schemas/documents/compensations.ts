import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import locations from "../objects/locations";
import { title } from "../fields/text";
import { benefitId } from "./benefit";

// maximum number of locations to display in the preview without truncating
const LOCATIONS_PREVIEW_CUTOFF = 3;

export const compensationsId = "compensations";

const compensations = defineType({
  name: compensationsId,
  type: "document",
  title: "Compensations",
  fields: [
    locations,
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
       Array object values are accessed with dot notation and array index: "locations.0.basicTitle"
       This limits the preview to only select a subset of the array
       https://www.sanity.io/docs/previews-list-views#62febb15a63a
      */
      ...[...Array(LOCATIONS_PREVIEW_CUTOFF + 1).keys()].reduce(
        (o, i) => ({ ...o, [`location${i}`]: `locations.${i}.basicTitle` }),
        {},
      ),
    },
    prepare({ title, ...locationsMap }) {
      return {
        title,
        subtitle: previewStringFromLocationsMap(
          locationsMap,
          LOCATIONS_PREVIEW_CUTOFF,
        ),
      };
    },
  },
});

function previewStringFromLocationsMap(
  locationsMap: {
    [key: string]: string;
  },
  cutoff: number,
): string | undefined {
  const locations = Object.values<string>(locationsMap).filter(
    (o) => o !== undefined,
  );
  if (locations.length === 0) {
    return undefined;
  } else if (locations.length === 1) {
    return `Location: ${locations[0]}`;
  } else if (locations.length > cutoff) {
    return `Locations: ${locations.toSpliced(cutoff - 1).join(", ")}, and more`;
  }
  return `Locations: ${locations.toSpliced(-1).join(", ")} and ${locations.at(-1)}`;
}

export default compensations;
