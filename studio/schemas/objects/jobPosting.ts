import { defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { companyLocationID } from "studio/schemas/documents/admin/companyLocation";
import { firstTranslation } from "studio/utils/i18n";

export const jobPostingID = "jobPosting";

const jobPosting = defineType({
  name: jobPostingID,
  title: "Job Posting",
  type: "object",
  fields: [
    {
      title: "Role",
      name: "role",
      type: "internationalizedArrayString",
      description: "The name of the role",
      validation: (rule) => rule.required().error("Role name is required"),
    },
    {
      title: "Locations",
      name: "locations",
      type: "array",
      description: "Where is the role located?",
      of: [
        {
          type: "reference",
          to: [{ type: companyLocationID }],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      title: "Recruitee ad URL",
      name: "recruiteeAdUrl",
      type: "url",
      description:
        "URL to Recruitee ad. Please enter the full URL, including 'https://', e.g., 'https://www.example.com'.",
      validation: (rule) => [
        rule.required(),
        rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: "role",
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

export default jobPosting;
