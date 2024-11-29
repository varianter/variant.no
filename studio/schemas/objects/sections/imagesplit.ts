import { defineField } from "sanity";

import { imageExtended } from "studio/schemas/fields/media";
import { richText, title } from "studio/schemas/fields/text";
import { link } from "studio/schemas/objects/link";

export const imageID = "imageSplitSection";

export const imageSplitSection = defineField({
  name: imageID,
  title: "Image Split",
  type: "object",
  fields: [title, richText, imageExtended, link],
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

export default imageSplitSection;
