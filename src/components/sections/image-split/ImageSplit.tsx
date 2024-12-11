import { ElementType } from "react";

import { SanityImage } from "src/components/image/SanityImage";
import LinkButton from "src/components/linkButton/LinkButton";
import Text, { TextType } from "src/components/text/Text";
import { cnIf } from "src/utils/css";
import { ImageSplitSection } from "studio/lib/interfaces/pages";
import { ImageAlignment } from "studio/schemas/fields/media";

import styles from "./image-split.module.css";

interface ImageSplitProps {
  section: ImageSplitSection;
}

const ImageSplitComponent = ({ section }: ImageSplitProps) => {
  const hasImage = section.imageExtended;
  const alignment = section.imageExtended?.imageAlignment;
  const showImageToLeft = hasImage && alignment == ImageAlignment.Left;

  const imageSplitClass = cnIf({
    [styles.imageSplit]: true,
    [styles["imageSplit--imageLeft"]]: showImageToLeft,
    [styles["imageSplit--imageRight"]]: !showImageToLeft,
    [styles["imageSplit--2vs3"]]: section.is2vs3,
    [styles["imageSplit--medium"]]: section.size === "medium",
  });

  const imageClass = cnIf({
    [styles.image]: true,
    [styles["image--fullHeight"]]: section.imageFullHeight,
  });

  return (
    <article className={imageSplitClass}>
      <div className={styles.textContainer}>
        {section.content.map((content, index) => (
          <Content key={content._key} content={content} isFirst={index === 0} />
        ))}

        {section.actions?.length > 0 && (
          <div className={styles.textContainer__link}>
            {section.actions.map((action, index) => (
              <LinkButton
                key={action._key}
                type={index === 0 ? "primary" : "secondary"}
                size="L"
                link={action}
              />
            ))}
          </div>
        )}
      </div>

      {section.imageExtended && (
        <div className={imageClass}>
          <div>
            <SanityImage image={section.imageExtended} objectFit="none" />
          </div>
        </div>
      )}
    </article>
  );
};

function Content({
  content,
  isFirst,
}: {
  content: ImageSplitProps["section"]["content"][0];
  isFirst: boolean;
}) {
  const [type, asType] = isFirst ? ["h2", "h2"] : ["h4", "h3"];

  return (
    <>
      <Text type={type as TextType} as={asType as ElementType}>
        {content.basicTitle}
      </Text>

      {content.description && (
        <Text type="bodyNormal">{content.description}</Text>
      )}
    </>
  );
}

export default ImageSplitComponent;
