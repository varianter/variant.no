import { defineField } from "sanity";
import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";

import { optionalSubtitle, title } from "studio/schemas/fields/text";

export const contactBoxID = "contactBox";

export const contactBox = defineField({
  name: contactBoxID,
  title: "Contact Box",
  type: "object",
  fields: [
    title,
    optionalSubtitle,

    {
      name: "contactPoints",
      title: "List of people to contact",
      description: "List of tags and people to contact within those tags.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "tag",
              title: "Tag",
              type: "string",
              validation: (rule) => rule.max(30).required(),
              components: {
                input: (props) =>
                  StringInputWithCharacterCount({ ...props, maxCount: 30 }),
              },
            }),
            defineField({
              name: "email",
              title: "Enter the email address for contact point",
              type: "string",
              validation: (rule) =>
                rule.custom((value: string | undefined) => {
                  if (!value) {
                    return "Must have a valid email address";
                  }
                  if (value && !/^\S+@\S+\.\S+$/.test(value)) {
                    return "Must be a valid email address";
                  }
                  return true;
                }),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
      subtitle: "optionalSubtitle",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
});

export default contactBox;
