import Text from "src/components/text/Text";
import {
  IArticleSection,
  IParagraphArticleSection,
  IQuoteArticleSection,
  ITitleArticleSection,
} from "studio/lib/interfaces/pages";

import styles from "./articleSection.module.css";

interface articleSectionProps {
  section: IArticleSection;
}

export default function ArticleSection({ section }: articleSectionProps) {
  switch (section.articleSectionType) {
    case "title":
      return section.articleTitle
        ? renderArticleTitle(section.articleTitle)
        : null;
    case "paragraph":
      return section.articleParagraph
        ? renderArticleParagraph(section.articleParagraph)
        : null;
    case "quote":
      return section.articleQuote
        ? renderArticleQuote(section.articleQuote)
        : null;
    default:
      return null;
  }
}

const renderArticleTitle = ({ eyebrow, title }: ITitleArticleSection) => (
  <div className={styles.container}>
    <Text type="labelRegular"> {eyebrow}</Text>
    <Text type="h1">{title}</Text>
  </div>
);

const renderArticleParagraph = ({
  title,
  textContent,
}: IParagraphArticleSection) => (
  <div className={styles.container}>
    <div className={styles.paragraphWrapper}>
      <Text type="h4"> {title} </Text>
      <Text type="bodySmall">{textContent}</Text>
    </div>
  </div>
);

const renderArticleQuote = ({ author, quote }: IQuoteArticleSection) => (
  <div className={styles.container}>
    <Text className={styles.authorText} type="labelRegular">
      {author}
    </Text>
    <Text type="bodyXl">{quote}</Text>
  </div>
);
