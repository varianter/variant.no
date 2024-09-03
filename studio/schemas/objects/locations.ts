import { defineField } from "sanity";
import location from "./location";

const locations = defineField({
  name: "locations",
  title: "Locations",
  description: "List of company locations",
  type: "array",
  of: [location],
  validation: (Rule) => Rule.required().min(1).unique(),
});

export default locations;
