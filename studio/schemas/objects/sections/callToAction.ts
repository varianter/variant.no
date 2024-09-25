import { defineField } from "sanity";

import callToActionField from "studio/schemas/fields/callToActionFields";
import { title } from "studio/schemas/fields/text";

export const callToActionID = "ctaObject";

export const callToAction = defineField({
  name: callToActionID,
  title: "Call to Action",
  type: "object",
  fields: [
    {
      ...title,
      description:
        "This will be the title of the call to action section. Make it engaging to capture the attention of your audience.",
    },
    {
      name: "callToActions",
      title: "Call to Actions",
      description:
        "The first Call to Action (CTA) will be styled as a primary link button.",
      type: "array",
      of: [
        {
          type: "object",
          fields: callToActionField.fields,
          preview: callToActionField.preview,
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  initialValue: {
    theme: "primary",
  },
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "No title",
        subtitle: "Call to Action",
      };
    },
  },
});

export default callToAction;
