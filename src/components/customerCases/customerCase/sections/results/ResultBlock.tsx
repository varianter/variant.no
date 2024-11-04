import Text from "src/components/text/Text";
import { ResultBlock as ResultBlockObject } from "studioShared/lib/interfaces/resultBlock";

import styles from "./resultBlock.module.css";

export interface ResultBlockProps {
  section: ResultBlockObject;
}

export default function QuoteBlock({ section }: ResultBlockProps) {
  return (
    section.resultBlockTitle && (
      <div className={styles.wrapper}>
        <div className={styles.resultblock}>
          <Text type="h4" className={styles.blocktitle}>
            {section.resultBlockTitle}
          </Text>
          <div className={styles.resultrow}>
            {section.resultList?.map((result) => (
              <div className={styles.results} key={result._key}>
                <Text type="h2" className={styles.mainresult}>
                  {result.result}
                </Text>
                <Text type="labelRegular">{result.description}</Text>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    )
  );
}
