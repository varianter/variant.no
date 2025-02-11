import { BookIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { HandbookBackground } from "studio/lib/interfaces/pages";
import { link } from "studio/schemas/objects/link";

const handbookID = "handbookSection";

const handbookBackgroundOptions = [
  { title: "Light", value: HandbookBackground.Light },
  { title: "Violet", value: HandbookBackground.Violet },
];

export const handbookSection = defineField({
  name: handbookID,
  title: "Handbook",
  type: "object",
  icon: BookIcon,
  fields: [
    {
      name: "handbookTitle",
      title: "Title",
      description: "Enter the primary title for the handbook section.",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      name: "handbookDescription",
      title: "Description",
      description: "Enter the description for the handbook section.",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      ...link,
      name: "handbookLink",
      title: "Handbook Link",
      description: "The link to the handbook resource.",
    },
    {
      name: "handbookBackground",
      title: "Background",
      type: "string",
      description:
        "Select whether the handbook should have a purple or dark background.",
      options: {
        list: handbookBackgroundOptions,
        layout: "radio",
      },
      initialValue: HandbookBackground.Light,
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Handbook Section",
      };
    },
  },
});
