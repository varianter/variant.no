import { UlistIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";
import { eventPostingID } from "studio/schemas/objects/eventPosting";

const eventsID = "events";

export const events = defineField({
  name: eventsID,
  title: "Events",
  type: "object",
  icon: UlistIcon,
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
      description:
        "Enter the primary title that will be displayed at the top of the events section.",
    },
    {
      name: "subtitle",
      type: "internationalizedArrayString",
      title: "Subtitle",
      description:
        "Enter the subtitle that will be displayed below the title in the events section.",
    },
    {
      name: "intro",
      type: "internationalizedArrayString",
      title: "Intro",
      description: "Intro text on event segment ",
    },
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
        title: "Events",
      };
    },
  },
});
