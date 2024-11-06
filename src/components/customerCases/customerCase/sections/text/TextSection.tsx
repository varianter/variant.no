import Text from "src/components/text/Text";
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
          styles.content + (section.highlighted ? ` ${styles.highlighted}` : "")
        }
      >
        <div className={styles.innerContent}>
          <Text>{section.text}</Text>
        </div>
      </div>
    </div>
  );
}
