import { defineField } from "sanity";

import { isInternationalizedRichText } from "studio/lib/interfaces/global";
import { firstTranslation } from "studio/utils/i18n";
import { richTextPreview } from "studio/utils/preview";

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
    {
      name: "highlighted",
      title: "Highlighted",
      type: "boolean",
      description: "Display the rich text with a highlight frame",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      richText: "richText",
      highlighted: "highlighted",
    },
    prepare({ richText, highlighted }) {
      if (!isInternationalizedRichText(richText)) {
        throw new TypeError(
          `Expected 'richText' to be InternationalizedRichText, was ${typeof richText}`,
        );
      }
      const translatedRichText = firstTranslation(richText);
      return {
        title:
          translatedRichText !== null
            ? richTextPreview(translatedRichText)
            : undefined,
        subtitle:
          typeof highlighted === "boolean" && highlighted
            ? "Highlighted"
            : undefined,
      };
    },
  },
});

export default richTextBlock;
