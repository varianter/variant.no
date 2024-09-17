import { defineField } from "sanity";

import { link } from "studio/schemas/objects/link";

import { clearLinkFields } from "./clearLinkFields";

export const callToActionFieldID = "callToActionField";

const callToActionField = defineField({
  name: callToActionFieldID,
  title: "Call to Action",
  type: "object",
  fields: [...link.fields, clearLinkFields],
  preview: {
    select: {
      title: "linkTitle",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Call to Action",
      };
    },
  },
});
export default callToActionField;
