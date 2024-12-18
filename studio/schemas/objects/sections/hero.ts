import { defineField } from "sanity";

import { allTranslations } from "studio/utils/i18n";

const heroID = "hero";

export const hero = defineField({
  name: heroID,
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "title",
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
                message: "title cannot be more than 200 characters long.",
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
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
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
