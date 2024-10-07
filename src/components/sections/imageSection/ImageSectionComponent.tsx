"use client";
import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { ImageSection } from "studio/lib/interfaces/pages";

import styles from "./imageSectionComponent.module.css";

const ImageSectionComponent = ({ section }: { section: ImageSection }) => {
  return (
    <article className={styles.article}>
      <Text type="h2">{section.basicTitle}</Text>
      {section.image && (
        <div className={styles.image}>
          <SanityImage image={section.image} />
        </div>
      )}
    </article>
  );
};

export default ImageSectionComponent;
