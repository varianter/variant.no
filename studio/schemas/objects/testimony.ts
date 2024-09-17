import { StringInputProps, StringRule } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";
import image from "studio/schemas/fields/media";
import { richText, title } from "studio/schemas/fields/text";

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
