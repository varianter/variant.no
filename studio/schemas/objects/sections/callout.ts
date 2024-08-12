import { defineField } from "sanity";
import { richText, richTextID } from "../../fields/text";
import { link } from "../link";
import { theme } from "studio/schemas/fields/theme";

export const calloutID = "callout";

export const callout = defineField({
  name: calloutID,
  title: "Callout",
  type: "object",
  fields: [theme, richText, link],
  initialValue: {
    theme: "primary",
  },
  preview: {
    select: {
      blocks: `${richTextID}.0.children`,
    },
    prepare(value) {
      const block = value.blocks
        .filter((child: { _type: string }) => child._type === "span")
        .map((span: { text: string }) => span.text)
        .join("");

      return {
        title: block ? block : "No title",
        subtitle: "Callout",
      };
    },
  },
});

export default callout;
