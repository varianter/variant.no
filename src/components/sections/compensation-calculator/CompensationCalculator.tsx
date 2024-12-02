import Text from "src/components/text/Text";
import { SalariesByLocation } from "studio/lib/interfaces/compensations";
import { CompensationCalculatorSection } from "studio/lib/interfaces/pages";
import { COMPENSATIONS_SALARIES } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./compensation-calculator.module.css";

export interface CompensationCalculatorProps {
  language: string;
  section: CompensationCalculatorSection;
}

export default async function CompensationCalculator({
  language,
  section,
}: CompensationCalculatorProps) {
  const employeesPageRes = await loadStudioQuery<{
    slug: string;
    salariesByLocation: SalariesByLocation[];
  }>(COMPENSATIONS_SALARIES, {
    language,
  });
  console.log(employeesPageRes.data);

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
        </div>
        <div className={handbookBgClassname}>
          <Text type="h3">{section.handbookTitle}</Text>
          <Text type="bodyBig">{section.handbookDescription}</Text>
        </div>
      </div>
    </div>
  );
}
