import { defineField } from "sanity";

export const customerCasesEntry = defineField({
  name: "customerCasesEntry",
  title: "Customer Cases Entry",
  type: "object",
  fields: [
    {
      name: "basicTitle",
      title: "Basic Title",
      type: "string",
      description:
        "This will be the title of the customer cases entry section. Make it engaging to capture the attention of your audience.",
    },
  ],
});
