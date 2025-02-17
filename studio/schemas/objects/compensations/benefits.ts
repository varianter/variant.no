import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import {
  companyLocationID,
  companyLocationNameID,
} from "studio/schemas/documents/admin/companyLocation";
import { richTextID, titleID } from "studio/schemas/fields/text";
import { firstTranslation } from "studio/utils/i18n";

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

export const benefits = defineField({
  name: "benefits",
  title: "Benefits",
  description: "Enter the list of benefits.",
  type: "array",
  of: [
    {
      name: "benefit",
      type: "object",
      title: "Benefit",
      fields: [
        benefitType,
        {
          name: "location",
          title: "Location",
          type: "reference",
          description:
            "Select the location this benefit applies to. Select Norge for benefits that apply to all locations.",
          to: [{ type: companyLocationID }],
          options: {
            disableNew: true,
          },
          validation: (Rule) => Rule.required(),
        },
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
          location: "location." + companyLocationNameID,
        },
        prepare({ title, type, location }) {
          if (!isInternationalizedString(title)) {
            throw new TypeError(
              `Expected 'title' to be InternationalizedString, was ${typeof title}`,
            );
          }
          const subtitle = `${
            BENEFIT_TYPES.find((o) => o.value === type)?.title ??
            "Unknown benefit type"
          } - ${location ?? "All Locations"}`;
          return {
            title: firstTranslation(title) ?? undefined,
            subtitle,
          };
        },
      },
    },
  ],
});

export default benefits;
