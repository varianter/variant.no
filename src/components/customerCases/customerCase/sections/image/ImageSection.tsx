import { SanitySharedImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { ImageBlock } from "studioShared/lib/interfaces/imageBlock";

import styles from "./imageSection.module.css";

export interface ImageSectionProps {
  section: ImageBlock;
}

export default function ImageSection({ section }: ImageSectionProps) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.content}${section.fullWidth ? ` ${styles.fullWidth}` : ""}`}
      >
        <div className={styles.imageContent}>
          <SanitySharedImage image={section.image} />
          {section.image.figureDescription && (
            <Text type="imageLabel">{section.image.figureDescription}</Text>
          )}
        </div>
      </div>
    </div>
  );
}
