import { defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
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
      title: "Location",
      name: "location",
      type: "reference",
      to: [{ type: "companyLocation" }],
      description: "Where is the role located?",
    },
    {
      title: "Recruitee ad URL",
      name: "recruiteeAdUrl",
      type: "url",
      description:
        "URL to Recruitee ad. Please  enter the full URL, including 'https://', e.g., 'https://www.example.com'.",
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
      location: "location.companyLocationName",
    },
    prepare(selection) {
      const { title, location } = selection;
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
        subtitle: location,
      };
    },
  },
});

export default jobPosting;
