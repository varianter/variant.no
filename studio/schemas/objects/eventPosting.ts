import { defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { companyLocationID } from "studio/schemas/documents/admin/companyLocation";
import { firstTranslation } from "studio/utils/i18n";

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
      validation: (rule) => rule.required().error("Event name is required"),
    },
    {
      title: "Event description",
      name: "eventDescription",
      type: "text",
      description: "Describe the event",
    },
    {
      title: "Locations",
      name: "locations",
      type: "array",
      description: "The date of the event",
      of: [
        {
          type: "reference",
          to: [{ type: companyLocationID }],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      description: "Where is the role located?",
    },
    {
      title: "Subject tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Tag tags to event and separate them with ,",
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
