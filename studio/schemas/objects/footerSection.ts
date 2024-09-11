import { defineType, StringInputProps } from "sanity";
import { linkID } from "./link";
import { soMeLinksID } from "../documents/socialMediaProfiles";
import { richText, richTextID } from "../fields/text";
import { StringInputWithCharacterCount } from "../../components/StringInputWithCharacterCount";

export const footerSectionID = {
  main: "footerSection",
  title: "sectionTitle",
  type: "sectionType",
  soMeLinks: "socialMediaLinks",
  linksAndContent: "linksAndContent",
};

enum SectionType {
  SocialMedia = "socialMedia",
  Content = "content",
}

// Interface for parent context to type check context in initialValue
interface Parent {
  sectionType?: SectionType;
}

export const footerSection = defineType({
  name: footerSectionID.main,
  title: "Footer Section",
  type: "object",
  fields: [
    {
      name: footerSectionID.title,
      title: "Section Title",
      type: "string",
      description:
        "Enter the title for this footer section. This will help identify the section within the footer.",
      validation: (Rule) => [
        Rule.required().error("Section title is required"),
        Rule.max(60),
      ],
      components: {
        input: (props: StringInputProps) =>
          StringInputWithCharacterCount({ ...props, maxCount: 60 }),
      },
    },
    {
      name: footerSectionID.type,
      title: "Content Type",
      description:
        "Select the type of content to display in this footer section.",
      type: "string",
      options: {
        list: [
          { title: "Links and Other", value: SectionType.Content },
          { title: "Social Media Links", value: SectionType.SocialMedia },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("Content type is required"),
      initialValue: SectionType.Content,
    },
    {
      name: footerSectionID.linksAndContent,
      title: "Links and Content",
      type: "array",
      of: [
        { type: linkID },
        {
          name: "richTextObject",
          title: "RichText",
          type: "object",
          fields: [richText],
        },
      ],
      description:
        "Add links and rich text content to provide visitors with additional navigation options.",
      hidden: ({ parent }: { parent: Parent }) =>
        parent?.sectionType !== SectionType.Content,
    },
    {
      name: footerSectionID.soMeLinks,
      title: "Social Media Links",
      type: "reference",
      to: [{ type: soMeLinksID }],
      description:
        "This section automatically uses your social media links. Any updates to your social media links will appear here.",
      hidden: ({ parent }) => parent?.sectionType !== SectionType.SocialMedia,
      initialValue: {
        _type: "reference",
        _ref: soMeLinksID,
      },
    },
  ],
  preview: {
    select: {
      title: footerSectionID.title,
      type: footerSectionID.type,
    },
    prepare(selection) {
      const { title, type } = selection;
      const typeTitle =
        type === SectionType.Content ? "Links and Other" : "Social Media Links";
      return {
        title: title,
        subtitle: typeTitle,
      };
    },
  },
});
