import { defineField } from "sanity";

export const fieldGrid = defineField({
  name: "fieldGrid",
  title: "Grid",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "fields",
      title: "Fields",
      type: "array",
      of: [{ type: "reference", to: [{ type: "Fields" }] }],
    },
  ],
});
