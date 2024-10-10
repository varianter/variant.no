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
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
        subtitle: "Call to Action",
      };
    },
  },
});
export default callToActionField;
