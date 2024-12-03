import { Suspense } from "react";

import Text from "src/components/text/Text";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { CompensationCalculatorSection } from "studio/lib/interfaces/pages";
import { LOCALE_QUERY } from "studio/lib/queries/locale";
import { loadStudioQuery } from "studio/lib/store";

import { getSalaryByYear } from "./api";
import Calculator from "./Calculator";
import styles from "./compensation-calculator.module.css";

export interface CompensationCalculatorProps {
  language: string;
  section: CompensationCalculatorSection;
}

export default async function CompensationCalculator({
  section,
}: CompensationCalculatorProps) {
  const salariesRes = getSalaryByYear(2024);
  const localeRes = loadStudioQuery<LocaleDocument>(LOCALE_QUERY).then(
    (d) => d.data,
  );

  // TODO: add cn util or andIf
  const calculatorBgClassname =
    section.background === "violet"
      ? `${styles.calculator} ${styles["calculator--violet"]}`
      : styles.calculator;
  const handbookBgClassname =
    section.background === "violet"
      ? `${styles.handbook} ${styles["handbook--violet"]}`
      : styles.handbook;

  return (
    <div>
      <Text type="h2">{section.moduleTitle}</Text>

      <div className={styles.grid}>
        <div className={calculatorBgClassname}>
          <Text type="h3">{section.calculatorTitle}</Text>
          <Text type="bodyBig">{section.calculatorDescription}</Text>

          <Suspense fallback={<div>Loading...</div>}>
            <Calculator
              localeRes={localeRes}
              salariesRes={salariesRes}
              initialYear={2024}
              initialDegree={"bachelor"}
            />
          </Suspense>
        </div>
        <div className={handbookBgClassname}>
          <Text type="h3">{section.handbookTitle}</Text>
          <Text type="bodyBig">{section.handbookDescription}</Text>
        </div>
      </div>
    </div>
  );
}
