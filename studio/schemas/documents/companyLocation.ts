import { defineField, defineType } from "sanity";
import { StringInputWithCharacterCount } from "../../components/StringInputWithCharacterCount";

export const companyLocationID = "companyLocation";
export const companyLocationNameID = "companyLocationName";

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
  ],
});

export default companyLocation;
