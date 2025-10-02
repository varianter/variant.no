import { BoltIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { allTranslations } from "studio/utils/i18n";

const punchLineId = "punchLineBox";

export const punchLineBox = defineField({
  name: punchLineId,
  title: "Punch Line Box",
  type: "object",
  icon: BoltIcon,
  fields: [
    {
      name: "sentences",
      title: "Sentences",
      description: "Collection of punch line sentences to show.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "mainPunchLine",
              title: "Main Punch Line",
              type: "internationalizedArrayString",
              validation: (rule) =>
                rule
                  .required()
                  .custom<
                    { value: string; _type: string; _key: string }[]
                  >(max200ValidationRule),
            },
            {
              name: "actionLine",
              title: "Take Action Line",
              type: "internationalizedArrayString",
              validation: (rule) =>
                rule
                  .required()
                  .custom<
                    { value: string; _type: string; _key: string }[]
                  >(max200ValidationRule),
            },
            defineField({
              name: "email",
              title: "Enter the email address for contact point",
              type: "email",
              initialValue: "mb@variant.no",
            }),
          ],
          validation: (rule) =>
            rule.required().error("A list of punch lines is required."),
          preview: {
            select: {
              mainPunchLine: "mainPunchLine",
            },
            prepare(selection) {
              const { mainPunchLine } = selection;
              return {
                title: allTranslations(mainPunchLine) ?? undefined,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      sentences: "sentences",
    },
    prepare(selection) {
      const { sentences } = selection;
      return {
        title: `${sentences.length} punch lines`,
      };
    },
  },
});

function max200ValidationRule(
  value: { value: string; _type: string; _key: string }[],
) {
  if (!value) return true;

  const invalidItems = value.filter(
    (item) => typeof item.value === "string" && item.value.length > 200,
  );

  if (invalidItems.length > 0) {
    return invalidItems.map((item) => ({
      message: "Title cannot be more than 200 characters long.",
      path: [{ _key: item._key }, "value"],
    }));
  }

  return true;
}
