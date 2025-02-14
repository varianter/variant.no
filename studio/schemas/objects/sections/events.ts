import { CalendarIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";
import { eventPostingID } from "studio/schemas/objects/eventPosting";

const eventsID = "events";

export const events = defineField({
  name: eventsID,
  title: "Events",
  type: "object",
  icon: CalendarIcon,
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
      name: "all_events",
      title: "Show all events button",
      description:
        "Add a button to section that links to a page to see all events.",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "eventPostingsArray",
      title: "Event Postings",
      type: "array",
      description:
        "Add events to this block to override the global events you find in Admin/EventPostings. Only the events you add to this section will be presented. Remember to regularly remove old events. If you wan't to add a global event and present it with other global events, you can go to 'Admin' and 'Event Postings' and add events there.",
      of: [{ type: eventPostingID }],
    },
    {
      name: "eventSectionColor",
      type: "color",
      title: "Event Section Color",
      description: "Override the basic color with a custom one",
      options: { disableAlpha: true },
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
