import { defineType } from "sanity";

import { eventPostingID } from "studio/schemas/objects/eventPosting";

export const eventPostingsID = "eventPostings";

const eventPostings = defineType({
  name: eventPostingsID,
  type: "document",
  title: "Event Postings",
  fields: [
    {
      name: "eventPostingsArray",
      title: "Event Postings",
      type: "array",
      of: [{ type: eventPostingID }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Event Postings",
      };
    },
  },
});

export default eventPostings;
