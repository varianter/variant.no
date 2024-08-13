"use client";
import Text from "src/components/text/Text";
import { GridSection } from "studio/lib/payloads/pages";
import styles from "./grid.module.css";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "src/components/richText/RichText";
import { IImage } from "studio/lib/payloads/media";

const Grid = ({ grid }: { grid: GridSection }) => {
  return (
    <article className={styles.article}>
      <div className={styles.grid}>
        <Text type="h2" id="grid-title">
          {grid.basicTitle}
        </Text>
        <ul aria-labelledby="grid-title" className={styles.list}>
          {grid.items.map((item) => {
            return <Element item={item} key={item._key} />;
          })}
        </ul>
      </div>
    </article>
  );
};

export default Grid;

const Element = ({
  item,
}: {
  item: {
    _key: string;
    _type: string;
    basicTitle: string;
    richText?: PortableTextBlock[];
    image: IImage;
  };
}) => {
  const renderImage = useConvertSanityImageToNextImage(item.image);
  return (
    <li className={styles.listItem}>
      {renderImage && <div className={styles.image}>{renderImage}</div>}
      <Text>{item.basicTitle}</Text>
      {item.richText && (
        <PortableText
          value={item.richText}
          components={myPortableTextComponents}
        />
      )}
    </li>
  );
};

const myPortableTextComponents = {
  block: ({ children }: any) => <Text type="small">{children}</Text>,
};
