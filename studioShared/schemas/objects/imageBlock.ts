import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { internationalizedImage } from "studio/schemas/fields/media";
import { firstTranslation } from "studio/utils/i18n";

const imageBlock = defineField({
  name: "imageBlock",
  title: "Image Block",
  type: "object",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [internationalizedImage],
    },
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare: ({ images }) => {
      const count = Object.keys(images).length;
      const firstImage = count > 0 ? images[0] : undefined;
      let firstImageAlt = null;
      if (firstImage !== undefined) {
        const imageAlt = firstImage.alt;
        if (!isInternationalizedString(imageAlt)) {
          throw new TypeError(
            `Expected image 'alt' to be InternationalizedString, was ${typeof firstImage.alt}`,
          );
        }
        firstImageAlt = firstTranslation(imageAlt);
      }
      return {
        title: count > 1 ? `${count} images` : (firstImageAlt ?? undefined),
        media: firstImage,
      };
    },
  },
});

export default imageBlock;
