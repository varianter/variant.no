import { SparkleIcon } from "@sanity/icons";
import { defineField } from "sanity";

import image from "studio/schemas/fields/media";
import { titleID } from "studio/schemas/fields/text";
const opennessID = "opennessSection";

export const opennessSection = defineField({
  name: opennessID,
  title: "Openness",
  type: "object",
  icon: SparkleIcon,
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
      ...image,
      description: "Add an image to the section",
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
        title: "Openness Section",
      };
    },
  },
});
