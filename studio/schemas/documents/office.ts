import { defineType } from "sanity";
import { title } from "../fields/text";

export const officeId = "office";

const office = defineType({
  name: officeId,
  type: "document",
  title: "Office",
  fields: [title],
});

export default office;
