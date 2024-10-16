import { defineField } from "sanity";

import { isInternationalizedValue } from "studio/lib/interfaces/global";
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
      // TODO: better type guard for rich text
      if (!isInternationalizedValue(richText)) {
        throw new TypeError(
          `Expected 'richText' to be InternationalizedValue, was ${typeof richText}`,
        );
      }
      const translatedRichText = firstTranslation(richText);
      return {
        title: richTextPreview(translatedRichText),
      };
    },
  },
});

export default richTextBlock;
