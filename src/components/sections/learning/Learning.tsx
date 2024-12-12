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
        <div className={styles.textContainer}>
          <div className={styles.textContent}>
            <Text type="labelLarge" className={styles.articleTag}>
              Artikkel · 5 min{" "}
            </Text>
            <Link href="https://blog.variant.no/tidenes-beste-konferansesesong-for-variant-700baa5e82a3">
              <Text type="h3" className={styles.articleTitle}>
                Tidenes beste konferansesesong for Variant
              </Text>
            </Link>
            <Text type="bodyBig" className={styles.articleSubtitle}>
              I Variant har vi en veldig uttalt strategi rundt
              kompetansebygging. Vi kaller den læreglede.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
