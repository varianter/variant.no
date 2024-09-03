import { defineType } from "sanity";
import { title } from "../fields/text";

export const locationId = "location";

const location = defineType({
  name: locationId,
  type: "document",
  title: "Location",
  description: "Content related to an individual location within the company",
  fields: [title],
});

export default location;
