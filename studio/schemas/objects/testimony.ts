import { richText, title } from "../fields/text";
import image from "../fields/media";
import { StringInputWithCharacterCount } from "../../components/StringInputWithCharacterCount";
import { StringInputProps, StringRule } from "sanity";

export const testimony = {
  name: "testimony",
  type: "object",
  title: "Testimony",
  fields: [
    title,
    {
      name: "subTitle",
      type: "string",
      title: "Subtitle",
      validation: (rule: StringRule) => rule.max(100),
      components: {
        input: (props: StringInputProps) =>
          StringInputWithCharacterCount({ ...props, maxCount: 100 }),
      },
    },
    image,
    richText,
  ],
};

export default testimony;
