import StackedHighlights from "src/components/stackedHighlights/StackedHighlights";
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
        <div className={styles.resultblock}>
          <Text type="h4" className={styles.blocktitle}>
            {section.resultsBlockTitle}
          </Text>
          <div className={styles.resultrow}>
            {section.resultsList?.map((result) => (
              <div className={styles.results} key={result._key}>
                <Text type="h2" className={styles.mainresult}>
                  {result.result}
                </Text>
                <Text type="labelRegular">{result.description}</Text>
              </div>
            ))}
          </div>
        </div>
        <div>
          <StackedHighlights></StackedHighlights>
        </div>
      </div>
    )
  );
}
