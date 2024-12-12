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
          initialValue: [
            { _key: "en", value: "Handbook" },
            { _key: "no", value: "Håndbok" },
          ],
        },
        {
          name: "handbookDescription",
          title: "Handbook Description",
          type: "internationalizedArrayString",
          description:
            "Description that will be displayed inside the handbook section.",

          initialValue: [
            {
              _key: "en",
              value:
                "Words and actions should go hand in hand. All about us, rules and more you can find in the handbook. If we change, we change the handbook.",
            },
            {
              _key: "no",
              value:
                "Ord og handling bør gå hånd i hånd. Alt om oss, regler og mer finner du i håndboken. Endrer vi på oss, endrer vi håndboken.",
            },
          ],
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
