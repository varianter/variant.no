import { useTranslations } from "next-intl";

import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { LinkType } from "studio/lib/interfaces/navigation";
import { TextBlock } from "studioShared/lib/interfaces/textBlock";

import styles from "./textSection.module.css";

export interface TextSectionProps {
  section: TextBlock;
}

export default function TextSection({ section }: TextSectionProps) {
  const t = useTranslations("custom_link");
  return (
    <div className={styles.wrapper}>
      <div
        className={
          styles.content /* +
          (section.textBlockType === "framed" ? ` ${styles.framed}` : "") */
        }
      >
        <div className={styles.innerContent}>
          <div>
            {section.sectionTitle && (
              <Text className={styles.title} type={"h4"}>
                {section.sectionTitle}
              </Text>
            )}
            <Text
              type={
                section.textBlockType === "highlighted"
                  ? "bodyXl"
                  : "bodyNormal"
              }
            >
              {section.text}
            </Text>
          </div>
          <div className={styles.link}>
            {section.url && (
              <CustomLink
                size={"small"}
                link={{
                  _key: "read-more",
                  _type: "link",
                  linkType: LinkType.External,
                  linkTitle: t("read_more"),
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
