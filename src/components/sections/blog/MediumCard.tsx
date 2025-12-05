import React from "react";

import Text from "src/components/text/Text";
import { formatShortDate } from "src/components/utils/formatDate";
import { MediumCardProps } from "studio/lib/interfaces/mediumCard";

import styles from "./blog.module.css";

const MediumCard: React.FC<{ article: MediumCardProps }> = ({ article }) => {
  const variant = article.variant || "medium";

  const formattedDate = formatShortDate(
    article.publishedDate?.toString() || "",
  );

  return (
    <a
      href={article.url || ""}
      target="_blank"
      className={`${styles.cardWrapper} ${styles[variant]}`}
    >
      {article.thumbnail && (
        <img
          src={article.thumbnail.src}
          alt={article.thumbnail.alt}
          className={`${styles.cardImage} ${styles[variant]}`}
        />
      )}
      <div className={`${styles.cardContent} ${styles[variant]}`}>
        {variant == "small" && article.title ? (
          <Text type="titleS">{article.title}</Text>
        ) : (
          <Text type="titleM">{article.title}</Text>
        )}
        <div className={`${styles.cardInner} ${styles[variant]}`}>
          {variant == "large" && article.description ? (
            <div className={styles.cardDescription}>
              <Text type="description">{article.description}</Text>
            </div>
          ) : null}
          <div>
            <Text type="label" color="tertiary">
              {formattedDate}
            </Text>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MediumCard;
