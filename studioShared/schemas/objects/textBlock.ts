import { defineField } from "sanity";

import { firstTranslation } from "studio/utils/i18n";

const textBlock = defineField({
  name: "textBlock",
  title: "Text Block",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "internationalizedArrayText",
    },
    {
      name: "highlighted",
      title: "Highlighted",
      type: "boolean",
      description: "Display the text with a highlight frame",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      text: "text",
      highlighted: "highlighted",
    },
    prepare({ text, highlighted }) {
      return {
        title: firstTranslation(text) ?? undefined,
        subtitle:
          typeof highlighted === "boolean" && highlighted
            ? "Highlighted"
            : undefined,
      };
    },
  },
});

export default textBlock;
