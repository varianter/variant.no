import { defineField } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";

export enum titleID {
  basic = "basicTitle",
  optional = "optionalTitle",
}

export enum subtitleID {
  optional = "optionalSubtitle",
}

interface CreateFieldProps {
  name: titleID;
  title: string;
  isRequired?: boolean;
  maxLength?: number;
}

const createField = ({ name, title }: CreateFieldProps) => {
  return defineField({
    name,
    title,
    type: "internationalizedArrayString",
    validation: (rule) => rule.required(),
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
  title: "BodyNormal",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "Quote", value: "blockquote" },
      ],
    },
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "For accessibility purposes",
        },
        {
          name: "alignment",
          type: "string",
          title: "Alignment",
          description: "Choose how the image should be aligned",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Center", value: "center" },
              { title: "Right", value: "right" },
            ],
            layout: "radio",
          },
        },
      ],
    },
  ],
  description: "Add and format rich text content.",
});
