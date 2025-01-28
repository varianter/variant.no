import { SanityImage } from "src/components/image/SanityImage";
import LinkButton from "src/components/linkButton/LinkButton";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { IArticle } from "studio/lib/interfaces/pages";

import styles from "./article.module.css";

interface ArticleProps {
  article: IArticle;
}

export default function Article({ article }: ArticleProps) {
  return (
    <article className={styles.wrapper} id={article._key}>
      <div className={styles.article}>
        {article.imageExtended && (
          <div className={styles.image}>
            <SanityImage image={article.imageExtended} />
          </div>
        )}
        <div className={styles.content}>
          <div>
            <Text type="labelRegular">{article.eyebrow}</Text>
            <Text type="h1">{article.basicTitle}</Text>
          </div>
          {article.richText && <RichText value={article.richText} />}
          {article.link && <LinkButton link={article.link} />}
        </div>
      </div>
    </article>
  );
}
