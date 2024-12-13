import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";

const jobsID = "jobs";

export const jobs = defineField({
  name: jobsID,
  title: "Jobs",
  type: "object",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
      description:
        "Enter the primary title that will be displayed at the top of the jobs section.",
    },
    {
      name: "subtitle",
      type: "internationalizedArrayString",
      title: "Subtitle",
      description:
        "Enter the subtitle that will be displayed below the title in the jobs section.",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Jobs",
      };
    },
  },
});
