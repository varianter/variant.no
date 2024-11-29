import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { SanityImage } from "src/components/image/SanityImage";
import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { ImageSplitSection } from "studio/lib/interfaces/pages";

import styles from "./image-split.module.css";

interface ImageSplitProps {
  section: ImageSplitSection;
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <Text type="bodySmall">{children}</Text>,
};

const ImageSplitComponent = ({ section }: ImageSplitProps) => {
  return (
    <article className={styles.article}>
      <Text type="h2">{section.basicTitle}</Text>

      <div>
        {section.richText && (
          <PortableText
            value={section.richText}
            components={myPortableTextComponents}
          />
        )}
        {section.link && <CustomLink link={section.link} />}
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
