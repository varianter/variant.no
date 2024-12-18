import { BlockContentIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { firstTranslation } from "studio/utils/i18n";

const textBlock = defineField({
  name: "textBlock",
  title: "Text Block",
  type: "object",
  icon: BlockContentIcon,
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "internationalizedArrayString",
      description:
        "Section title is optional, and cannot be more than 50 characters.",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>(
          (value) => {
            if (!value) return true;

            const invalidItems = value.filter(
              (item) =>
                typeof item.value === "string" && item.value.length > 50,
            );

            if (invalidItems.length > 0) {
              return invalidItems.map((item) => ({
                message: "Title cannot be more than 50 characters long.",
                path: [{ _key: item._key }, "value"],
              }));
            }

            return true;
          },
        ),
    },
    {
      name: "text",
      title: "Block text content",
      type: "internationalizedArrayText",
      description:
        "Please type the text content for the block. This field is required, and cannot be more than 500 characters.",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>(
          (value) => {
            if (!value || value.length === 0) {
              return { message: "This field is required." };
            }
            const invalidItems = value.filter(
              (item) =>
                typeof item.value === "string" && item.value.length > 500,
            );

            if (invalidItems.length > 0) {
              return invalidItems.map((item) => ({
                message: "Text cannot be more than 500 characters long.",
                path: [{ _key: item._key }, "value"],
              }));
            }
            return true;
          },
        ),
    },
    {
      name: "url",
      title: "Enter an external link",
      type: "url",
      description:
        "If the text block should include a URL, please enter the full URL, including 'https://'. For example, 'https://www.example.com'.",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    },
    {
      name: "textBlockType",
      title: "Text Block Type",
      type: "string",
      description: "Please choose the style you want for the text box.",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "Highlighted", value: "highlighted" },
          /* { title: "Framed", value: "framed" }, */
        ],
        layout: "radio",
        direction: "vertical",
      },
      initialValue: "normal",
    },
  ],
  preview: {
    select: {
      text: "text",
      textBlockType: "textBlockType",
    },
    prepare({ text, textBlockType }) {
      return {
        title: firstTranslation(text) ?? undefined,
        subtitle: textBlockType ? textBlockType : undefined,
      };
    },
  },
});

export default textBlock;
