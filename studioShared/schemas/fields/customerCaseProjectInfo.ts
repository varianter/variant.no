import { defineField } from "sanity";

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
      name: "delivery",
      description: "The delivery of the project",
      type: "internationalizedArrayString",
    }),
    defineField({
      // TODO: We should be able to select the consultants from a list
      name: "consultants",
      description: "The consultants for the project",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
