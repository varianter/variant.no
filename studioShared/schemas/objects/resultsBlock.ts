import { BarChartIcon, CommentIcon, DashboardIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { firstTranslation } from "studio/utils/i18n";

const resultsBlock = defineField({
  name: "resultsBlock",
  type: "object",
  title: "Results and Quote Block",
  icon: DashboardIcon,
  description:
    "This block can be used to add a quote and some results from the project.",
  fields: [
    {
      name: "resultsBlockTitle",
      title: "Block Title",
      description:
        "Please provide a title for the block, this will be the title shown at the top of the component, for example: 'Skryteblokk'/'Accomplishments'",
      type: "internationalizedArrayString",
    },
    {
      name: "quote",
      title: "Add a quote to this block (optional)",
      description: "Add one quote or one statement relevant to the project",
      type: "array",
      validation: (rule) =>
        rule.max(1).error("You can add a maximum of one quote or statement"),
      of: [
        {
          type: "object",
          title: "Quote",
          name: "quote",
          icon: CommentIcon,
          fields: [
            {
              name: "quoteText",
              title: "Add a quote or a statement to this block",
              type: "internationalizedArrayText",
            },
            {
              name: "quoteAuthor",
              title:
                "Author of the quote or statement, for example: 'Jane Doe, CEO of a company'",
              type: "internationalizedArrayString",
            },
          ],
          preview: {
            select: {
              title: "quoteText",
              subtitle: "quoteAuthor",
            },
            prepare({ title, subtitle }) {
              if (title !== undefined && !isInternationalizedString(title)) {
                throw new TypeError(
                  `Expected 'title' to be InternationalizedString, was ${typeof title}`,
                );
              }
              if (
                subtitle !== undefined &&
                !isInternationalizedString(subtitle)
              ) {
                throw new TypeError(
                  `Expected 'title' to be InternationalizedString, was ${typeof subtitle}`,
                );
              }
              return {
                title:
                  title !== undefined
                    ? (firstTranslation(title) ?? undefined)
                    : undefined,
                subtitle:
                  subtitle !== undefined
                    ? (firstTranslation(subtitle) ?? undefined)
                    : undefined,
              };
            },
          },
        },
      ],
    },
    {
      name: "resultsList",
      title: "List of results (optional)",
      description: "Add up to three results to be included in this list",
      type: "array",
      validation: (rule) =>
        rule.max(3).error("You can add a maximum of three results"),
      of: [
        {
          type: "object",
          title: "Result List Item",
          name: "resultlistitem",
          icon: BarChartIcon,
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
      title: "resultsBlockTitle",
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

export default resultsBlock;
