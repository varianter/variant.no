import { PortableTextBlock } from "src/components/richText/RichText";
import { LinkType } from "studio/lib/interfaces/navigation";

const RichTextMock: PortableTextBlock[] = [
  {
    _key: "3dcf19fd8e82",
    _type: "block",
    children: [
      {
        _key: "397cd940b56a0",
        _type: "span",
        marks: [],
        text: "We are ",
      },
      {
        _key: "04443d119406",
        _type: "span",
        marks: ["strong"],
        text: "tech entrepreneurs",
      },
      {
        _key: "3fab77ef0966",
        _type: "span",
        marks: [],
        text: " and data ",
      },
      {
        _key: "e61a572a2f64",
        _type: "span",
        marks: ["strong"],
        text: "geeks",
      },
      {
        _key: "24d0c7534c59",
        _type: "span",
        marks: [],
        text: " from the Nordics who love building impactful companies with exponential technology.",
      },
    ],
    style: "normal",
  },
];

export const calloutMockData = {
  _key: "3d99dad2f909",
  _type: "callout",
  link: {
    _key: "key",
    _type: "value",
    linkTitle: "About Energi.ai",
    linkType: LinkType.Internal,
    url: "about",
  },
  richText: RichTextMock,
};
