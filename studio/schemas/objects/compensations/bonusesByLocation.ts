import { defineField } from "sanity";
import { location, locationID } from "../locations";
import { companyLocationNameID } from "studio/schemas/documents/companyLocation";
import {
  DocumentWithLocation,
  checkForDuplicateLocations,
} from "./utils/validation";

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
          location: `${locationID}.${companyLocationNameID}`,
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
    Rule.custom((bonusesByLocation) => {
      return (
        checkForDuplicateLocations(
          bonusesByLocation as DocumentWithLocation[] | undefined,
        ) ||
        "Each location should be listed only once in the bonuses list. You can assign the same bonus amount to multiple locations, but make sure no location appears more than once."
      );
    }),
});
