import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { firstTranslation } from "studio/utils/i18n";

export const customerCaseProjectInfo = defineField({
  name: "projectInfo",
  title: "Project Info",
  description: "General information about the project",
  type: "object",
  fields: [
    defineField({
      name: "customer",
      description: "The customer for the project",
      type: "string",
    }),
    defineField({
      name: "name",
      description: "The name of the project",
      type: "internationalizedArrayString",
    }),
    defineField({
      name: "duration",
      description: "The duration of the project (e.g. 'Q2 2023 – Q1 2024')",
      type: "internationalizedArrayString",
    }),
    defineField({
      // TODO: pick from global sector tags
      name: "sector",
      description: "The sector of the project",
      type: "internationalizedArrayString",
    }),
    defineField({
      // TODO: pick from global delivery tags
      name: "deliveries",
      description: "The deliveries of the project",
      type: "array",
      of: [
        {
          type: "object",
          title: "List Item",
          name: "listItem",
          fields: [
            {
              name: "delivery",
              title: "Delivery",
              type: "internationalizedArrayString",
            },
          ],
          preview: {
            select: {
              item: "delivery",
            },
            prepare({ delivery }) {
              if (!isInternationalizedString(delivery)) {
                throw new TypeError(
                  `Expected 'item' to be InternationalizedString, was ${typeof delivery}`,
                );
              }
              return {
                title: firstTranslation(delivery) ?? undefined,
              };
            },
          },
        },
      ],
    }),
    defineField({
      // TODO: We should be able to select the consultants from a list
      name: "consultants",
      description:
        "The consultants for the project. Use employee emails (e.g. 'oms@variant.no').",
      type: "array",
      of: [{ type: "email" }],
    }),
  ],
});
