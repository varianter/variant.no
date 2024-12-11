import { defineField } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";
import { subtitleID, titleID } from "studio/schemas/fields/text";
import { firstTranslation } from "studio/utils/i18n";

export const contactBoxID = "contactBox";

export enum ContactBoxBackground {
  Dark = "dark",
  Light = "light",
  Transparent = "transparent",
}

const backgroundOptions = [
  { title: "Dark", value: ContactBoxBackground.Dark },
  { title: "Light", value: ContactBoxBackground.Light },
  { title: "Transparent", value: ContactBoxBackground.Transparent },
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
      name: "background",
      title: "Background",
      type: "string",
      description:
        "Select the whether the contact box should have light or dark background.",
      options: {
        list: backgroundOptions,
        layout: "radio",
      },
      initialValue: ContactBoxBackground.Dark,
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
              description:
                "Used button to filter contact points (e.g. Trondheim, Bergen, Oslo).",
              validation: (rule) => rule.max(30).required(),
              components: {
                input: (props) =>
                  StringInputWithCharacterCount({ ...props, maxCount: 30 }),
              },
            }),
            defineField({
              name: "overrideTitle",
              title: "Override title",
              type: "internationalizedArrayString",
              description:
                "Specify a title for the contact point. If left empty, the employee's default title will be used.",
            }),
            defineField({
              name: "email",
              title: "Enter the email address for contact point",
              type: "email",
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
