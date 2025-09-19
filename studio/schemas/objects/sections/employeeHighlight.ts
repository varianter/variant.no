import { HighlightIcon } from "@sanity/icons";
import { defineField } from "sanity";

import image from "studio/schemas/fields/media";
import { titleID } from "studio/schemas/fields/text";

const employeeHighlightID = "employeeHighlight";

export const employeeHighlightSection = defineField({
  name: employeeHighlightID,
  title: "Employee Highlight",
  type: "object",
  icon: HighlightIcon,
  fields: [
    {
      name: "employees",
      type: "array",
      title: "Employees",
      description: "Add one or more employees",
      of: [
        {
          type: "object",
          name: "employee",
          fields: [
            {
              name: titleID.basic,
              type: "internationalizedArrayString",
              title: "Title",
              description:
                "The title/prefix that will appear above the name block.",
            },
            {
              name: "name",
              type: "string",
              title: "Name",
              description: "The name of the employee.",
            },
            {
              name: "description",
              type: "internationalizedArrayText",
              title: "Description",
              description: "The body text in the section.",
            },
            {
              ...image,
              name: "employeePhoto",
              title: "Employee photo",
              description: "A photo of the employee,",
            },
            {
              name: "email",
              type: "string",
              title: "Email",
              validation: (Rule) =>
                Rule.email().warning("Should be a valid email"),
            },
            {
              name: "phone",
              type: "string",
              title: "Phone number",
              description: "Free text, include country code if needed.",
            },
          ],
          preview: {
            select: {
              title: titleID.basic,
              name: "name",
            },
            prepare({ name }) {
              return {
                title: name ?? "No name",
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Employee Highlight",
      };
    },
  },
});
