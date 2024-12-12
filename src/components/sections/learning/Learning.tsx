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
      <Text type={"h2"} className={styles.title}>
        {section.basicTitle}
      </Text>
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
        <Link href={section.articleLink}>
          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <Text type="labelLarge" className={styles.text}>
                {section.articleTag}
              </Text>
              <Text type="h3" className={styles.text}>
                {section.articleTitle}
              </Text>
              <Text type="bodyBig" className={styles.text}>
                {section.articleSubtitle}
              </Text>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
