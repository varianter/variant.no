export const fieldsName = "Fields";
import { link } from "studio/schemas/objects/link";

export const fields = {
  name: fieldsName,
  title: "Fields",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "internationalizedArrayString",
      description:
        "The main heading or name of the field, used for identification.",
    },
    {
      name: "description",
      title: "Description",
      type: "internationalizedArrayString",
      description: "Short subtitle or summary of the field's content.",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      description: "The category of the field, specifying the content format.",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Audio", value: "audio" },
          { title: "Video", value: "video" },
          { title: "Other", value: "other" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description:
        "An optional image representing the field, with hotspot support for cropping.",
      options: {
        hotspot: true,
      },
    },
    {
      ...link,
      name: "link",
      title: "Link",
      description:
        "A direct URL to the content or resource associated with this field.",
    },
    {
      name: "size",
      title: "Size",
      type: "string",
      description:
        "Select the layout size: Small (1 column), Medium (2 columns), Large (3 columns).",
      options: {
        layout: "radio",
        list: [
          { title: "Small (1 column)", value: "small" },
          { title: "Medium (2 columns)", value: "medium" },
          { title: "Large (3 columns)", value: "large" },
        ],
      },
    },
    {
      name: "readingListeningTime",
      title: "Reading/Listening Time",
      type: "internationalizedArrayString",
      description:
        'An optional field for estimated duration (e.g., "5 min") to help users gauge the time required.',
    },
  ],
};
