import { defineField, StringInputProps } from "sanity";
import { StringInputWithCharacterCount } from "studio/components/StringInputWithCharacterCount";

const seoFieldID = {
  title: "seoTitle",
  description: "seoDescription",
  keywords: "seoKeywords",
  image: "seoImage",
};

const seo = defineField({
  name: "seo",
  type: "object",
  title: "SEO & Social Media",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: seoFieldID.title,
      type: "string",
      title: "SEO & Social Media Title",
      description:
        "Create an engaging title that attracts users on social media and in search results. Keep the title between 15-70 characters for the best results.",
      validation: (Rule) => [
        Rule.required()
          .min(15)
          .error("A title of minimum 15 characters is required"),
        Rule.max(70).error("A title cannot exceed 70 characters"),
      ],
      components: {
        input: (props) =>
          StringInputWithCharacterCount({ ...props, maxCount: 70 }),
      },
    }),
    defineField({
      name: seoFieldID.description,
      type: "text",
      title: "SEO & Social Media Description",
      description:
        "An optional but recommended short description to boost visitor engagement from social media and search engines. Try to keep it between 70-160 characters.",
      validation: (Rule) => [
        Rule.min(70).warning(
          "A description of at least 70 characters has a higher chance of converting visitors",
        ),
        Rule.max(160).warning(
          "A description of more than 160 characters has a lower chance of converting visitors",
        ),
      ],
      components: {
        input: (props) =>
          StringInputWithCharacterCount({ ...props, maxCount: 160 }),
      },
    }),
    defineField({
      name: seoFieldID.keywords,
      type: "string",
      title: "SEO & Social Media Keywords",
      description:
        "Enter targeted keywords to enhance your content’s visibility in search engines and social media platforms. Use relevant and specific keywords that describe your content, helping to attract the right audience and improve your SEO performance",
      components: {
        input: StringInputWithCharacterCount,
      },
    }),
    defineField({
      name: seoFieldID.image,
      title: "Social Media Image",
      type: "image",
      description:
        "A compelling image for social media can greatly improve conversion rates, even though it doesn't directly affect SEO. Recommended dimensions: 1200x630 (landscape).",
    }),
  ],
});

export default seo;
