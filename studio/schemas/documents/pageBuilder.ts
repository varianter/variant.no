import { defineField, defineType } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";
import article from "studio/schemas/objects/sections/article";
import callout from "studio/schemas/objects/sections/callout";
import callToAction from "studio/schemas/objects/sections/callToAction";
import grid from "studio/schemas/objects/sections/grid";
import hero from "studio/schemas/objects/sections/hero";
import imageSection from "studio/schemas/objects/sections/image";
import logoSalad from "studio/schemas/objects/sections/logoSalad";
import testimonals from "studio/schemas/objects/sections/testimonials";
import seo from "studio/schemas/objects/seo";
import { pageSlug } from "studio/schemas/schemaTypes/slug";

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
