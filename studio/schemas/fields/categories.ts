import { defineField } from "sanity";

export const categoriesId = "categories";

const categories = defineField({
  name: categoriesId,
  title: "Blog categories",
  type: "array",
  of: [
    {
      name: "category",
      type: "string",
      title: "Category",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
  ],
});

export default categories;
