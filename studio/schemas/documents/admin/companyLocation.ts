import { defineField, defineType } from "sanity";

import { StringInputWithCharacterCount } from "studio/components/stringInputWithCharacterCount/StringInputWithCharacterCount";

export const companyLocationID = "companyLocation";
export const companyLocationNameID = "companyLocationName";
export const companyLocationContactPersonID = "contactPerson";

const companyLocation = defineType({
  name: companyLocationID,
  type: "document",
  title: "Location",
  description: "Content related to an individual location within the company",
  fields: [
    defineField({
      name: companyLocationNameID,
      type: "string",
      title: "Location",
      validation: (rule) => rule.max(50),
      components: {
        input: (props) =>
          StringInputWithCharacterCount({ ...props, maxCount: 50 }),
      },
    }),
    defineField({
      name: companyLocationContactPersonID,
      type: "string",
      title: "Contact person for Sales",
      description: "Add the email of the contact person for Sales",
    }),
  ],
});

export default companyLocation;
