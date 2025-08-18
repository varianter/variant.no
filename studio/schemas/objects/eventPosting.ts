import { defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { richText } from "studio/schemas/fields/text";
import { allTranslations, firstTranslation } from "studio/utils/i18n";
import {
  validateInternationalizedArray,
  validateInternationalizedField,
} from "studio/utils/internationalizedFieldValidator";

import seoWithoutImage from "./seoWithoutImage";

export const eventPostingID = "eventPosting";

const eventPosting = defineType({
  name: eventPostingID,
  title: "Event Posting",
  type: "object",
  fields: [
    {
      title: "Event title",
      name: "eventTitle",
      type: "internationalizedArrayString",
      description: "The name of the event",
      validation: validateInternationalizedField("Event title"),
    },
    {
      title: "Event description",
      name: "eventDescription",
      type: "internationalizedArrayString",
      description: "Describe the event",
    },
    {
      title: "Locations",
      name: "locations",
      type: "array",
      validation: validateInternationalizedArray("Location", "locationString"),

      of: [
        {
          title: "Location",
          name: "location",
          type: "object",
          fields: [
            {
              name: "locationString",
              type: "internationalizedArrayString",
              title: "Location",
            },
          ],
          preview: {
            select: {
              title: "locationString",
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: allTranslations(title) || "No location",
              };
            },
          },
        },
      ],
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      description: "Where is the role located?",
    },
    {
      title: "Time",
      name: "time",
      type: "string",
      description: "The time of the event (e.g. 14:00, 09:00-17:00)",
    },
    {
      title: "Subject Tags",
      name: "tags",
      type: "array",
      description: "Add tags to categorize the event.",
      of: [
        {
          title: "Tag",
          name: "tags",
          type: "object",
          fields: [
            {
              name: "tag",
              type: "internationalizedArrayString",
              title: "Tag",
            },
          ],
          preview: {
            select: {
              title: "tag",
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: allTranslations(title) || "No tags",
              };
            },
          },
        },
      ],
    },
    {
      title: "Connected consultants",
      name: "consultants",
      description:
        "The consultants enrolled in the project. Use employee emails and first names  (e.g. 'oms@variant.no' and Odd Morten).",
      type: "array",
      of: [
        {
          type: "object",
          title: "List of employees in project",
          name: "employeesInProjectList",
          fields: [
            {
              name: "employeeEmail",
              title: "Add employee email (e.g. oms@variant.no)",
              type: "email",
            },
            {
              name: "employeeFirstName",
              title:
                "Add the first name(s) of the consultant corresponding to the email above. If there are multiple employees with the same name, feel free to include the initials of the last name (e.g. Odd Morten S.)",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      title: "External link",
      name: "externalLink",
      type: "url",
      description:
        "If the event is postet on an external site, paste the URL here",
      validation: (rule) => [
        rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
      ],
      hidden: ({ parent }) => parent?.createInternalPage,
    },
    {
      name: "createInternalPage",
      title: "Create an internal page",
      type: "boolean",
      description:
        "If you want to create a page in the Page Builder for this event, check this box.",
      initialValue: false,
    },
    {
      ...seoWithoutImage,
      hidden: ({ parent }) => !parent?.createInternalPage,
    },
    {
      name: "recordID",
      type: "number",
      title: "Record ID",
      description:
        "The unique identifier for the event registration record in HubSpot. This is used to track registrations.",
      hidden: ({ parent }) => !parent?.createInternalPage,
    },
    {
      name: "eventImage",
      title: "Event image",
      type: "image",
      description: "An image representing the event",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => !parent?.createInternalPage,
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "internationalizedArrayString",
      description: "An optional subtitle for the event",
      hidden: ({ parent }) => !parent?.createInternalPage,
    },
    {
      ...richText,
      hidden: ({ parent }) => !parent?.createInternalPage,
    },
  ],
  preview: {
    select: {
      title: "eventTitle",
    },
    prepare({ title }) {
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
      };
    },
  },
});

export default eventPosting;
