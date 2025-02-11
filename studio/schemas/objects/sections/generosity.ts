import { HeartIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";

import { handbookSection } from "./handbook";

const generosityID = "generositySection";

export const generositySection = defineField({
  name: generosityID,
  title: "Generosity",
  type: "object",
  icon: HeartIcon,
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
      ...handbookSection,
      name: "handbookBlock",
      title: "Handbook Block",
      description: "Handbook section within the generosity section.",
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
