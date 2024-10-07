"use client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { IImage } from "studio/lib/interfaces/media";

import styles from "./lead.module.css";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <Text type="bodyLarge">{children}</Text>,
};

const Lead = ({
  image,
  richText,
}: {
  image: IImage;
  richText: PortableTextBlock[];
}) => {
  return (
    <div className={styles.lead}>
      <div className={styles.image}>
        <SanityImage image={image} />
      </div>
      {richText && (
        <div className={styles.body}>
          <PortableText
            value={richText}
            components={myPortableTextComponents}
          />
        </div>
      )}
    </div>
  );
};

export default Lead;
