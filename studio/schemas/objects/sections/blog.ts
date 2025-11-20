import { DocumentsIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";

const blogSectionID = "blogSection";

export const blogSection = defineField({
  name: blogSectionID,
  title: "Blog",
  type: "object",
  icon: DocumentsIcon,
  fields: [
    {
      name: titleID.basic,
      title: "Title",
      description:
        "Enter the title for the blog section with blog posts from our Medium " +
        "blog at https://blog.variant.no (e.g., 'Latest from Variant Blog').",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      name: "buttonTitle",
      title: "Button Title",
      description: "Enter the title for the 'Read More' button.",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    },
    {
      name: "postNumber",
      title: "Number of blog posts",
      description:
        "Enter the number of blog posts you want to show in the Blog Section. " +
        "It has to be between 1-10.",
      type: "number",
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(10)
          .error("Please enter a number between 1 and 10"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Blog Section",
      };
    },
  },
});
