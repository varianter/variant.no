import Text from "src/components/text/Text";
import { CompensationCalculatorSection } from "studio/lib/interfaces/pages";
import { COMPENSATIONS_SALARIES } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

import { Suspense } from "react";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { LOCALE_QUERY } from "studio/lib/queries/locale";
import Calculator from "./Calculator";
import { CompensationData } from "./types";

import styles from "./compensation-calculator.module.css";
import { getSalaryByYear } from "./actions";

export interface CompensationCalculatorProps {
  language: string;
  section: CompensationCalculatorSection;
}

export default async function CompensationCalculator({
  language,
  section,
}: CompensationCalculatorProps) {
  const compensationsSalariesRes = loadStudioQuery<CompensationData>(
    COMPENSATIONS_SALARIES,
    {
      language,
    },
  ).then((d) => d.data);

  const localeRes = loadStudioQuery<LocaleDocument>(LOCALE_QUERY).then(
    (d) => d.data,
  );

  const data = await getSalaryByYear(2024);

  // TODO: add cn util or andIf
  const calculatorBgClassname =
    section.background === "violet"
      ? `${styles.calculator} ${styles["calculator--violet"]}`
      : styles.calculator;
  const handbookBgClassname =
    section.background === "violet"
      ? `${styles.handbook} ${styles["handbook--violet"]}`
      : styles.handbook;

  if (!data.ok) {
    console.error(
      "[CompensationCalculator]: Failed to get salary data for year 2024",
    );
    return null;
  }

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
              salary={data.value}
              year={2024}
              degree={"bachelor"}
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
