import Link from "next/link";

import { SanityImage } from "src/components/image/SanityImage";
import SmileyBox from "src/components/smileyBox/SmileyBox";
import Text from "src/components/text/Text";
import { LearningSection } from "studio/lib/interfaces/pages";

import styles from "./learning.module.css";

export interface LearningProps {
  section: LearningSection;
}

export default function Learning({ section }: LearningProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Text type={"titleL"}>{section.basicTitle}</Text>
      </div>
      <div className={styles.content}>
        <SmileyBox
          description={section.description}
          smileySide="right"
          smileyType="shock"
          backgroundColor="blue"
        />
        <div className={styles.image}>
          <SanityImage image={section.image} />
        </div>
        <Link href={section.articleLink} hrefLang="nb">
          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <Text type="labelL" color="light">
                {section.articleTag}
              </Text>
              <Text type="titleM" color="light">
                {section.articleTitle}
              </Text>
              <Text type="lead" color="light">
                {section.articleSubtitle}
              </Text>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
