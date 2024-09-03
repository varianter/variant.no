import { defineField, defineType } from "sanity";
import { titleSlug } from "../schemaTypes/slug";
import seo from "../objects/seo";
import locations from "../objects/locations";
import { title } from "../fields/text";
import { benefitId } from "./benefit";
import { compensationDetails } from "../objects/compensationData";

// maximum number of locations to display in the preview without truncating
const LOCATIONS_PREVIEW_CUTOFF = 3;

export const compensationsId = "compensations";

const compensations = defineType({
  name: compensationsId,
  type: "document",
  title: "Compensations",
  fields: [
    title,
    titleSlug,
    locations,
    compensationDetails,
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
      title: "basicTitle",
      /*
         Access array object values using dot notation with the array index, e.g., "locations.0.basicTitle".
         This approach allows selecting a subset of the array for preview purposes.
         For more details, see: https://www.sanity.io/docs/previews-list-views#62febb15a63a
      */
      ...[...Array(LOCATIONS_PREVIEW_CUTOFF + 1).keys()].reduce(
        (o, i) => ({ ...o, [`location${i}`]: `locations.${i}.basicTitle` }),
        {}
      ),
    },
    prepare({ title, ...locationsMap }) {
      return {
        title,
        subtitle: previewStringFromLocationsMap(
          locationsMap,
          LOCATIONS_PREVIEW_CUTOFF
        ),
      };
    },
  },
});

/**
 * Generates a preview string based on the selected office locations.
 *
 * @param {Object} locationsMap - A map of office titles selected for preview, e.g., { office0: "Trondheim", office1: "Oslo", ... }.
 * @param {number} cutoff - The maximum number of locations to display before shortening the preview string.
 * @returns {string|undefined} - A formatted string summarizing the selected locations or `undefined` if no locations are selected.
 */
function previewStringFromLocationsMap(
  locationsMap: {
    [key: string]: string;
  },
  cutoff: number
): string | undefined {
  const locations = Object.values<string>(locationsMap).filter(
    (o) => o !== undefined
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
