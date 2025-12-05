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
  ],
  preview: {
    prepare() {
      return {
        title: "Blog Section",
      };
    },
  },
});
