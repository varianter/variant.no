import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { internationalizedImage } from "studio/schemas/fields/media";
import { allTranslations } from "studio/utils/i18n";

export const imageID = "imageSection";

export const imageSection = defineField({
  name: imageID,
  title: "Image",
  type: "object",
  fields: [
    defineField({
      ...internationalizedImage,
      description: "Upload a featured image for the section.",
      validation: (rule) => rule.required(),
    }),
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
            ? (allTranslations(imageAlt) ?? undefined)
            : undefined,
        subtitle: fullWidth ? "Full Width" : undefined,
        media: image,
      };
    },
  },
});

export default imageSection;
