import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { firstTranslation } from "studio/utils/i18n";
const listBlock = defineField({
  name: "listBlock",
  title: "List Block",
  description:
    "This block could be used to add a list of skills, tools, methods etc. used for this project.",
  type: "object",
  fields: [
    {
      name: "description",
      title: "Description",
      description:
        "Please provide a brief sentence describing the list. For example: The following skills were applied in this project:",
      type: "internationalizedArrayString",
    },
    {
      name: "list",
      title: "List",
      description:
        "Add the items to be included in this list (e.g., skills, tools, methods).",
      type: "array",
      of: [
        {
          type: "object",
          title: "List Item",
          name: "listItem",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "internationalizedArrayString",
            },
          ],
          preview: {
            select: {
              item: "text",
            },
            prepare({ item }) {
              if (!isInternationalizedString(item)) {
                throw new TypeError(
                  `Expected 'item' to be InternationalizedString, was ${typeof item}`,
                );
              }
              return {
                title: firstTranslation(item) ?? undefined,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      description: "description",
    },
    prepare({ description }) {
      if (!isInternationalizedString(description)) {
        throw new TypeError(
          `Expected 'description' to be InternationalizedString, was ${typeof description}`,
        );
      }
      return {
        title: firstTranslation(description) ?? undefined,
      };
    },
  },
});

export default listBlock;
