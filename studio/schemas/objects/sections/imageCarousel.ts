import { ImagesIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { firstTranslation } from "studio/utils/i18n";

export const imageCarousel = defineField({
  name: "imageCarousel",
  title: "Image Carousel",
  type: "object",
  icon: ImagesIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "internationalizedArrayString",
      description: "Optional title displayed above the carousel.",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      validation: (rule) => rule.min(2).required(),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alternative Text",
                  type: "internationalizedArrayString",
                  description:
                    "Describe the image for screen readers. Leave empty if purely decorative.",
                },
              ],
            },
            {
              name: "caption",
              title: "Caption",
              type: "internationalizedArrayString",
              description:
                "Optional text displayed below the image in the carousel.",
            },
          ],
          preview: {
            select: {
              alt: "image.alt",
              media: "image.asset",
              caption: "caption",
            },
            prepare({ alt, media, caption }) {
              return {
                title:
                  firstTranslation(caption) ?? firstTranslation(alt) ?? "Image",
                media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      images: "images",
    },
    prepare({ title, images }) {
      return {
        title: title
          ? (firstTranslation(title) ?? "Image Carousel")
          : "Image Carousel",
        subtitle: `${images?.length ?? 0} images`,
      };
    },
  },
});

export default imageCarousel;
