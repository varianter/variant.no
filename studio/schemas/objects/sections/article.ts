import { defineField } from "sanity";
import { richText, title } from "../../../schemas/fields/text";
import { imageExtended } from "../../../schemas/fields/media";
import { link } from "../link";

export const articleID = "article";

export const article = defineField({
  name: articleID,
  title: "Article",
  type: "object",
  fields: [
    {
      name: "tag",
      title: "Tag",
      type: "string",
    },
    title,
    richText,
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
