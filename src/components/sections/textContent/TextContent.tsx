import { PortableTextBlock } from "sanity";

import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import {
  ITextContent,
  ITextParagraph,
  ITextQuote,
  ITextTitle,
} from "studio/lib/interfaces/pages";

import styles from "./textContent.module.css";

interface textContentProps {
  section: ITextContent;
}

export default function TextContent({ section }: textContentProps) {
  switch (section.textType) {
    case "title":
      return section.textTitle ? renderTextTitle(section.textTitle) : null;
    case "paragraph":
      return section.textParagraph
        ? renderTextParagraph(section.textParagraph)
        : null;
    case "richText":
      return section.richText ? renderTextRichText(section.richText) : "";
    case "quote":
      return section.textQuote ? renderTextQuote(section.textQuote) : null;
    default:
      return null;
  }
}

const renderTextTitle = ({ eyebrow, title }: ITextTitle) => (
  <div className={styles.container}>
    <Text type="bodyNormal"> {eyebrow} </Text>
    <Text type="titleXL">{title}</Text>
  </div>
);

const renderTextParagraph = ({
  paragraphHeader,
  textContent,
}: ITextParagraph) => (
  <div className={styles.container}>
    <div className={styles.paragraphWrapper}>
      <Text type="titleS" as="h2">
        {paragraphHeader}
      </Text>
      <Text type="bodyNormal">{textContent}</Text>
    </div>
  </div>
);

const renderTextRichText = (richText: PortableTextBlock[]) => (
  <div className={styles.container}>
    <div className={styles.paragraphWrapper}>
      <RichText value={richText} />
    </div>
  </div>
);

const renderTextQuote = ({ author, quote }: ITextQuote) => (
  <div className={styles.container}>
    <Text color="tertiary" type="bodyNormal">
      {author}
    </Text>
    <Text type="bodyXl">{quote}</Text>
  </div>
);
