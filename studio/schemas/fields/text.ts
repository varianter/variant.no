import { StringRule, defineField } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";

enum titleID {
  basic = "basicTitle",
  optional = "optionalTitle",
}

enum subtitleID {
  optional = "optionalSubtitle",
}

interface CreateFieldProps {
  name: titleID;
  title: string;
  isRequired?: boolean;
  maxLength?: number;
}

const createField = ({
  name,
  title,
  isRequired = false,
  maxLength = 60,
}: CreateFieldProps) => {
  const validationRules = (rule: StringRule) => {
    let rules = rule.max(maxLength);
    if (isRequired) {
      rules = rules.required();
    }
    return rules;
  };

  return defineField({
    name,
    title,
    type: "string",
    validation: validationRules,
    components: {
      input: (props) =>
        StringInputWithCharacterCount({ ...props, maxCount: maxLength }),
    },
  });
};

export const title = createField({
  name: titleID.basic,
  title: "Title",
  isRequired: true,
});

export const optionalTitle = createField({
  name: titleID.optional,
  title: "Title",
});

export const optionalSubtitle = defineField({
  name: subtitleID.optional,
  title: "Subtitle",
  type: "string",
  validation: (rule) => rule.max(60),
  components: {
    input: (props) => StringInputWithCharacterCount({ ...props, maxCount: 60 }),
  },
});

export const richTextID = "richText";

export const richText = defineField({
  name: richTextID,
  title: "Body",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
    },
    {
      type: "image",
    },
  ],
  description: "Add and format rich text content.",
});
