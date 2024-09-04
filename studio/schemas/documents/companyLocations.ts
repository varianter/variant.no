import { defineField, defineType } from "sanity";

export const companyLocationID = "companyLocation";
export const companyLocationNameID = "companyLocationName";

const companyLocations = defineType({
  name: companyLocationID,
  type: "document",
  title: "Location",
  description: "Content related to an individual location within the company",
  fields: [
    defineField({
      name: companyLocationNameID,
      type: "string",
      title: "Location",
    }),
  ],
});

export default companyLocations;
