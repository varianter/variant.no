import { defineType } from "sanity";

import { jobPostingID } from "studio/schemas/objects/jobPosting";

export const jobPostingsID = "jobPostings";

const jobPostings = defineType({
  name: jobPostingsID,
  type: "document",
  title: "Job Postings",
  fields: [
    {
      name: "jobPostingsArray",
      title: "Job Postings",
      type: "array",
      of: [{ type: jobPostingID }],
    },
  ],
});

export default jobPostings;
