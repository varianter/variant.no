import { defineField } from "sanity";

import { imageExtended } from "studio/schemas/fields/media";
import { titleID } from "studio/schemas/fields/text";
import { link } from "studio/schemas/objects/link";
import { firstTranslation } from "studio/utils/i18n";

export const imageID = "imageSplitSection";

export const imageSplitSection = defineField({
  name: imageID,
  title: "Image Split",
  type: "object",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
      description:
        "Enter the primary title that will be displayed at the top of the employees section.",
    },

    {
      name: "description",
      type: "internationalizedArrayString",
      title: "Main content",
      description:
        "Enter the main content that will be displayed below the title.",
    },

    imageExtended,
    {
      name: "actions",
      title: "Actions (links)",
      type: "array",
      of: [link],
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: firstTranslation(title) ?? undefined,
      };
    },
  },
});

export default imageSplitSection;
