"use client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

import Text from "src/components/text/Text";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { IImage } from "studio/lib/interfaces/media";
import { GridSection } from "studio/lib/interfaces/pages";

import styles from "./grid.module.css";

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

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <Text type="small">{children}</Text>,
};
