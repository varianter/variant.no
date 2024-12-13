import { defineField } from "sanity";

import image from "studio/schemas/fields/media";

const logoSaladID = "logoSalad";

export const logoSalad = defineField({
  name: logoSaladID,
  title: "Logo Salad",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Add a title to the logo salad section",
      type: "internationalizedArrayString",
    },
    {
      name: "logos",
      title: "Logos",
      description: "Add the logos you want to display.",
      type: "array",
      of: [image],
      validation: (rule) =>
        rule.required().error("A list of logos is required."),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Logo Salad",
      };
    },
  },
});

export default logoSalad;
