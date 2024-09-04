import { defineField } from "sanity";
import { location, locationID } from "../locations";
import { companyLocationID } from "studio/schemas/documents/companyLocations";

export const bonusesByLocation = defineField({
  name: "bonusesByLocation",
  title: "Bonus by Location",
  description:
    "Enter the average bonus amount for each company location. Each location can have only one bonus entry, but you can assign the same bonus amount to multiple locations.",
  type: "array",
  of: [
    defineField({
      name: "bonusData",
      title: "Bonus Information",
      description:
        "Details of the bonus amount specific to a particular location. Each location should have a unique entry with the average bonus calculated for that site.",
      type: "object",
      fields: [
        {
          ...location,
          description:
            "Select the company location for which you are entering the average bonus information. Each location must be unique.",
          validation: (Rule) => Rule.required(),
        },
        defineField({
          name: "averageBonus",
          title: "Average Bonus",
          description:
            "Enter the average bonus amount for this location. Ensure the amount is positive and reflective of the compensation package for this location.",
          type: "number",
          validation: (Rule) =>
            Rule.required()
              .min(0)
              .error("Please enter a positive bonus amount."),
        }),
      ],
      preview: {
        select: {
          averageBonus: "averageBonus",
          location: `${locationID}.${companyLocationID}`,
        },
        prepare({ averageBonus, location }) {
          return {
            title: `Average Bonus: ${averageBonus || "N/A"}`,
            subtitle: `Location: ${location || "No location selected"}`,
          };
        },
      },
    }),
  ],
  validation: (Rule) =>
    Rule.custom((bonusesByLocation, context) => {
      const duplicateCheck = checkForDuplicateLocations(
        bonusesByLocation as BonusEntry[] | undefined,
      );

      if (duplicateCheck !== true) return duplicateCheck;

      return true;
    }),
});

interface LocationReference {
  _ref: string;
  _type: string;
  title?: string;
}

interface BonusEntry {
  location: LocationReference;
  averageBonus: number;
}

/**
 * Checks for duplicate location references in the bonusesByLocation array.
 * Ensures each location has a unique bonus entry.
 *
 * @param {BonusEntry[] | undefined} bonusesByLocation - The array of bonus entries, each with one or more locations.
 * @returns {string | true} - Returns an error message if duplicate locations are found, or true if all are unique.
 */
const checkForDuplicateLocations = (
  bonusesByLocation: BonusEntry[] | undefined,
): string | true => {
  if (!bonusesByLocation) return true;

  const locationRefs = bonusesByLocation
    .map((entry) => entry.location?._ref)
    .filter(Boolean);

  const uniqueRefs = new Set(locationRefs);

  if (uniqueRefs.size !== locationRefs.length) {
    return "Each location should be listed only once in the bonuses list. You can assign the same bonus amount to multiple locations, but make sure no location appears more than once.";
  }

  return true;
};
