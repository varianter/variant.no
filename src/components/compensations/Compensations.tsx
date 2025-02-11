import { RichText } from "src/components/richText/RichText";
import { getLatestSalaries } from "src/components/sections/compensation-calculator/api";
import CompensationCalculator from "src/components/sections/compensation-calculator/CompensationCalculator";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";

import styles from "./compensations.module.css";
import CompensationSelector from "./CompensationSelector";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
}

export default async function Compensations({
  compensations,
  locations,
}: CompensationsProps) {
  const salariesRes = getLatestSalaries();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.calculatorWrapper}>
          <div className={styles.compensationTitleWrapper}>
            <Text type="h2">{compensations.basicTitle}</Text>
            <RichText value={compensations.richText} />
          </div>
          <CompensationCalculator
            section={compensations.compensationCalculator}
          />
        </div>
        <CompensationSelector
          compensations={compensations}
          locations={locations}
          salariesRes={salariesRes}
        />
      </div>
    </div>
  );
}
