import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { titleID } from "studio/schemas/fields/text";
import { blogSection } from "studio/schemas/objects/sections/blog";
import { compensationCalculator } from "studio/schemas/objects/sections/compensation-calculator";
import contactBox from "studio/schemas/objects/sections/contact-box";
import { customerCasesEntry } from "studio/schemas/objects/sections/customerCasesEntry";
import { employeeHighlightSection } from "studio/schemas/objects/sections/employeeHighlight";
import { employees } from "studio/schemas/objects/sections/employees";
import { eventRegistrationSection } from "studio/schemas/objects/sections/eventRegistration";
import { events } from "studio/schemas/objects/sections/events";
import { fieldGrid } from "studio/schemas/objects/sections/fieldGrid";
import { generositySection } from "studio/schemas/objects/sections/generosity";
import { handbookSection } from "studio/schemas/objects/sections/handbook";
import hero from "studio/schemas/objects/sections/hero";
import imageSection from "studio/schemas/objects/sections/image";
import imageCarousel from "studio/schemas/objects/sections/imageCarousel";
import imageSplitSection from "studio/schemas/objects/sections/imagesplit";
import { jobs } from "studio/schemas/objects/sections/jobs";
import { learningSection } from "studio/schemas/objects/sections/learning";
import logoSalad from "studio/schemas/objects/sections/logoSalad";
import { opennessSection } from "studio/schemas/objects/sections/openness";
import { punchLineBox } from "studio/schemas/objects/sections/punchLineBox";
import splitSection from "studio/schemas/objects/sections/splitSection";
import { textContent } from "studio/schemas/objects/sections/textContent";
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
        imageSplitSection,
        imageSection,
        blogSection,
        employees,
        customerCasesEntry,
        contactBox,
        jobs,
        events,
        employeeHighlightSection,
        compensationCalculator,
        opennessSection,
        generositySection,
        learningSection,
        punchLineBox,
        textContent,
        handbookSection,
        splitSection,
        fieldGrid,
        eventRegistrationSection,
        imageCarousel,
      ],
    }),
    defineField({
      name: "footerWidgetColor",
      type: "simplerColor",
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
      // Handle cases where the field might not be properly initialized yet
      const titleText = isInternationalizedString(title)
        ? (firstTranslation(title) ?? undefined)
        : undefined;

      const slugText = isInternationalizedString(slug)
        ? (firstTranslation(slug) ?? undefined)
        : undefined;

      return {
        title: titleText || "Untitled",
        subtitle: slugText,
      };
    },
  },
});

export default pageBuilder;
