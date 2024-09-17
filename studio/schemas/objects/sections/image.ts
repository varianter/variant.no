import { defineField } from "sanity";

import image from "studio/schemas/fields/media";
import { title } from "studio/schemas/fields/text";

export const imageID = "imageSection";

export const imageSection = defineField({
  name: imageID,
  title: "Image",
  type: "object",
  fields: [
    title,
    defineField({
      ...image,
      description: "Upload a featured image for the section.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Image",
      };
    },
  },
});

export default imageSection;
