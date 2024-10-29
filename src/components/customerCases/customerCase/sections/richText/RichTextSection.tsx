import { RichText } from "src/components/richText/RichText";
import { RichTextBlock } from "studioShared/lib/interfaces/richTextBlock";

import styles from "./richTextSection.module.css";

export interface RichTextSectionProps {
  section: RichTextBlock;
}

export default function RichTextSection({ section }: RichTextSectionProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <RichText value={section.richText} />
      </div>
    </div>
  );
}
