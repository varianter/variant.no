import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";

const eventRegistrationID = "Event Registration";

export const eventRegistrationSection = defineField({
  name: eventRegistrationID,
  title: "Event Registration",
  type: "object",
  fields: [
    {
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
      description:
        "Enter the primary title that will be displayed at the top of the Event Registration form.",
    },
    {
      name: "emailLabel",
      type: "internationalizedArrayString",
      title: "Email Label",
      description: "The label for the email input field.",
    },
    {
      name: "firstNameLabel",
      type: "internationalizedArrayString",
      title: "First Name Label",
      description: "The label for the first name input field.",
    },
    {
      name: "lastNameLabel",
      type: "internationalizedArrayString",
      title: "Last Name Label",
      description: "The label for the last name input field.",
    },
    {
      name: "phoneLabel",
      type: "internationalizedArrayString",
      title: "Phone Label",
      description: "The label for the phone input field.",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Event Registration",
      };
    },
  },
});
