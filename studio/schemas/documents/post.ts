import { defineField, defineType } from "sanity";
import { format, parseISO } from "date-fns";
import { titleSlug } from "../schemaTypes/slug";
import { richText, title } from "../fields/text";
import CategorySelector from "studio/components/CategorySelect";
import image from "../fields/media";

export const postId = "blogPosts";

const posts = defineType({
  name: postId,
  type: "document",
  title: "Posts",
  fields: [
    title,
    titleSlug,
    defineField({
      name: "date",
      title: "Publish Date",
      description: "Select the date and time when this post will be published.",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) =>
        rule.required().custom((date, context) => {
          // Ensure date is not undefined or null
          if (!date) return "The publish date is required.";

          // Ensure context.document is defined and _createdAt exists
          if (!context.document || !context.document._createdAt) {
            return "Creation date is missing.";
          }

          const selectedDate = new Date(date);
          const createdAt = new Date(context.document._createdAt as string);
          const now = new Date();

          // Add a small buffer of 1 second (1000 milliseconds)
          const buffer = 1000;

          // Check if the selected date is older than today
          if (selectedDate.getTime() < now.getTime() - buffer) {
            // If the date is older than today, it cannot be older than _createdAt
            if (selectedDate.getTime() < createdAt.getTime()) {
              return "The publish date cannot be older than the creation date.";
            }
          }

          return true;
        }),
    }),
    defineField({
      name: "category",
      title: "Category",
      description:
        "Select or create a category for this post to help organize your content.",
      type: "string",
      components: {
        input: CategorySelector,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lead",
      title: "Lead Section",
      description:
        "Provide a leading section of the post, including introductory text and a featured image. If this is not added, the first part of the main content will be used as the excerpt for link cards on the frontend.",
      type: "object",
      fields: [
        defineField({
          ...richText,
          description: "Enter the introductory text for the post.",
          validation: (rule) => rule.required(),
        }),
        defineField({
          ...image,
          description: "Upload a featured image for the post.",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      ...richText,
      description: "Enter the main content of the post.",
    }),
  ],
  preview: {
    select: {
      title: "basicTitle",
      date: "date",
      category: "category",
    },
    prepare({ title, date, category }) {
      const subtitles = [
        category,
        date && `— ${format(parseISO(date), "LLL d, yyyy")}`,
      ].filter(Boolean);

      return { title, subtitle: subtitles.join(" ") };
    },
  },
});

export default posts;
