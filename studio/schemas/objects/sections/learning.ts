import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";
export const learningID = "learningSection";

export const learningSection = defineField({
  name: learningID,
  title: "Learning",
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
      name: "image",
      type: "image",
      title: "Image",
      description: "An image of the learning",
      options: {
        hotspot: true,
      },
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
  ],
  preview: {
    prepare() {
      return {
        title: "Learning Section",
      };
    },
  },
});
