// hero.ts
import { StringInputProps, defineField } from "sanity";

import CustomCallToActions from "studio/components/CustomCallToActions";
import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";
import callToActionField from "studio/schemas/fields/callToActionFields";
import { title } from "studio/schemas/fields/text";

export const heroID = "hero";

export const hero = defineField({
  name: heroID,
  title: "Hero Section",
  type: "object",
  fields: [
    title,
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.max(200),
      components: {
        input: (props: StringInputProps) =>
          StringInputWithCharacterCount({ ...props, maxCount: 200 }),
      },
    },
    {
      name: "callToActions",
      title: "Call to Actions",
      description:
        "Available only for landing pages, this feature helps improve user engagement by directing them to important areas or actions on your site. The first Call to Action (CTA) will be styled as a primary link button.",
      type: "array",
      of: [
        {
          type: "object",
          fields: callToActionField.fields,
          preview: callToActionField.preview,
        },
      ],
      validation: (rule) =>
        rule.custom((callToActions) => {
          if (!Array.isArray(callToActions)) return true;
          if (callToActions.length > 2) {
            return "You can only have two Call to Action links";
          }
          return true;
        }),
      components: {
        input: CustomCallToActions,
      },
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Hero Section",
      };
    },
  },
});

export default hero;
