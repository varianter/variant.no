import placeholder from "src/stories/assets/image-placeholder.png";
import { PortableTextBlock } from "src/components/richText/RichText";

// Common rich text for lead and main content
const leadRichText: PortableTextBlock[] = [
  {
    _type: "block",
    _key: "9467623b30ef",
    style: "normal",
    children: [
      {
        _key: "a57736c303d20",
        _type: "span",
        marks: [],
        text: "In a world grappling with the consequences of climate change and environmental degradation, the need for sustainable practices has become more urgent than ever before. As individuals, communities, and businesses, we have a responsibility to make conscious choices that support the health of our planet.",
      },
    ],
  },
];

const richText: PortableTextBlock[] = [
  {
    _type: "block",
    _key: "338dff85d078",
    style: "h2",
    children: [
      {
        _key: "somekey1",
        _type: "span",
        marks: [],
        text: "First Section Heading",
      },
    ],
  },
  {
    _type: "block",
    _key: "3b1adf8a8cbc",
    style: "normal",
    children: [
      {
        _key: "somekey2",
        _type: "span",
        marks: [],
        text: "This is the first paragraph under the first section heading.",
      },
    ],
  },
  {
    _type: "block",
    _key: "bf6c5b69330f",
    style: "h2",
    children: [
      {
        _key: "somekey3",
        _type: "span",
        marks: [],
        text: "Second Section Heading",
      },
    ],
  },
  {
    _type: "block",
    _key: "7906934d79bc",
    style: "normal",
    children: [
      {
        _key: "somekey4",
        _type: "span",
        marks: [],
        text: "This is the first paragraph under the second section heading.",
      },
    ],
  },
];

const samplePost = {
  basicTitle: "Carbon Accounting Explained",
  category: "Release notes",
  date: "2024-07-18T10:49:08.995Z",
  lead: {
    image: {
      _key: "2052ec0aea39",
      _type: "image",
      alt: "Placeholder",
      src: placeholder,
    },
    richText: leadRichText,
  },
  richText: richText,
  slug: { current: "carbon-accounting-explained", _type: "slug" },
  _createdAt: "2024-07-18T11:02:59Z",
  _id: "f33df191-7ad3-4139-a1b9-f77086664a59",
  _rev: "K1hkuxhEBMZclTfKf3gWoc",
  _type: "blogPosts",
  _updatedAt: "2024-07-22T06:19:11Z",
};

export const postMock = {
  alignImageToRight: true,
  slug: "news",
  post: samplePost,
};
