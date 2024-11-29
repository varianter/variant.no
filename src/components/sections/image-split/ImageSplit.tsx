import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { SanityImage } from "src/components/image/SanityImage";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { ImageSplitSection } from "studio/lib/interfaces/pages";

import styles from "./image-split.module.css";
import { ImageAlignment } from "studio/schemas/fields/media";

interface ImageSplitProps {
  section: ImageSplitSection;
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <Text type="bodyNormal">{children}</Text>,
};

const ImageSplitComponent = ({ section }: ImageSplitProps) => {
  const hasImage = section.imageExtended;
  const alignment = section.imageExtended?.imageAlignment;
  const showImageToLeft = hasImage && alignment == ImageAlignment.Left;
  const showImageToRight = hasImage && alignment == ImageAlignment.Right;

  return (
    <article className={styles.imageSplit}>
      {showImageToLeft && (
        <div className={styles.image}>
          <SanityImage image={section.imageExtended} />
        </div>
      )}

      <div className={styles.textContainer}>
        <Text type="h4" as="h2">
          {section.basicTitle}
        </Text>

        {section.richText && (
          <PortableText
            value={section.richText}
            components={myPortableTextComponents}
          />
        )}

        {section.link && (
          <div className={styles.textContainer__link}>
            <LinkButton isSmall link={section.link} />
          </div>
        )}
      </div>

      {showImageToRight && (
        <div className={styles.image}>
          <SanityImage image={section.imageExtended} />
        </div>
      )}
    </article>
  );
};

export default ImageSplitComponent;
