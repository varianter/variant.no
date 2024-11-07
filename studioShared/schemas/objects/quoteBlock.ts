import { CommentIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { firstTranslation } from "studio/utils/i18n";

const quoteBlock = defineField({
  name: "quoteBlock",
  type: "object",
  title: "Quote Block",
  icon: CommentIcon,
  fields: [
    {
      name: "quote",
      type: "internationalizedArrayText",
      title: "Quote",
    },
    {
      name: "author",
      type: "internationalizedArrayString",
      title: "Author of the quote",
    },
  ],
  preview: {
    select: {
      title: "quote",
    },
    prepare({ title }) {
      return { title: firstTranslation(title) ?? undefined };
    },
  },
});
export default quoteBlock;
