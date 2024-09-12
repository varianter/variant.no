import { defineField, StringInputProps } from "sanity";
import image from "studio/schemas/fields/media";
import { richText } from "studio/schemas/fields/text";
import { StringInputWithCharacterCount } from "../../../components/StringInputWithCharacterCount";

export const logoSaladID = "logoSalad";

export const logoSalad = defineField({
  name: logoSaladID,
  title: "Logo Salad",
  type: "object",
  fields: [
    {
      ...richText,
      title: "Introduction",
      description:
        "Optional content displayed at the top of the section in a larger body text style. Use it to introduce the section and provide key information.",
    },
    {
      name: "supporting",
      title: "Logo Description",
      type: "string",
      description:
        "Required text displayed in a smaller body text style. Use it to provide additional context or details about the logos.",
      validation: (rule) => [
        rule.required().error("Logo description is required."),
        rule.max(100),
      ],
      components: {
        input: (props: StringInputProps) =>
          StringInputWithCharacterCount({ ...props, maxCount: 100 }),
      },
    },
    {
      name: "logos",
      title: "List of Logos",
      description:
        "Add a list of logos to display. You must include between 6 and 12 logos.",
      type: "array",
      of: [image],
      validation: (rule) =>
        rule
          .min(6)
          .error("At least 6 logos are required.")
          .max(12)
          .error("You can add up to 12 logos.")
          .required()
          .error("The list of logos is required."),
    },
  ],
  preview: {
    select: {
      title: "supporting",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Logo Salad",
      };
    },
  },
});

export default logoSalad;
