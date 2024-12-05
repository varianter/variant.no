import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { titleID } from "studio/schemas/fields/text";
import { firstTranslation } from "studio/utils/i18n";

export const employeeHighlightID = "employeeHighlight";

export const employeeHighlightSection = defineField({
  name: employeeHighlightID,
  title: "Employee Highlight",
  type: "object",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
      description: "The title/prefix that will appear above the name block.",
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
      name: "employeePhoto",
      type: "image",
      title: "Employee photo",
      description: "A photo of the employee,",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
      name: "name",
    },
    prepare({ title, name }) {
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: `${firstTranslation(title) ?? ""} ${name}`,
        subtitle: "Employee highlight",
      };
    },
  },
});
