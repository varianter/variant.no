import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { titleID } from "studio/schemas/fields/text";
import article from "studio/schemas/objects/sections/article";
import callout from "studio/schemas/objects/sections/callout";
import callToAction from "studio/schemas/objects/sections/callToAction";
import { employees } from "studio/schemas/objects/sections/employees";
import grid from "studio/schemas/objects/sections/grid";
import hero from "studio/schemas/objects/sections/hero";
import imageSection from "studio/schemas/objects/sections/image";
import logoSalad from "studio/schemas/objects/sections/logoSalad";
import testimonals from "studio/schemas/objects/sections/testimonials";
import seo from "studio/schemas/objects/seo";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";
import contactBox from "../objects/sections/contact-box";

export const pageBuilderID = "pageBuilder";

const pageBuilder = defineType({
  name: pageBuilderID,
  type: "document",
  title: "Dynamic pages",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Page Title",
      description:
        "Enter the primary title that will be displayed in Sanity and the breadcrumb trail at the top of the page.",
    },
    {
      ...titleSlug,
      type: "internationalizedArrayString",
    },
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
        employees,
        contactBox,
      ],
    }),
  ],
  preview: {
    select: {
      title: titleID.basic,
      slug: titleSlug.name,
    },
    prepare({ title, slug }) {
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      if (!isInternationalizedString(slug)) {
        throw new TypeError(
          `Expected 'slug' to be InternationalizedString, was ${typeof slug}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
        subtitle: firstTranslation(slug) ?? undefined,
      };
    },
  },
});

export default pageBuilder;
