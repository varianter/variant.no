import { ImageIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { internationalizedImage } from "studio/schemas/fields/media";
import { firstTranslation } from "studio/utils/i18n";

const imageBlock = defineField({
  name: "imageBlock",
  title: "Image Block",
  type: "object",
  icon: ImageIcon,
  fields: [
    {
      title: "Image",
      ...internationalizedImage,
    },
    {
      name: "fullWidth",
      title: "Full Width",
      description:
        "Should the image occupy the full width of the page? (Only works if the image is not a part of a split section)",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      image: "image",
      fullWidth: "fullWidth",
    },
    prepare: ({ image, fullWidth }) => {
      const imageAlt = image.alt;
      if (!isInternationalizedString(imageAlt)) {
        throw new TypeError(
          `Expected image 'alt' to be InternationalizedString, was ${typeof image.alt}`,
        );
      }
      return {
        title:
          imageAlt !== undefined
            ? (firstTranslation(imageAlt) ?? undefined)
            : undefined,
        subtitle: fullWidth ? "Full Width" : undefined,
        media: image,
      };
    },
  },
});

export default imageBlock;
