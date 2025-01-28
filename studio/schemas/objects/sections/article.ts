import { BlockContentIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { imageExtended } from "studio/schemas/fields/media";
import { title } from "studio/schemas/fields/text";
import { link } from "studio/schemas/objects/link";

const articleID = "article";

export const article = defineField({
  name: articleID,
  title: "Article",
  type: "object",
  icon: BlockContentIcon,
  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow",
      type: "internationalizedArrayString",
    },
    title,
    {
      name: "richText",
      title: "BodyNormal",
      type: "internationalizedArrayRichText",
      description: "Add and format rich text content.",
    },
    imageExtended,
    link,
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Article",
      };
    },
  },
});

export default article;
