import { UlistIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { allTranslation } from "studio/utils/i18n";

export const customerCaseProjectInfo = defineField({
  name: "projectInfo",
  title: "Project Info",
  description:
    "This section contains general information about the project, and will be used in the top section of the case.",
  type: "object",
  fields: [
    defineField({
      name: "customer",
      description: "The name of the customer for this project.",
      type: "string",
    }),
    defineField({
      name: "customerSectors",
      description:
        "The sector or industry the customer belongs to for this project. You can add multiple sectors, such as such as public transport and public sector.",
      type: "array",
      of: [
        {
          type: "object",
          title: "Customer Sector",
          name: "customerSector",
          icon: UlistIcon,
          fields: [
            {
              name: "customerSectorItem",
              title: "Customer Sector",
              type: "internationalizedArrayString",
            },
          ],
          preview: {
            select: {
              customerSector: "customerSectorItem",
            },
            prepare({ customerSector }) {
              if (!isInternationalizedString(customerSector)) {
                throw new TypeError(
                  `Expected 'item' to be InternationalizedString, was ${typeof customerSector}`,
                );
              }
              return {
                title: allTranslation(customerSector) ?? undefined,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "consultants",
      description:
        "The consultants enrolled in the project. Use employee emails (e.g. 'oms@variant.no').",
      type: "array",
      of: [{ type: "email" }],
    }),
    defineField({
      name: "collaborators",
      description: "Companies collaborating in this project.",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "url",
      description:
        "Optional url to the customer's website or project page. Please enter full please enter the full URL, including 'https://'. For example, 'https://www.example.com'.",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    }),
    defineField({
      name: "deliveries",
      description:
        "Please list the project deliveries for this project. It's optional to add deliveries in each of the areas.",
      type: "object",
      options: { collapsible: true },
      fields: [
        {
          name: "design",
          title: "Design Deliveries (Optional)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "designDelivery",
                  title: "Design Delivery",
                  type: "internationalizedArrayString",
                },
              ],
              preview: {
                select: {
                  design: "designDelivery",
                },
                prepare({ design }) {
                  if (!isInternationalizedString(design)) {
                    throw new TypeError(
                      `Expected 'designDelivery' to be InternationalizedString, was ${typeof design}`,
                    );
                  }
                  return {
                    title: allTranslation(design) ?? "No translation available",
                  };
                },
              },
            },
          ],
        },
        {
          name: "development",
          title: "Development Deliveries (Optional)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "developmentDelivery",
                  title: "Development Delivery",
                  type: "internationalizedArrayString",
                },
              ],
              preview: {
                select: {
                  development: "developmentDelivery",
                },
                prepare({ development }) {
                  if (!isInternationalizedString(development)) {
                    throw new TypeError(
                      `Expected 'developmentDelivery' to be InternationalizedString, was ${typeof development}`,
                    );
                  }
                  return {
                    title:
                      allTranslation(development) ?? "No translation available",
                  };
                },
              },
            },
          ],
        },
        {
          name: "projectManagement",
          title: "Project Management Deliveries (Optional)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "projectManagementDelivery",
                  title: "Project Management Delivery",
                  type: "internationalizedArrayString",
                },
              ],
              preview: {
                select: {
                  projectManagement: "projectManagementDelivery",
                },
                prepare({ projectManagement }) {
                  if (!isInternationalizedString(projectManagement)) {
                    throw new TypeError(
                      `Expected 'projectManagementDelivery' to be InternationalizedString, was ${typeof projectManagement}`,
                    );
                  }
                  return {
                    title:
                      allTranslation(projectManagement) ??
                      "No translation available",
                  };
                },
              },
            },
          ],
        },
      ],
    }),
  ],
});
