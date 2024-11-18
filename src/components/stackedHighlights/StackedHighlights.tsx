import Text from "src/components/text/Text";

import styles from "./stackedHighlights.module.css";

export default function StackedHighlights() {
  return (
    <div className={styles.highlightWrapper}>
      <div className={styles.highlightBlock}>
        <Text type="labelRegular" className={styles.highlightOutside}>
          Skryteblokk
        </Text>
        <div className={styles.highlightCard}>
          <div className={styles.innerContent}>
            <Text type="h2" className={styles.title}>
              Alt var rot før Variant kom inn i prosjektet
            </Text>
            <p className={styles.subtitle}>Undertittel</p>
          </div>
        </div>
      </div>
      <div className={styles.highlightRow}>
        <div className={styles.highlightCard}>
          <div className={styles.innerContent}>
            <Text type="h2" className={styles.title}>
              90 NPS
            </Text>
            <p className={styles.subtitle}>Net Promoter Score målt</p>
          </div>
        </div>
        <div className={styles.highlightCard}>
          <div className={styles.innerContent}>
            <Text type="h2" className={styles.title}>
              + 100%
            </Text>
            <p className={styles.subtitle}>Fornøyde kunder</p>
          </div>
        </div>
        <div className={styles.highlightCard}>
          <div className={styles.innerContent}>
            <Text type="h2" className={styles.title}>
              500t
            </Text>
            <p className={styles.subtitle}>Timer bespart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
