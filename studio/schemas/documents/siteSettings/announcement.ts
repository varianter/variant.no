import { defineField, defineType } from "sanity";

import { link } from "studio/schemas/objects/link";

export const announcementID = "announcement";

const announcement = defineType({
  name: announcementID,
  type: "document",
  title: "Announcement",
  description: "Message displayed in a banner at the top of each page.",
  fields: [
    defineField({
      name: "text",
      type: "internationalizedArrayString",
      title: "Text",
    }),
    link,
    defineField({
      name: "hideAfter",
      type: "datetime",
      title: "Hide After",
      description:
        "The announcement will be hidden after the specified date and time.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Announcement",
      };
    },
  },
});

export default announcement;
