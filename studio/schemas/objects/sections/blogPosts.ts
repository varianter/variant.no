import { defineArrayMember, defineField } from "sanity";

import callToActionField from "studio/schemas/fields/callToActionFields";
import image from "studio/schemas/fields/media";
import { optionalSubtitle, richText, title } from "studio/schemas/fields/text";

export const articleID = "blogPostsID";

/*
 * DEPRECATED: The `blogPosts` object is deprecated.
 * Please avoid using this field in new schemas or content types.
 * Consider using a different structure for blog posts.
 */

export const blogPosts = defineField({
  name: articleID,
  title: "Blog Posts",
  type: "object",
  fields: [
    title,
    optionalSubtitle,
    richText,
    defineField({
      name: "posts",
      type: "array",
      of: [
        defineArrayMember({
          name: "blogPost",
          title: "Blog post",
          type: "object",
          fields: [title, optionalSubtitle, richText, image, callToActionField],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Blog Posts",
      };
    },
  },
});

export default blogPosts;
