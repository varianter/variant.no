import { defineField } from "sanity";

import { titleID } from "studio/schemas/fields/text";

const eventRegistrationID = "eventRegistration";

export const eventRegistrationSection = defineField({
  name: eventRegistrationID,
  title: "Event Registration",
  type: "object",
  fields: [
    {
      name: "recordID",
      type: "number",
      title: "Record ID",
      description:
        "The unique identifier for the event registration record in HubSpot. This is used to track registrations.",
    },
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
    {
      name: "submitButtonText",
      type: "internationalizedArrayString",
      title: "Submit Button Text",
      description: "The text displayed on the submit button.",
    },
    {
      name: "successMessage",
      type: "internationalizedArrayString",
      title: "Success Message",
      description:
        "The message displayed to the user after a successful registration.",
    },
    {
      name: "errorMessage",
      type: "internationalizedArrayString",
      title: "Error Message",
      description:
        "The message displayed to the user if there is an error during registration.",
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
