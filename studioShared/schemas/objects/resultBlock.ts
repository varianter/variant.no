import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { firstTranslation } from "studio/utils/i18n";

const resultBlock = defineField({
  name: "resultBlock",
  type: "object",
  title: "Result Block",
  description: "This block can be used to add some results from the project.",
  fields: [
    {
      name: "resultBlockTitle",
      title: "Result Block Title",
      description:
        "Please provide a title for the result block, for example: 'These are the results from the project'",
      type: "internationalizedArrayString",
    },
    {
      name: "resultList",
      title: "List of results",
      description: "Add up to five results to be included in this list",
      type: "array",
      validation: (rule) =>
        rule.max(5).error("You can add a maximum of five results"),
      of: [
        {
          type: "object",
          title: "Result List Item",
          name: "resultlistitem",
          fields: [
            {
              name: "result",
              type: "string",
              title: "Result",
              description: "Add result, for example '+ 72%'",
            },
            {
              name: "description",
              type: "internationalizedArrayString",
              title: "Description of the result, for example 'Satisfied users'",
            },
          ],
          preview: {
            select: {
              item: "description",
              subtitle: "result",
            },
            prepare({ item, subtitle }) {
              if (item !== undefined && !isInternationalizedString(item)) {
                throw new TypeError(
                  `Expected 'title' to be InternationalizedString, was ${typeof item}`,
                );
              }
              return {
                title:
                  item !== undefined
                    ? (firstTranslation(item) ?? undefined)
                    : undefined,
                subtitle: subtitle,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "resultBlockTitle",
    },
    prepare({ title }) {
      if (title !== undefined && !isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title:
          title !== undefined
            ? (firstTranslation(title) ?? undefined)
            : undefined,
      };
    },
  },
});

export default resultBlock;
