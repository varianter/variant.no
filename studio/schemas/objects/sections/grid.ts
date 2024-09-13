import { defineField } from "sanity";
import { richText, title } from "../../../schemas/fields/text";
import image from "studio/schemas/fields/media";
import { theme } from "studio/schemas/fields/theme";

export const gridID = "grid";

export const grid = defineField({
  name: gridID,
  title: "Content Grid",
  type: "object",
  fields: [
    title,
    {
      name: "items",
      title: "Grid Items",
      description:
        "Add and manage items to be displayed in the grid. Each item can represent an employee or any other entity.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              ...title,
              title: "Item Title",
              description:
                "Title of the grid item, such as the name of an employee.",
              validation: (rule) => rule.required(),
            },
            {
              ...richText,
              title: "Description",
              description:
                "Description of the grid item, such as the role or bio of an employee.",
            },
            {
              ...image,
              title: "Item Image",
              description:
                "Image of the grid item, such as a photo of an employee.",
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: "basicTitle",
              media: "image",
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title,
                subtitle: "Grid Item",
                media: media,
              };
            },
          },
        },
      ],
      validation: (rule) =>
        rule.required().min(1).error("At least one grid item is required."),
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Content Grid",
      };
    },
  },
});

export default grid;
