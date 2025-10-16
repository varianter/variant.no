import { SanityImage } from "src/components/image/SanityImage";
import SmileyBox from "src/components/smileyBox/SmileyBox";
import Text from "src/components/text/Text";
import { OpennessSection } from "studio/lib/interfaces/pages";

import styles from "./openness.module.css";

export interface OpennessProps {
  section: OpennessSection;
}

export default function Openness({ section }: OpennessProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Text type={"titleL"}>{section.basicTitle}</Text>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <SanityImage image={section.image} />
        </div>
        <SmileyBox
          description={section.description}
          smileySide="left"
          smileyType="happy"
          backgroundColor="green"
        />
      </div>
    </div>
  );
}
