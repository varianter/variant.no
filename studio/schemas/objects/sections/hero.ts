import { BoltIcon } from "@sanity/icons";
import { defineField } from "sanity";

import image from "studio/schemas/fields/media";
import { allTranslations } from "studio/utils/i18n";

const heroID = "hero";

export const hero = defineField({
  name: heroID,
  title: "Hero Section",
  type: "object",
  icon: BoltIcon,
  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow",
      type: "internationalizedArrayString",
      description: "Optional: A short text displayed above the title.",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>(
          (value) => {
            if (!value) return true;

            const invalidItems = value.filter(
              (item) =>
                typeof item.value === "string" && item.value.length > 200,
            );

            if (invalidItems.length > 0) {
              return invalidItems.map((item) => ({
                message: "Eyebrow cannot be more than 200 characters long.",
                path: [{ _key: item._key }, "value"],
              }));
            }

            return true;
          },
        ),
    },
    {
      name: "title",
      title: "Title",
      type: "internationalizedArrayString",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>(
          (value) => {
            if (!value) return true;

            const invalidItems = value.filter(
              (item) =>
                typeof item.value === "string" && item.value.length > 200,
            );

            if (invalidItems.length > 0) {
              return invalidItems.map((item) => ({
                message: "Title cannot be more than 200 characters long.",
                path: [{ _key: item._key }, "value"],
              }));
            }

            return true;
          },
        ),
    },
    {
      name: "description",
      title: "Description",
      type: "internationalizedArrayString",
      description:
        "Optional: A short description that appears below the title. This will not be visible on the landing page.",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>(
          (value) => {
            if (!value) return true;

            const invalidItems = value.filter(
              (item) =>
                typeof item.value === "string" && item.value.length > 200,
            );

            if (invalidItems.length > 0) {
              return invalidItems.map((item) => ({
                message: "Description cannot be more than 200 characters long.",
                path: [{ _key: item._key }, "value"],
              }));
            }

            return true;
          },
        ),
    },
    image,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: allTranslations(title) ?? undefined,
        subtitle: "Hero Section",
      };
    },
  },
});

export default hero;
