import { SanitySharedImage } from "src/components/image/SanityImage";
import { ImageBlock } from "studioShared/lib/interfaces/imageBlock";

import styles from "./imageSection.module.css";

export interface ImageSectionProps {
  section: ImageBlock;
}

export default function ImageSection({ section }: ImageSectionProps) {
  return (
    <div className={styles.wrapper}>
      {section.images?.map((image) => (
        <div
          key={image._key ?? `${section._key}-${image.alt}`}
          className={styles.imageWrapper}
        >
          <div className={styles.imageContent}>
            <SanitySharedImage image={image} />
          </div>
        </div>
      ))}
    </div>
  );
}
