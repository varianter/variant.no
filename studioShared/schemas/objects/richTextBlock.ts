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
  ],
  preview: {
    select: {
      richText: "richText",
    },
    prepare({ richText }) {
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
      };
    },
  },
});

export default richTextBlock;
