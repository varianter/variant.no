import { defineField } from "sanity";

export enum ImageAlignment {
  Left = "left",
  Right = "right",
}

export enum ImageSize {
  Large = "large",
  Small = "small",
}

const alignmentOptions = [
  { title: "Left", value: ImageAlignment.Left },
  { title: "Right", value: ImageAlignment.Right },
];

const image = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
      description:
        "Provide a description of the image for accessibility. Leave empty if the image is purely decorative.",
    },
  ],
});

export const imageExtended = defineField({
  name: "imageExtended",
  title: "Extended Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
      description:
        "Provide a description of the image for accessibility. Leave empty if the image is purely decorative.",
    },
    {
      name: "imageAlignment",
      title: "Image Alignment",
      type: "string",
      description: "Select the alignment for the image within its container.",
      options: {
        list: alignmentOptions,
        layout: "radio",
      },
      initialValue: ImageAlignment.Left,
    },
  ],
});

export default image;
