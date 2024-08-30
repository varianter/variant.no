import { defineField } from "sanity";
import { officeId } from "../documents/office";

const office = defineField({
  name: "office",
  title: "Office",
  description: "Reference to a company office",
  type: "reference",
  to: [{ type: officeId }],
});

export default office;
