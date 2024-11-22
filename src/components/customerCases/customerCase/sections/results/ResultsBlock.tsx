import Text from "src/components/text/Text";
import { ResultsBlock as ResultsBlockObject } from "studioShared/lib/interfaces/resultsBlock";

import styles from "./resultsBlock.module.css";

export interface ResultsBlockProps {
  section: ResultsBlockObject;
}

export default function ResultsBlock({ section }: ResultsBlockProps) {
  return (
    section.resultsBlockTitle && (
      <div className={styles.wrapper}>
        <div>
          <StackedHighlights section={section}></StackedHighlights>
        </div>
      </div>
    )
  );
}

function StackedHighlights({ section }: ResultsBlockProps) {
  return (
    <div className={styles.highlightWrapper}>
      <div className={styles.highlightBlock}>
        <Text type="labelRegular" className={styles.highlightOutside}>
          {section.resultsBlockTitle}
        </Text>
        {section.quote?.map((quote) => (
          <div className={styles.highlightCard} key={quote._key}>
            <div className={styles.innerContent}>
              <Text type="h2">{quote.quoteText}</Text>
              <p className={styles.subtitle}>{quote.quoteAuthor}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.highlightRow}>
        {section.resultsList?.map((result) => (
          <div className={styles.highlightCard} key={result._key}>
            <div className={styles.innerContent}>
              <Text type="h2" className={styles.result}>
                {result.result}
              </Text>
              <p className={styles.subtitle}>{result.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}