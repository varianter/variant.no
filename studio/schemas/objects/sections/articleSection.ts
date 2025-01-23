import { EditIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { allTranslations } from "studio/utils/i18n";

const articleSectionID = "articleSection";

interface Parent {
  textTitle: string;
  articleSectionType?: string;
}

export const articleSection = defineField({
  name: articleSectionID,
  title: "Article Section",
  type: "object",
  icon: EditIcon,
  fields: [
    {
      name: "articleSectionType",
      title: "Article Section Type",
      description:
        "Please select the type of article section you want to add. The fields below will vary depending on the selected type.",
      type: "string",
      options: {
        list: [
          { title: "Title", value: "title" },
          { title: "Paragraph", value: "paragraph" },
          { title: "Quote", value: "quote" },
        ],
        layout: "radio",
      },
      initialValue: "title",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as Parent;
          if (parent?.textTitle && !value) {
            return "Article section type is required";
          }
          return true;
        }),
    },
    {
      name: "articleTitle",
      title: "Title Article Section",
      type: "object",
      description:
        "This section will display a title and, if provided, an eyebrow text above.",
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow",
          type: "internationalizedArrayString",
        },
        {
          name: "title",
          title: "Title",
          type: "internationalizedArrayString",
        },
      ],
      hidden: ({ parent }: { parent: Parent }) =>
        parent?.articleSectionType !== "title",
    },
    {
      name: "articleParagraph",
      title: "Paragraph Article Section",
      description: "This section will display as a text block.",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "internationalizedArrayString",
        },
        {
          name: "textContent",
          title: "Text Content",
          type: "internationalizedArrayText",
        },
      ],
      hidden: ({ parent }: { parent: Parent }) =>
        parent?.articleSectionType !== "paragraph",
    },
    {
      name: "articleQuote",
      title: "Quote Article Section",
      description: "This section will display as a quote with author above.",
      type: "object",
      fields: [
        {
          name: "author",
          title: "Author",
          type: "internationalizedArrayString",
        },
        {
          name: "quote",
          title: "Quote",
          type: "internationalizedArrayString",
        },
      ],
      hidden: ({ parent }: { parent: Parent }) =>
        parent?.articleSectionType !== "quote",
    },
  ],
  preview: {
    select: {
      title: "articleTitle.titleText",
      paragraph: "articleParagraph.title",
      quote: "articleQuote.quote",
      articleSectionType: "articleSectionType",
    },
    prepare(selection) {
      const { title, paragraph, quote, articleSectionType } = selection;
      if (articleSectionType === "title") {
        return {
          title: allTranslations(title) || undefined,
          subtitle: "Article section type: " + articleSectionType,
        };
      }
      if (articleSectionType === "paragraph") {
        return {
          title: allTranslations(paragraph) || undefined,
          subtitle: "Article section type: " + articleSectionType,
        };
      }
      if (articleSectionType === "quote") {
        return {
          title: allTranslations(quote) || undefined,
          subtitle: "Article section type: " + articleSectionType,
        };
      }
      return {
        title: "Article section type: " + articleSectionType,
      };
    },
  },
});
