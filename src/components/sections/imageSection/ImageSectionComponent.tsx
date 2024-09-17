"use client";
import Text from "src/components/text/Text";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { ImageSection } from "studio/lib/interfaces/pages";

import styles from "./imageSectionComponent.module.css";

const ImageSectionComponent = ({ section }: { section: ImageSection }) => {
  const renderedImage = useConvertSanityImageToNextImage(section.image);
  return (
    <article className={styles.article}>
      <Text type="h2">{section.basicTitle}</Text>
      {renderedImage && <div className={styles.image}>{renderedImage}</div>}
    </article>
  );
};

export default ImageSectionComponent;
