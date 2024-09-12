import { defineField, StringInputProps } from "sanity";
import AnchorSelect from "../../components/AnchorSelect";
import LinkTypeSelector from "../../components/LinkTypeSelector";
import NewTabSelector from "../../components/NewTabSelector";
import { StringInputWithCharacterCount } from "../../components/StringInputWithCharacterCount";

export const linkID = "link";

enum LinkType {
  Internal = "internal",
  External = "external",
  Email = "email",
  Phone = "phone",
}

// Interface for parent context to type check context in validation and hidden rules
interface Parent {
  linkTitle: string;
  linkType?: LinkType;
  internalLink?: { reference: { _ref: string } };
}

// Lazy reference to avoid circular dependency
const lazyPageBuilderID = () => "pageBuilder";
const lazyBlogID = () => "blog";
const lazyCompensationsID = () => "compensations";

export const link = defineField({
  name: linkID,
  title: "Link",
  type: "object",
  fields: [
    {
      name: "linkTitle",
      title: "Provide a link title",
      type: "string",
      description: "Enter the link text that will be displayed on the website.",
      validation: (rule) => rule.max(60),
      components: {
        input: (props: StringInputProps) =>
          StringInputWithCharacterCount({ ...props, maxCount: 60 }),
      },
    },
    {
      name: "linkType",
      title: "What type of link is this?",
      description:
        "Select the type of link you want to create. Based on what you select, different fields will appear for you to fill in",
      type: "string",
      components: {
        input: LinkTypeSelector,
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as Parent;
          if (parent?.linkTitle && !value) {
            return "Link type is required";
          }
          return true;
        }),
    },
    {
      name: "internalLink",
      title: "Internal Link",
      description: "Select the page you want to link to",
      type: "reference",
      to: [
        { type: lazyPageBuilderID() },
        { type: lazyBlogID() },
        { type: lazyCompensationsID() },
      ],
      validation: (rule) =>
        rule.custom((value: any, context: any) => {
          const parent = context.parent as Parent;
          if (
            parent?.linkTitle &&
            parent?.linkType === LinkType.Internal &&
            !value
          ) {
            return "Link to page is required";
          }
          return true;
        }),
      options: {
        disableNew: true,
      },
      hidden: ({ parent }: { parent: Parent }) =>
        parent?.linkType !== LinkType.Internal,
    },
    {
      name: "url",
      title: "Enter an external link",
      type: "url",
      description:
        "Enter the full URL for the external link, including 'https://'. For example, 'https://www.example.com'.",
      validation: (rule) =>
        rule
          .uri({
            scheme: ["http", "https"],
            allowRelative: false,
          })
          .custom((value, context) => {
            const parent = context.parent as Parent;
            if (
              parent?.linkTitle &&
              parent?.linkType === LinkType.External &&
              !value
            ) {
              return "URL is required for external links";
            }
            return true;
          }),
      hidden: ({ parent }) => parent?.linkType !== LinkType.External,
    },
    {
      name: "email",
      title: "Enter the email address",
      type: "string",
      validation: (rule) =>
        rule.custom((value: string, context) => {
          const parent = context.parent as Parent;
          if (
            parent?.linkTitle &&
            parent?.linkType === LinkType.Email &&
            !value
          ) {
            return "Must have a valid email address";
          }
          if (value && !/^\S+@\S+\.\S+$/.test(value)) {
            return "Must be a valid email address";
          }
          return true;
        }),
      hidden: ({ parent }) => parent?.linkType !== LinkType.Email,
    },
    {
      name: "phone",
      title: "Enter the phone number",
      type: "string",
      validation: (rule) =>
        rule.custom((value: string, context) => {
          const parent = context.parent as Parent;
          if (
            parent?.linkTitle &&
            parent?.linkType === LinkType.Phone &&
            !value
          ) {
            return "Must have a valid phone number";
          }
          if (value && !/^\+?[1-9]\d{1,14}$/.test(value)) {
            return "Must be a valid phone number";
          }
          return true;
        }),
      hidden: ({ parent }) => parent?.linkType !== LinkType.Phone,
    },
    {
      name: "anchor",
      title: "Do you want to link to a specific section on the page?",
      type: "string",
      components: {
        input: AnchorSelect,
      },
      description:
        "Specify a section on the selected internal page to link directly to that section.",
      hidden: ({ parent }) =>
        parent?.linkType !== LinkType.Internal || !parent?.internalLink,
    },
    {
      name: "newTab",
      title: "Should this link open in a new tab?",
      description:
        "Enable this option to open the link in a new browser tab. This can be useful for keeping the current page open.",
      type: "boolean",
      components: {
        input: NewTabSelector,
      },
      initialValue: false,
      hidden: ({ parent }) =>
        [LinkType.Email, LinkType.Phone].includes(parent?.linkType),
    },
  ],
  preview: {
    select: {
      title: "linkTitle",
      type: "linkType",
    },
    prepare(selection) {
      const { title, type } = selection;
      return {
        title: title,
        subtitle: type ? type.charAt(0).toUpperCase() + type.slice(1) : "",
      };
    },
  },
});
