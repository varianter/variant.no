import { defineType } from "sanity";
import { title } from "../fields/text";

export const officeId = "office";

const office = defineType({
  name: officeId,
  type: "document",
  title: "Office",
  description: "Content related to an individual office within the company",
  fields: [title],
});

export default office;
