import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { title, titleID } from "studio/schemas/fields/text";
import { benefitsByLocation } from "studio/schemas/objects/compensations/benefitsByLocation";
import { bonusesByLocation } from "studio/schemas/objects/compensations/bonusesByLocation";
import { pensionPercent } from "studio/schemas/objects/compensations/pension";
import { salariesByLocation } from "studio/schemas/objects/compensations/salariesByLocation";
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
      ...titleSlug,
      type: "internationalizedArrayString",
    },
    defineField({
      name: "showSalaryCalculator",
      title: "Show Salary Calculator",
      description:
        "Toggle this setting to show or hide the salary calculator on the page. The salary calculator helps users estimate their total compensation based on various factors such as salary data, pension and bonuses.",
      type: "boolean",
      initialValue: true,
    }),
    pensionPercent,
    bonusesByLocation,
    benefitsByLocation,
    salariesByLocation,
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
      const translatedTitle = isInternationalizedString(title)
        ? firstTranslation(title)
        : null;
      return {
        title: translatedTitle ?? "Missing title",
      };
    },
  },
});

export default compensations;
