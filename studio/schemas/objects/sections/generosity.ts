import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";
import { link } from "studio/schemas/objects/link";

export const generosityID = "generositySection";

export const generositySection = defineField({
  name: generosityID,
  title: "Generosity",
  type: "object",
  fields: [
    {
      name: titleID.basic,
      title: "Title",
      description:
        "Enter the primary title that will be displayed at the top of the section.",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description:
        "Enter the description that will be displayed in the smiley block.",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      name: "handbookBlock",
      type: "object",

      fields: [
        {
          name: "handbookTitle",
          type: "internationalizedArrayString",
          title: "Handbook Title",
          description:
            "Title that will be displayed inside the handbook section.",
        },
        {
          name: "handbookDescription",
          title: "Handbook Description",
          type: "internationalizedArrayString",
          description:
            "Description that will be displayed inside the handbook section.",
        },

        {
          ...link,
          name: "handbookLink",
          description:
            "Bottom link that will be displayed inside the handbook section.",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Generosity Section",
      };
    },
  },
});
