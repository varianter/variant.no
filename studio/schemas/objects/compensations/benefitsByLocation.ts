import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { companyLocationNameID } from "studio/schemas/documents/admin/companyLocation";
import { richTextID, titleID } from "studio/schemas/fields/text";
import { location, locationID } from "studio/schemas/objects/locations";
import { firstTranslation } from "studio/utils/i18n";

import {
  DocumentWithLocation,
  checkForDuplicateLocations,
} from "./utils/validation";

const benefitTypeId = "benefitType";

const BENEFIT_TYPE_BASIC_VALUE = "basic";
const BENEFIT_TYPES = [
  { title: "Basic", value: BENEFIT_TYPE_BASIC_VALUE },
  { title: "Bonus", value: "bonus" },
  { title: "Pension", value: "pension" },
  { title: "Salary Growth", value: "salaryGrowth" },
];

const benefitType = defineField({
  name: benefitTypeId,
  type: "string",
  title: "Benefit Type",
  description:
    "Choose the type of benefit. Some benefit types include visual graphs that will be displayed together with the text.",
  options: {
    list: BENEFIT_TYPES,
    layout: BENEFIT_TYPES.length > 5 ? "dropdown" : "radio",
  },
  initialValue: BENEFIT_TYPE_BASIC_VALUE,
  validation: (rule) => rule.required(),
});

export const benefitsByLocation = defineField({
  name: "benefitsByLocation",
  title: "Benefits by Location",
  description:
    "Specify the benefits offered at each office location. A benefit is only associated with a single location",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          ...location,
          description:
            "Select the office location for which you are entering benefits information. Each location must be unique.",
          validation: (rule) => rule.required(),
        },
        defineField({
          name: "benefits",
          title: "Benefits",
          description:
            "Enter the benefits offered at the location selected above.",
          type: "array",
          of: [
            {
              name: "benefit",
              type: "object",
              title: "Benefit",
              fields: [
                benefitType,
                {
                  name: titleID.basic,
                  type: "internationalizedArrayString",
                },
                {
                  name: richTextID,
                  title: "Body",
                  type: "internationalizedArrayRichText",
                },
              ],
              preview: {
                select: {
                  title: titleID.basic,
                  type: benefitType.name,
                },
                prepare({ title, type }) {
                  if (!isInternationalizedString(title)) {
                    throw new TypeError(
                      `Expected 'title' to be InternationalizedString, was ${typeof title}`,
                    );
                  }
                  const subtitle =
                    BENEFIT_TYPES.find((o) => o.value === type)?.title ??
                    "Unknown benefit type";
                  return {
                    title: firstTranslation(title) ?? undefined,
                    subtitle,
                  };
                },
              },
            },
          ],
        }),
      ],
      preview: {
        select: {
          location: `${locationID}.${companyLocationNameID}`,
          benefits: "benefits",
        },
        prepare({ location, benefits }) {
          const benefitsCount = benefits ? benefits.length : 0;
          return {
            title: location || "No location selected",
            subtitle: `${benefitsCount} benefit${benefitsCount > 1 ? "s" : ""}`,
          };
        },
      },
    },
  ],
  validation: (rule) =>
    rule.custom((benefitsByLocation) => {
      const isNotDuplicate: boolean = checkForDuplicateLocations(
        benefitsByLocation as DocumentWithLocation[] | undefined,
      );
      return (
        isNotDuplicate ||
        "Each location should be listed only once in the benefits list."
      );
    }),
});

export default benefitsByLocation;
