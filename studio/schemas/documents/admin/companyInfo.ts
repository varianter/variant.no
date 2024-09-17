import { defineType, defineField } from "sanity";
import { StringInputWithCharacterCount } from "../../../components/stringInputWithCharacterCount/StringInputWithCharacterCount";

export const companyInfoID = "companyInfo";

const companyInfo = defineType({
  name: companyInfoID,
  type: "document",
  title: "Company Information",
  fields: [
    defineField({
      name: "companyName",
      type: "string",
      title: "Company Name",
      description:
        "The name of the company or website. This will be visible on the website.",
      validation: (rule) => rule.required().max(60),
      components: {
        input: (props) =>
          StringInputWithCharacterCount({ ...props, maxCount: 60 }),
      },
    }),
    defineField({
      name: "organizationNumber",
      type: "string",
      title: "Organization Number",
      description: "Enter the organization number",
    }),
    defineField({
      name: "companyPhone",
      type: "string",
      title: "Contact Phone Number",
      description:
        "The contact phone number for site inquiries or administration.",
    }),
    defineField({
      name: "companyEmail",
      type: "string",
      title: "Contact Email",
      description:
        "The contact email address for site inquiries or administration.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Company Information",
      };
    },
  },
});

export default companyInfo;
