import React from "react";

import DotSeparator from "src/components/dotSeparator/dotSeparator";
import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { MediumCardProps } from "studio/lib/interfaces/mediumCard";
import { ILink, LinkType } from "studio/lib/interfaces/navigation";

import styles from "./blog.module.css";

const MediumCard: React.FC<{ article: MediumCardProps }> = ({ article }) => {
  const formattedDate = article.publishedDate
    ? new Date(article.publishedDate).toLocaleDateString("no-NO")
    : "";

  const link: ILink | undefined = article.url
    ? {
        _key: article.url,
        _type: "link",
        linkTitle: article.buttonTitle || "Les mer",
        linkType: LinkType.External,
        url: article.url,
        newTab: true,
      }
    : undefined;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <Text type="titleM">{article.title}</Text>
        <div className={styles.cardSubtitle}>
          <Text type="labelL">{formattedDate}</Text>
          <DotSeparator />
          <Text type="labelL">{article.creator}</Text>
        </div>
        <Text type="normal">{article.description}</Text>
        <div className={styles.articleButton}>
          {link && <CustomLink link={link} />}
        </div>
      </div>
      {article.thumbnail && (
        <img
          src={article.thumbnail.src}
          alt={article.thumbnail.alt}
          className={styles.cardImage}
        />
      )}
    </div>
  );
};

export default MediumCard;
