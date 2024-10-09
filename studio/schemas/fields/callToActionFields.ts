import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { link } from "studio/schemas/objects/link";
import { firstTranslation } from "studio/utils/i18n";

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
      const translatedTitle = isInternationalizedString(title)
        ? firstTranslation(title)
        : null;
      return {
        title: translatedTitle ?? "Missing title",
        subtitle: "Call to Action",
      };
    },
  },
});
export default callToActionField;
