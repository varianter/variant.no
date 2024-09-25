import { PortableTextBlock } from "sanity";

import placeholder from "src/stories/assets/image-placeholder.png";
import { LinkType } from "studio/lib/interfaces/navigation";
import { ArticleObject } from "studio/lib/interfaces/pages";
import { ImageAlignment } from "studio/schemas/fields/media";

const commonRichText: PortableTextBlock[] = [
  {
    _type: "block",
    _key: "272e06bbca76",
    children: [
      {
        _key: "dcf62ae1c1f10",
        _type: "span",
        marks: [],
        text: "We connect with a diverse group of organizations and individuals who share our commitment to making a ",
      },
      {
        _key: "ef465a0bfdf8",
        _type: "span",
        marks: ["strong"],
        text: "positive impact",
      },
      {
        _key: "c07a9714cacb",
        _type: "span",
        marks: [],
        text: " on the world.",
      },
    ],
    style: "normal",
  },
];

const commonLink = {
  _key: "key",
  _type: "value",
  linkTitle: "Read more about carbon accounting",
  linkType: LinkType.Internal,
  internalLink: {
    _ref: "/",
  },
};

const createArticle = (
  imageAlignment: ImageAlignment,
  includeLink: boolean,
  tag?: string,
): ArticleObject => ({
  _key: "286f87152fce",
  _type: "article",
  basicTitle: "AI Carbon Accounting",
  richText: commonRichText,
  imageExtended: {
    _key: "2052ec0aea39",
    _type: "image",
    imageAlignment,
    alt: "24SevenOffice logo",
    src: placeholder,
  },
  tag: tag,
  ...(includeLink ? { link: commonLink } : {}),
});

export const extendedArticleLargeLeftMock = createArticle(
  ImageAlignment.Left,
  true,
  "Measure",
);
export const extendedArticleLargeRightMock = createArticle(
  ImageAlignment.Right,
  true,
  "Measure",
);

export const articleLeftMock = createArticle(ImageAlignment.Left, false);
export const articleRightMock = createArticle(ImageAlignment.Right, false);
