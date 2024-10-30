import Text from "src/components/text/Text";
import { QuoteBlock as QuoteBlockObject } from "studioShared/lib/interfaces/quoteBlock";

import styles from "./quoteBlock.module.css";

export interface QuoteBlockProps {
  section: QuoteBlockObject;
}

export default function QuoteBlock({ section }: QuoteBlockProps) {
  return (
    section.quote && (
      <div className={styles.quoteBlock}>
        <div
          className={`${styles.quoteBlockInner} ${section.author ? styles.withAuthor : styles.withoutAuthor}`}
        >
          <Text type="quoteNormal">
            {"“"}
            {section.quote}
            {"”"}
          </Text>
          {section.author && (
            <Text type="labelRegular">- {section.author}</Text>
          )}
        </div>
      </div>
    )
  );
}
