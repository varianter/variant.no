import { ArrayOfObjectsInputProps, defineField } from "sanity";

import { SalariesInput } from "studio/components/salariesInput/SalariesInput";
import ValueOrderedArrayOfObjectsInput from "studio/components/ValueOrderedArrayOfObjectsInput";
import { isSalariesPage } from "studio/lib/interfaces/compensations";

export const yearlySalaries = defineField({
  name: "yearlySalaries",
  title: "Yearly salaries",
  description: "Yearly salary data.",
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
});
