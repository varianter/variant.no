import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { IImage } from "studio/lib/interfaces/media";
import { Field, FieldGrid } from "studio/lib/interfaces/pages";

import styles from "./gridsection.module.css";

interface GridSectionProps {
  section: FieldGrid;
}

interface FieldImageProps {
  image?: IImage;
  size: string;
}

const FieldImage = ({ image, size }: FieldImageProps) => {
  if (!image || (size !== "medium" && size !== "large")) return null;

  return (
    <div
      className={`${styles.fieldImage} ${size === "large" ? styles.fieldImageLargeWrapper : styles.fieldImageMediumWrapper}`}
    >
      <SanityImage image={image} objectFit="cover" />
    </div>
  );
};

const FieldCard = ({ field }: { field: Field }) => {
  const t = useTranslations("gridSection");
  const {
    size = "small",
    type,
    image,
    title,
    description,
    link,
    readingListeningTime,
  } = field;

  return (
    <Link href={link?.url || "/"} passHref>
      <div
        className={`${styles.fieldCard} ${styles[size]} ${type === "article" ? styles.article : styles.other}`}
      >
        <FieldImage image={image} size={size} />
        <div className={styles.fieldContent}>
          <div className={styles.fieldMeta}>
            <Text type="labelL">{t(type)}</Text>
            {readingListeningTime && (
              <>
                <Text type="labelL">·</Text>
                <Text type="labelL">{readingListeningTime}</Text>
              </>
            )}
          </div>
          <Text type="titleM" as="h2">
            {title}
          </Text>
          {description && <Text type="lead">{description}</Text>}
        </div>
      </div>
    </Link>
  );
};

const GridSectionComponent = ({ section }: GridSectionProps) => {
  if (!section?.fields?.length) return null;

  return (
    <div className={styles.gridSection}>
      {section.fields.map((field, index) => (
        <div
          key={index}
          className={`${styles.gridItem} ${styles[field.size ?? "small"]}`}
        >
          <FieldCard field={field} />
        </div>
      ))}
    </div>
  );
};

export default GridSectionComponent;
