import { StarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import { domainsField } from "studioShared/schemas/fields/domains";

import { customerCaseID } from "./customerCase";

export const frontpageSettingsID = "frontpageSettings";

const frontpageSettings = defineType({
  name: frontpageSettingsID,
  type: "document",
  title: "Frontpage Settings",
  icon: StarIcon,
  fields: [
    defineField({ ...domainsField, validation: (rule) => rule.required() }),
    defineField({
      name: "featuredCases",
      title: "Featured Cases",
      description:
        "Customer cases to feature on the frontpage. Maximum 3 cases.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: customerCaseID }],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (rule) => rule.max(3).unique(),
    }),
  ],
  preview: {
    select: {
      domains: "domains",
    },
    prepare({ domains }) {
      return {
        title: `Frontpage Settings`,
        subtitle: Array.isArray(domains) ? domains.join(", ") : undefined,
      };
    },
  },
});

export default frontpageSettings;
