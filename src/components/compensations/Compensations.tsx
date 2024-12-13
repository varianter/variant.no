import CompensationCalculator from "src/components/sections/compensation-calculator/CompensationCalculator";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { LocaleDocument } from "studio/lib/interfaces/locale";

import styles from "./compensations.module.css";
import CompensationSelector from "./CompensationSelector";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
  locale: LocaleDocument;
  language: string;
}

export default async function Compensations({
  compensations,
  locations,
  locale,
  language,
}: CompensationsProps) {
  return (
    <div className={styles.wrapper}>
      <Text className={styles.text} type="h1">
        {compensations.basicTitle}
      </Text>

      <CompensationCalculator
        section={compensations.compensationCalculator}
        language={language}
      />

      <CompensationSelector
        compensations={compensations}
        locations={locations}
        locale={locale}
      />
    </div>
  );
}
