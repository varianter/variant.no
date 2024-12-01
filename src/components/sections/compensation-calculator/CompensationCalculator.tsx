import Text from "src/components/text/Text";
import { CompensationCalculatorSection } from "studio/lib/interfaces/pages";
import { COMPENSATIONS_BENEFITS } from "studio/lib/queries/specialPages";
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
  const employeesPageRes = await loadStudioQuery<{ slug: string }>(
    COMPENSATIONS_BENEFITS,
    {
      language,
    },
  );
  const compensationCalculator = employeesPageRes.data.slug;
  console.log(compensationCalculator);

  return (
    <div className={styles.wrapper}>
      <div className={styles.employees}>
        <Text type="h1">{section.moduleTitle}</Text>
      </div>
    </div>
  );
}
