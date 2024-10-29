import { defineField } from "sanity";

import { firstTranslation } from "studio/utils/i18n";

const resultBlock = defineField({
  name: "resultBlock",
  type: "object",
  title: "Result Block",
  fields: [
    {
      name: "result",
      type: "string",
      title: "Result",
      description: "Add result, eg. '+ 72%'",
    },
    {
      name: "description",
      type: "internationalizedArrayText",
      title: "Description of the result, eg. 'Satisfied users'",
    },
  ],
  preview: {
    select: {
      title: "description",
    },
    prepare({ title }) {
      return { title: firstTranslation(title) ?? undefined };
    },
  },
});

export default resultBlock;
