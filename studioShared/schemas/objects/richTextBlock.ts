import { defineField } from "sanity";

const richTextBlock = defineField({
  name: "richTextBlock",
  title: "Rich Text Block",
  type: "object",
  fields: [
    {
      name: "richText",
      title: "Rich Text",
      type: "internationalizedArrayRichText",
    },
  ],
  preview: {
    select: {
      text: "richText",
    },
    prepare({ text }) {
      return {
        title: text, //Does not work
      };
    },
  },
});

export default richTextBlock;
