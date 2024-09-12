import { defineField, StringInputProps } from "sanity";
import { StringInputWithCharacterCount } from "../../components/StringInputWithCharacterCount";

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
      validation: (rule) => rule.required().min(1).max(100),
      components: {
        input: (props: StringInputProps) =>
          StringInputWithCharacterCount({ ...props, maxCount: 100 }),
      },
    },
  ],
});

export default categories;
