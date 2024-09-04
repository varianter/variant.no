import { defineField, defineType } from "sanity";

export const companyLocationsID = "companyLocations";
export const companyLocationID = "companyLocation";

const companyLocations = defineType({
  name: companyLocationsID,
  type: "document",
  title: "Location",
  description: "Content related to an individual location within the company",
  fields: [
    defineField({
      name: companyLocationID,
      type: "string",
      title: "Location",
    }),
  ],
});

export default companyLocations;
