import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { richTextID, title, titleID } from "studio/schemas/fields/text";
import benefits from "studio/schemas/objects/compensations/benefits";
import { bonusesByLocation } from "studio/schemas/objects/compensations/bonusesByLocation";
import { pensionPercent } from "studio/schemas/objects/compensations/pension";
import { yearlySalaries } from "studio/schemas/objects/compensations/salaries";
import { yearlySalariesByLocation } from "studio/schemas/objects/compensations/yearlySalariesByLocation";
import { link } from "studio/schemas/objects/link";
import splitSection from "studio/schemas/objects/sections/splitSection";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";

export const compensationsId = "compensations";

const compensations = defineType({
  name: compensationsId,
  type: "document",
  title: "Compensations",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Compensation Page Title",
      description:
        "Enter the primary title that will be displayed at the top of the compensation page. This is what users will see when they visit the page.",
    },
    {
      name: richTextID,
      title: "Description",
      type: "internationalizedArrayRichText",
      description:
        "Enter a brief description to provide more context about the compensation page. This will appear under the title.",
    },
    {
      ...titleSlug,
      type: "internationalizedArrayString",
    },
    splitSection,
    pensionPercent,
    bonusesByLocation,
    benefits,
    yearlySalariesByLocation,
    // @deprecated REMOVE - keep visible during migration, then remove
    {
      ...yearlySalaries,
      title: "[DEPRECATED] Yearly salaries (global)",
      description:
        "This field is deprecated and will be removed. Use 'Yearly Salaries by Location' instead. Data here is used as fallback for cities not yet migrated.",
      readOnly: true,
    },
    defineField({
      name: "handbookLinks",
      title: "Handbook Section Links",
      description:
        "Ordered links to sections in handbook to show important information when it comes to benefits. Used by compensation calculator module.",
      type: "array",
      of: [link],
    }),

    {
      name: "seo",
      type: "internationalizedArraySeo",
    },
  ],
  preview: {
    select: {
      title: title.name,
    },
    prepare({ title }) {
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
      };
    },
  },
});

export default compensations;
