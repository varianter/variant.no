import { defineField } from "sanity";
import { officeId } from "../documents/office";

const office = defineField({
  name: "office",
  title: "Office",
  type: "reference",
  to: [{ type: officeId }],
});

export default office;
