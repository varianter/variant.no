import { defineField, defineType } from "sanity";

import seo from "../objects/seo";
import { pageSlug } from "../schemaTypes/slug";
import hero from "../objects/sections/hero";
import article from "../objects/sections/article";
import logoSalad from "../objects/sections/logoSalad";
import callout from "../objects/sections/callout";
import callToAction from "../objects/sections/callToAction";
import testimonals from "../objects/sections/testimonials";
import imageSection from "../objects/sections/image";
import grid from "../objects/sections/grid";
import contactForm from "../objects/sections/form";
import { StringInputWithCharacterCount } from "../../components/StringInputWithCharacterCount";

export const pageBuilderID = "pageBuilder";

const pageBuilder = defineType({
  name: pageBuilderID,
  type: "document",
  title: "Dynamic pages",
  fields: [
    defineField({
      name: "page",
      title: "Page name",
      description:
        "Enter a distinctive name for the dynamic page to help content editors easily identify and manage it. This name is used internally and is not visible on your website.",
      type: "string",
      validation: (rule) => rule.required().max(30),
      components: {
        input: (props) =>
          StringInputWithCharacterCount({ ...props, maxCount: 30 }),
      },
    }),
    pageSlug,
    seo,
    defineField({
      name: "sections",
      title: "Sections",
      description: "Add sections here",
      type: "array",
      of: [
        hero,
        logoSalad,
        article,
        callout,
        callToAction,
        testimonals,
        imageSection,
        grid,
        contactForm,
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

export default pageBuilder;
