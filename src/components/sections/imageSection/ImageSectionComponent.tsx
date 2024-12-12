"use client";
import { SanityImage } from "src/components/image/SanityImage";
import { ImageSection } from "studio/lib/interfaces/pages";

import styles from "./imageSectionComponent.module.css";

const ImageSectionComponent = ({ section }: { section: ImageSection }) => {
  return (
    <article className={styles.article}>
      {section.image && (
        <div className={styles.image}>
          <SanityImage image={section.image} />
        </div>
      )}
    </article>
  );
};

export default ImageSectionComponent;
