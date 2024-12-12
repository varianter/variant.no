import { StringInputProps, defineField } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";
import { isInternationalizedString } from "studio/lib/interfaces/global";
import { firstTranslation } from "studio/utils/i18n";

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

const imageAltField = defineField({
  name: "alt",
  type: "string",
  title: "Alternative Text",
  description:
    "Provide a description of the image for accessibility. Leave empty if the image is purely decorative.",
  validation: (rule) => rule.max(100),
  components: {
    input: (props: StringInputProps) =>
      StringInputWithCharacterCount({ ...props, maxCount: 100 }),
  },
});

const internationalizedImageAltField = defineField({
  name: "alt",
  type: "internationalizedArrayString",
  title: "Alternative Text",
  description:
    "Provide a description of the image for accessibility. Leave empty if the image is purely decorative.",
});

const image = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [imageAltField],
});

export const internationalizedImage = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    internationalizedImageAltField,
    {
      name: "figureDescription",
      type: "internationalizedArrayString",
      title: "Figure Description",
      description:
        "Provide a figure description of the image. Leave empty if figure description is not needed.",
    },
  ],
  preview: {
    select: {
      alt: "alt",
      media: "asset",
    },
    prepare({ alt, media }) {
      if (alt !== undefined && !isInternationalizedString(alt)) {
        throw new TypeError(
          `Expected 'alt' to be InternationalizedString, was ${typeof alt}`,
        );
      }
      return {
        title:
          alt !== undefined ? (firstTranslation(alt) ?? undefined) : undefined,
        media,
      };
    },
  },
});

export const imageExtended = defineField({
  name: "imageExtended",
  title: "Extended Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    imageAltField,
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
