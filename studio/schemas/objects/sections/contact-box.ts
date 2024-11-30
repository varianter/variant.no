import { defineField } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";
import { subtitleID, titleID } from "studio/schemas/fields/text";
import { firstTranslation } from "studio/utils/i18n";

export const contactBoxID = "contactBox";

export enum ContacxtBoxDesignMode {
  Dark = "dark",
  Light = "light",
}

const designModeOptions = [
  { title: "Dark", value: ContacxtBoxDesignMode.Dark },
  { title: "Light", value: ContacxtBoxDesignMode.Light },
];

export const contactBox = defineField({
  name: contactBoxID,
  title: "Contact Box",
  type: "object",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
      description:
        "Enter the primary title that will be displayed as large text in contact box.",
    },
    {
      name: subtitleID.optional,
      type: "internationalizedArrayString",
      title: "Subtitle",
      description: "Extra context under the main title.",
    },
    {
      name: "designMode",
      title: "Design Mode",
      type: "string",
      description:
        "Select the whether the contact box should be light or dark.",
      options: {
        list: designModeOptions,
        layout: "radio",
      },
      initialValue: ContacxtBoxDesignMode.Dark,
    },
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
          preview: {
            select: {
              tag: "tag",
              email: "email",
            },
            prepare({ tag, email }) {
              return {
                title: `${tag} (${email})`,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
      contactPoints: "contactPoints",
    },
    prepare(selection) {
      const { title, contactPoints } = selection;
      return {
        title: "Contact Box: " + (firstTranslation(title) ?? undefined),
        subtitle: contactPoints
          .map(
            (cp: { tag: string; email: string }) => `(${cp.tag}: ${cp.email})`,
          )
          .join(" - "),
      };
    },
  },
});

export default contactBox;
