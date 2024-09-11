import { defineField, defineType } from "sanity";
import seo from "../objects/seo";
import { pageSlug } from "../schemaTypes/slug";
import { title } from "../fields/text";
import { StringInputWithCharacterCount } from "../../components/StringInputWithCharacterCount";

export const blogId = "blog";

const blog = defineType({
  name: blogId,
  type: "document",
  title: "Blog Overview & Settings",
  fields: [
    defineField({
      name: "page",
      title: "Page name",
      description:
        "Enter a distinctive name for the page to help content editors easily identify and manage it. This name is used internally and is not visible on your website.",
      type: "string",
      validation: (Rule) => Rule.required().max(30),
      components: {
        input: (props) =>
          StringInputWithCharacterCount({ ...props, maxCount: 30 }),
      },
    }),
    pageSlug,
    seo,
    title,
    defineField({
      name: "allPostsLabel",
      title: "Label for All Posts",
      description:
        "Enter the label used to refer to all posts regardless of their category. This label will be displayed in the filter section on the main blog page. Examples include 'news', 'stories', or 'posts'.",
      type: "string",
      initialValue: "All posts",
      validation: (Rule) => Rule.required().max(20),
      components: {
        input: (props) =>
          StringInputWithCharacterCount({ ...props, maxCount: 20 }),
      },
    }),
    defineField({
      name: "categories",
      title: "Blog categories",
      description:
        "Manage the categories for your blog posts. Categories help organize your content and make it easier for users to find specific types of posts. Each category should have a unique name.",
      type: "array",
      of: [
        defineField({
          name: "category",
          title: "Category",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Category Name",
              description:
                "The name of the category. This will be displayed on the website and used for organizing blog posts.",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(100),
              components: {
                input: (props) =>
                  StringInputWithCharacterCount({ ...props, maxCount: 100 }),
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "page",
      urlSlug: "slug.current",
    },
    prepare(selection) {
      const { title, urlSlug } = selection;
      return {
        title: title,
        subtitle: urlSlug,
      };
    },
  },
});

export default blog;
