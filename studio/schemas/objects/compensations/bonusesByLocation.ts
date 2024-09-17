import { defineField } from "sanity";

import { BonusPage } from "studio/lib/interfaces/compensations";
import { companyLocationNameID } from "studio/schemas/documents/companyLocation";
import { location, locationID } from "studio/schemas/objects/locations";

import {
  DocumentWithLocation,
  checkForDuplicateLocations,
} from "./utils/validation";

export const bonusesByLocation = defineField({
  name: "bonusesByLocation",
  title: "Bonuses by Location",
  description:
    "Yearly bonus data specific to a particular company location. Each location should have a unique entry with the yearly bonuses given to their employees.",
  type: "array",
  of: [
    defineField({
      name: "bonusData",
      title: "Bonus by location",
      description:
        "Details of the bonus amount specific to a particular location. Each location should have a unique entry with the yearly bonus given to employees.",
      type: "object",
      fields: [
        {
          ...location,
          description:
            "Select the company location for which you are entering the yearly bonus data. Each location must be unique.",
          validation: (rule) => rule.required(),
        },
        defineField({
          name: "yearlyBonuses",
          title: "Yearly Bonuses",
          description:
            "Bonus data reflecting the bonus given to employees for a given year.",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "year",
                  title: "Year",
                  description:
                    "The calendar year for which this bonus was given",
                  type: "number",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "bonus",
                  title: "Bonus",
                  description:
                    "Enter the bonus amount for this year. Ensure the amount is positive and reflective of the compensation package for this location.",
                  type: "number",
                  validation: (rule) =>
                    rule
                      .required()
                      .min(0)
                      .error("Please enter a positive bonus amount."),
                }),
              ],
              preview: {
                select: {
                  title: "year",
                  subtitle: "bonus",
                },
              },
            },
          ],
        }),
      ],
      preview: {
        select: {
          location: `${locationID}.${companyLocationNameID}`,
          yearlyBonuses: `yearlyBonuses`,
        },
        prepare({ location, yearlyBonuses }) {
          const latestBonus =
            yearlyBonuses && yearlyBonuses.length > 0
              ? yearlyBonuses.reduce(
                  (latestBonus: BonusPage, bonus: BonusPage) => {
                    if (bonus.year > latestBonus.year) {
                      return bonus;
                    }
                    return latestBonus;
                  },
                  yearlyBonuses[0],
                )
              : undefined;
          return {
            title: location || "No location selected",
            subtitle: latestBonus
              ? `Latest bonus (${latestBonus.year}): ${latestBonus.bonus}`
              : "N/A",
          };
        },
      },
    }),
  ],
  validation: (rule) =>
    rule.custom((bonusesByLocation) => {
      const isNotDuplicate: boolean = checkForDuplicateLocations(
        bonusesByLocation as DocumentWithLocation[] | undefined,
      );
      return (
        isNotDuplicate ||
        "Each location should be listed only once in the bonuses list. You can assign the same bonus amount to multiple locations, but make sure no location appears more than once."
      );
    }),
});
