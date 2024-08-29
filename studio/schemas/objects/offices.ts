import { defineField } from "sanity";
import office from "./office";

const offices = defineField({
  name: "offices",
  title: "Offices",
  type: "array",
  of: [office],
  validation: (Rule) => Rule.required().min(1).unique(),
});

export default offices;
