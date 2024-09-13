import { defineField } from "sanity";
import { richText, title } from "../../../schemas/fields/text";

export const contactFormID = "contactForm";

export const contactForm = defineField({
  name: contactFormID,
  title: "Contact form",
  type: "object",
  fields: [
    title,
    {
      name: "checkboxLabel",
      title: "Consent Agreement Text",
      description:
        "This text appears next to a mandatory checkbox. Users must tick this box to acknowledge and accept the terms and conditions prior to form submission.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        },
      ],
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .error("Consent Agreement Text is required and cannot be empty."),
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
        subtitle: "Contact form",
      };
    },
  },
});

export default contactForm;
