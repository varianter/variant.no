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
          type: "object", // You need to define it as an object since it's a custom field
          name: "internationalizedItem",
          fields: [
            {
              name: "listItem",
              title: "List Item",
              type: "internationalizedArrayString",
            },
          ],
          preview: {
            select: {
              item: "listItem",
            },
            prepare({ item }) {
              if (!isInternationalizedString(item)) {
                throw new TypeError(
                  `Expected 'listItem' to be InternationalizedString, was ${typeof item}`,
                );
              }
              const translatedListItem = firstTranslation(item);
              return {
                title:
                  translatedListItem !== null ? translatedListItem : undefined,
              };
            },
          },
        },
      ],
    },
  ],
});

export default listBlock;
