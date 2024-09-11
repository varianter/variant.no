// hero.ts
import { defineField, StringInputProps } from "sanity";
import callToActionField from "../../fields/callToActionFields";
import CustomCallToActions from "../../../components/CustomCallToActions";
import { title } from "studio/schemas/fields/text";
import { StringInputWithCharacterCount } from "../../../components/StringInputWithCharacterCount";

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
      validation: (Rule) => Rule.max(200),
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
      validation: (Rule) =>
        Rule.custom((callToActions) => {
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
