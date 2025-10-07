import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

import image from "studio/schemas/fields/media";
import { titleID } from "studio/schemas/fields/text";

const learningID = "learningSection";

export const learningSection = defineField({
  name: learningID,
  title: "Learning",
  type: "object",
  icon: BulbOutlineIcon,
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
      description: "An image representing learning in Variant",
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
      name: "articleLink",
      title: "Article link",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "articleTag",
      title: "Article tag",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      name: "articleTitle",
      title: "Article title",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      name: "articleSubtitle",
      title: "Article subtitle",
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
