"use client";
import CustomLink from "src/components/link/CustomLink";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { ArticleObject } from "studio/lib/interfaces/pages";

import styles from "./article.module.css";

interface ArticleProps {
  article: ArticleObject;
}

const Article = ({ article }: ArticleProps) => {
  const renderedImage = useConvertSanityImageToNextImage(
    article?.imageExtended,
  );

  return (
    <article className={styles.wrapper} id={article._key}>
      <div
        className={`${styles.article} ${article.imageExtended.imageAlignment == "right" ? styles.right : ""}`}
      >
        <div className={styles.image}>{renderedImage}</div>
        <div className={styles.content}>
          <div>
            <Text type="caption">{article.tag}</Text>
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
