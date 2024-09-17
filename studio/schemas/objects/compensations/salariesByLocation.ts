import { defineField } from "sanity";
import { location, locationID } from "../locations";
import {
  DocumentWithLocation,
  checkForDuplicateLocations,
} from "./utils/validation";
import { companyLocationNameID } from "../../documents/companyLocation";
import { SalariesInput } from "../../../components/salariesInput/SalariesInput";
import { SalariesPage } from "../../../lib/interfaces/compensations";

export const salariesByLocation = defineField({
  name: "salariesByLocation",
  title: "Salaries by Location",
  description:
    "Yearly salary data specific to a particular location. Each location should have a unique entry with the yearly salaries for that location.",
  type: "array",
  of: [
    {
      title: "Location Salaries",
      description: "Yearly salary data for a specific location",
      type: "object",
      fields: [
        {
          ...location,
          description:
            "Select the company location for which you are entering the salary information. Each location must be unique.",
          validation: (rule) => rule.required(),
        },
        defineField({
          name: "yearlySalaries",
          title: "Yearly Salaries",
          description:
            "Salary data reflecting salaries given to employees for a given year. ",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "year",
                  title: "Year",
                  description:
                    "The calendar year for which these salaries were in effect",
                  type: "number",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "salaries",
                  title: "Salaries",
                  description:
                    "Salary amounts for each examination year. File upload expects a CSV file (.csv) containing lines of '{year},{salary}', e.g. '2024,600000'.",
                  type: "string",
                  components: {
                    input: SalariesInput,
                  },
                }),
              ],
              preview: {
                select: {
                  title: "year",
                },
              },
            },
          ],
        }),
      ],
      preview: {
        select: {
          location: `${locationID}.${companyLocationNameID}`,
          yearlySalaries: `yearlySalaries`,
        },
        prepare({ location, yearlySalaries }) {
          const latestYear =
            yearlySalaries && yearlySalaries.length > 0
              ? yearlySalaries.reduce((acc: number, salaries: SalariesPage) => {
                  if (salaries.year > acc) {
                    return salaries.year;
                  }
                  return acc;
                }, yearlySalaries[0].year)
              : undefined;
          return {
            title: location || "No location selected",
            subtitle: latestYear ? `Latest year: ${latestYear}` : "N/A",
          };
        },
      },
    },
  ],
  validation: (rule) =>
    rule.custom((salariesByLocation) => {
      const isNotDuplicate: boolean = checkForDuplicateLocations(
        salariesByLocation as DocumentWithLocation[] | undefined,
      );
      return (
        isNotDuplicate ||
        "Each location should be listed only once in the salaries list. You can assign the same salary data to multiple locations, but make sure no location appears more than once."
      );
    }),
});
