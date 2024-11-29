import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { SanityImage } from "src/components/image/SanityImage";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { ImageSplitSection } from "studio/lib/interfaces/pages";

import styles from "./image-split.module.css";

interface ImageSplitProps {
  section: ImageSplitSection;
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <Text type="bodyNormal">{children}</Text>,
};

const ImageSplitComponent = ({ section }: ImageSplitProps) => {
  return (
    <article className={styles.imageSplit}>
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

      {section.imageExtended && (
        <div className={styles.image}>
          <SanityImage image={section.imageExtended} />
        </div>
      )}
    </article>
  );
};

export default ImageSplitComponent;
