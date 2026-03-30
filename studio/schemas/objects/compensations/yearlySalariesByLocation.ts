import { ArrayOfObjectsInputProps, defineField } from "sanity";

import { SalariesInput } from "studio/components/salariesInput/SalariesInput";
import ValueOrderedArrayOfObjectsInput from "studio/components/ValueOrderedArrayOfObjectsInput";
import { isSalariesPage } from "studio/lib/interfaces/compensations";
import { companyLocationNameID } from "studio/schemas/documents/admin/companyLocation";
import { location, locationID } from "studio/schemas/objects/locations";

import {
  DocumentWithLocation,
  checkForDuplicateLocations,
} from "./utils/validation";

export const yearlySalariesByLocation = defineField({
  name: "yearlySalariesByLocation",
  title: "Yearly Salaries by Location",
  description:
    "City-specific yearly salary data. Each location has its own salary tables.",
  type: "array",
  of: [
    defineField({
      name: "salaryData",
      title: "Salaries by location",
      type: "object",
      fields: [
        {
          ...location,
          description:
            "Select the company location for which you are entering the yearly salary data. Each location must be unique.",
          validation: (rule) => rule.required(),
        },
        defineField({
          name: "yearlySalaries",
          title: "Yearly Salaries",
          description: "Salary data for this location, one entry per year.",
          type: "array",
          options: {
            sortable: false,
          },
          components: {
            input: (props: ArrayOfObjectsInputProps) =>
              ValueOrderedArrayOfObjectsInput({
                ...props,
                valueCompareFn: (a, b) => {
                  if (isSalariesPage(a)) {
                    if (isSalariesPage(b)) {
                      return b.year - a.year;
                    }
                    return -1;
                  } else if (isSalariesPage(b)) {
                    return 1;
                  }
                  return 0;
                },
              }),
          },
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
        },
        prepare({ location }) {
          return {
            title: location || "No location selected",
          };
        },
      },
    }),
  ],
  validation: (rule) =>
    rule.custom((yearlySalariesByLocation) => {
      const isNotDuplicate: boolean = checkForDuplicateLocations(
        yearlySalariesByLocation as DocumentWithLocation[] | undefined,
      );
      return (
        isNotDuplicate ||
        "Each location should be listed only once. Make sure no location appears more than once."
      );
    }),
});
