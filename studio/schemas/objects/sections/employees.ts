import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";

const employeesID = "employees";

export const employees = defineField({
  name: employeesID,
  title: "Employees",
  type: "object",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
      description:
        "Enter the primary title that will be displayed at the top of the employees section.",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Employees",
      };
    },
  },
});
