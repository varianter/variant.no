import { StringInputProps, defineField } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";
import { imageExtended } from "studio/schemas/fields/media";
import { richText, title } from "studio/schemas/fields/text";
import { link } from "studio/schemas/objects/link";

const articleID = "article";

export const article = defineField({
  name: articleID,
  title: "Article",
  type: "object",
  fields: [
    {
      name: "tag",
      title: "Tag",
      type: "string",
      validation: (rule) => rule.max(60),
      components: {
        input: (props: StringInputProps) =>
          StringInputWithCharacterCount({ ...props, maxCount: 60 }),
      },
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
