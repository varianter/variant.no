import { defineField, defineType } from "sanity";
import { format, parseISO } from "date-fns";
import { richText, title } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

export const blogPostsID = "blogPosts";

const blogPosts = defineType({
  name: blogPostsID,
  type: "document",
  title: "Blog posts",
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
      ...richText,
      description: "Enter the body content of the post.",
    }),
  ],
  preview: {
    select: {
      title: "basicTitle",
      date: "date",
    },
    prepare({ title, date }) {
      const subtitles = [date && format(parseISO(date), "LLL d, yyyy")].filter(
        Boolean,
      );

      return { title, subtitle: subtitles.join(" ") };
    },
  },
});

export default blogPosts;
