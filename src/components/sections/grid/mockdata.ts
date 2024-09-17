import { PortableTextBlock } from "src/components/richText/RichText";
import placeholder from "src/stories/assets/image-placeholder.png";

const commonRichText: PortableTextBlock[] = [
  {
    _type: "block",
    _key: "272e06bbca76",
    children: [
      {
        _key: "dcf62ae1c1f10",
        _type: "span",
        marks: [],
        text: "+47 25 91 88 81/contact@energi.ai",
      },
    ],
    style: "normal",
  },
];

const item = {
  _key: "f4272df74664a7fddd5fabbce20c7b49",
  _type: "item",
  basicTitle: "Name Namesen — CEO",
  image: {
    _type: "image",
    src: placeholder,
  },
  richText: commonRichText,
};

export const mockGrid = {
  _type: "grid",
  _key: "8f79f85866cb",
  basicTitle: "The team",
  items: [item, item, item, item, item, item, item],
};
