"use client";
import { SanityImage } from "src/components/image/SanityImage";
import CustomLink from "src/components/link/CustomLink";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { ArticleSection } from "studio/lib/interfaces/pages";

import styles from "./article.module.css";

interface ArticleProps {
  article: ArticleSection;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article className={styles.wrapper} id={article._key}>
      <div
        className={`${styles.article} ${article.imageExtended.imageAlignment == "right" ? styles.right : ""}`}
      >
        {article?.imageExtended && (
          <div className={styles.image}>
            <SanityImage image={article.imageExtended} />
          </div>
        )}
        <div className={styles.content}>
          <div>
            <Text type="labelRegular">{article.tag}</Text>
            <Text type="h2">{article.basicTitle}</Text>
          </div>
          {article.richText && <RichText value={article.richText} />}
          {article.link && <CustomLink link={article.link} />}
        </div>
      </div>
    </article>
  );
};

export default Article;
