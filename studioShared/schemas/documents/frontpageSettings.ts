import { StarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import { customerCaseID } from "./customerCase";

export const frontpageSettingsID = "frontpageSettings";

const frontpageSettings = defineType({
  name: frontpageSettingsID,
  type: "document",
  title: "Frontpage Settings",
  icon: StarIcon,
  fields: [
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
    prepare() {
      return {
        title: "Frontpage Settings",
      };
    },
  },
});

export default frontpageSettings;
