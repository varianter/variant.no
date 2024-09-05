import { defineField } from "sanity";
import { location, locationID } from "../locations";
import {
  DocumentWithLocation,
  checkForDuplicateLocations,
} from "./utils/validation";
import { companyLocationNameID } from "../../documents/companyLocation";
import { SalariesInput } from "../../../components/salariesInput/SalariesInput";

export const salariesByLocation = defineField({
  name: "salaries",
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
          validation: (Rule) => Rule.required(),
        },
        defineField({
          name: "yearlySalaries",
          title: "Yearly Salaries",
          description:
            "Salary data reflecting salaries given to employees for a given year. ",
          type: "array",
          options: {
            sortable: false,
          },
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "year",
                  title: "Year",
                  type: "number",
                  validation: (Rule) => Rule.required().min(2018),
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
        },
        prepare({ location }) {
          return {
            title: location || "No location selected",
            subtitle: "Location Salaries",
          };
        },
      },
    },
  ],
  validation: (Rule) =>
    Rule.custom((salariesByLocation) => {
      const isNotDuplicate: boolean = checkForDuplicateLocations(
        salariesByLocation as DocumentWithLocation[] | undefined,
      );
      return (
        isNotDuplicate ||
        "Each location should be listed only once in the salaries list. You can assign the same salary data to multiple locations, but make sure no location appears more than once."
      );
    }),
});
