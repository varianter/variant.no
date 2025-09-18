import { HighlightIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import image from "studio/schemas/fields/media";
import { titleID } from "studio/schemas/fields/text";
import { firstTranslation } from "studio/utils/i18n";

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
      description:
        "Add one or more employees. If empty, the legacy single fields below will be used.",
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
            prepare({ title, name }) {
              try {
                if (isInternationalizedString(title)) {
                  return {
                    title: `${firstTranslation(title) ?? ""}`.trim(),
                    subtitle: name,
                  };
                }
              } catch {
                // no-op, fallthrough to generic preview
              }
              return {
                title: name ?? "Employee highlight",
                subtitle: "Employee highlight",
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
