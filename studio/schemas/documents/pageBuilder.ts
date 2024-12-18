import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { titleID } from "studio/schemas/fields/text";
import article from "studio/schemas/objects/sections/article";
import { compensationCalculator } from "studio/schemas/objects/sections/compensation-calculator";
import contactBox from "studio/schemas/objects/sections/contact-box";
import { customerCasesEntry } from "studio/schemas/objects/sections/customerCasesEntry";
import { employeeHighlightSection } from "studio/schemas/objects/sections/employeeHighlight";
import { employees } from "studio/schemas/objects/sections/employees";
import { generositySection } from "studio/schemas/objects/sections/generosity";
import hero from "studio/schemas/objects/sections/hero";
import imageSection from "studio/schemas/objects/sections/image";
import imageSplitSection from "studio/schemas/objects/sections/imagesplit";
import { jobs } from "studio/schemas/objects/sections/jobs";
import { learningSection } from "studio/schemas/objects/sections/learning";
import logoSalad from "studio/schemas/objects/sections/logoSalad";
import { opennessSection } from "studio/schemas/objects/sections/openness";
import seo from "studio/schemas/objects/seo";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";

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
        // callout,
        // callToAction,
        // testimonals,
        imageSplitSection,
        imageSection,
        // grid,
        employees,
        customerCasesEntry,
        contactBox,
        jobs,
        employeeHighlightSection,
        compensationCalculator,
        opennessSection,
        generositySection,
        learningSection,
      ],
    }),
    defineField({
      name: "footerWidgetColor",
      type: "color",
      title: "Footer Widget Color",
      description: "This color will be used for the widgets in the footer.",
      options: { disableAlpha: true },
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
