import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { LinkType } from "studio/lib/interfaces/navigation";
import { TextBlock } from "studioShared/lib/interfaces/textBlock";

import styles from "./textSection.module.css";

export interface TextSectionProps {
  section: TextBlock;
}

export default function TextSection({ section }: TextSectionProps) {
  return (
    <div className={styles.wrapper}>
      <div
        className={
          styles.content +
          (section.textBlockType === "framed" ? ` ${styles.highlighted}` : "")
        }
      >
        <div className={styles.innerContent}>
          <div>
            {section.sectionTitle && (
              <Text className={styles.header} type={"h5"}>
                {section.sectionTitle}
              </Text>
            )}
            <Text>{section.text}</Text>
          </div>
          <div className={styles.link}>
            {section.url && (
              <CustomLink
                size={"small"}
                link={{
                  _key: "read-more",
                  _type: "link",
                  linkType: LinkType.External,
                  linkTitle: "Les mer", //Todo: Add translation
                  newTab: true,
                  url: section.url,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
