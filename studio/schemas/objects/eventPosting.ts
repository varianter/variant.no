import { defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { allTranslations, firstTranslation } from "studio/utils/i18n";

export const eventPostingID = "eventPosting";

// Lazy reference to avoid circular dependency
const lazyPageBuilderID = () => "pageBuilder";

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
      validation: (rule) =>
        rule
          .required()
          .error("Event name is required")
          .custom((value) => {
            if (!value || !Array.isArray(value)) {
              return "Event title must be an array";
            }

            const missingLanguages = ["en", "no"].filter(
              (lang) =>
                !value.some((entry) => entry._key === lang && entry.value),
            );

            return missingLanguages.length > 0
              ? `Missing translations for: ${missingLanguages.join(", ")}`
              : true;
          }),
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
      validation: (rule) =>
        rule
          .required()
          .error("At least one location is required")
          .custom((locations) => {
            if (
              !locations ||
              !Array.isArray(locations) ||
              locations.length === 0
            ) {
              return "At least one location is required";
            }

            for (const location of locations) {
              if (
                !location.locationString ||
                !Array.isArray(location.locationString)
              ) {
                return "Each location must have a valid internationalized name";
              }

              const missingLanguages = ["en", "no"].filter(
                (lang) =>
                  !location.locationString.some(
                    (entry: { _key: string; value?: string }) =>
                      entry._key === lang && entry.value,
                  ),
              );

              if (missingLanguages.length > 0) {
                return `Location "${allTranslations(location.locationString)}" is missing translations for: ${missingLanguages.join(", ")}`;
              }
            }

            return true;
          }),
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
    },
    {
      name: "internalLink",
      title: "Internal Link",
      description:
        "Select the page you want to link to. The page has to have a slug for the link to work.",
      type: "reference",
      to: [{ type: lazyPageBuilderID() }],
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
