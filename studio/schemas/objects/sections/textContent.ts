import { TextIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { isInternationalizedRichText } from "studio/lib/interfaces/global";
import { allTranslations, firstTranslation } from "studio/utils/i18n";
import { richTextPreview } from "studio/utils/preview";

const textContentID = "textContent";

interface Parent {
  textTitle: string;
  textType?: string;
}

export const textContent = defineField({
  name: textContentID,
  title: "Text Content",
  type: "object",
  icon: TextIcon,
  fields: [
    {
      name: "textType",
      title: "Text Type",
      description:
        "Please select the type of text content you want to add. The fields below will vary depending on the selected type.",
      type: "string",
      options: {
        list: [
          { title: "Title", value: "title" },
          { title: "Paragraph", value: "paragraph" },
          { title: "Rich Text", value: "richText" },
          { title: "Quote", value: "quote" },
        ],
        layout: "radio",
      },
      initialValue: "title",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as Parent;
          if (parent?.textTitle && !value) {
            return "Text content type is required";
          }
          return true;
        }),
    },
    {
      name: "textTitle",
      title: "Title Text Content",
      type: "object",
      description:
        "This content will display a title and, if provided, an eyebrow text above.",
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow",
          type: "internationalizedArrayString",
        },
        {
          name: "title",
          title: "Title",
          type: "internationalizedArrayString",
        },
      ],
      hidden: ({ parent }: { parent: Parent }) => parent?.textType !== "title",
    },
    {
      name: "textParagraph",
      title: "Paragraph Text Content",
      description: "This content will display as a text block.",
      type: "object",
      fields: [
        {
          name: "paragraphHeader",
          title: "Paragraph Header",
          type: "internationalizedArrayString",
        },
        {
          name: "textContent",
          title: "Text Content",
          type: "internationalizedArrayText",
        },
      ],
      hidden: ({ parent }: { parent: Parent }) =>
        parent?.textType !== "paragraph",
    },
    {
      name: "richText",
      title: "Rich Text Content",
      description: "This content will display as a rich text block.",
      type: "internationalizedArrayRichText",
      hidden: ({ parent }: { parent: Parent }) =>
        parent?.textType !== "richText",
    },
    {
      name: "textQuote",
      title: "Quote Content",
      description: "This section will display as a quote with author above.",
      type: "object",
      fields: [
        {
          name: "author",
          title: "Author",
          type: "internationalizedArrayString",
        },
        {
          name: "quote",
          title: "Quote",
          type: "internationalizedArrayString",
        },
      ],
      hidden: ({ parent }: { parent: Parent }) => parent?.textType !== "quote",
    },
  ],
  preview: {
    select: {
      title: "textTitle.title",
      paragraph: "textParagraph.paragraphHeader",
      richText: "richText",
      quote: "textQuote.quote",
      textContentType: "textType",
    },
    prepare(selection) {
      const { title, paragraph, richText, quote, textContentType } = selection;

      if (textContentType === "richText") {
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
          subtitle: "Text content type: " + textContentType,
        };
      }
      if (textContentType === "title") {
        return {
          title: allTranslations(title) || undefined,
          subtitle: "Text content type: " + textContentType,
        };
      }
      if (textContentType === "paragraph") {
        return {
          title: allTranslations(paragraph) || undefined,
          subtitle: "Text  content type: " + textContentType,
        };
      }
      if (textContentType === "quote") {
        return {
          title: allTranslations(quote) || undefined,
          subtitle: "Text  content type: " + textContentType,
        };
      }
      return {
        title: "Text content type: " + textContentType,
      };
    },
  },
});
