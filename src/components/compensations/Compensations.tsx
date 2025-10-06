import { RichText } from "src/components/richText/RichText";
import { getLatestSalaries } from "src/components/sections/compensation-calculator/api";
import SplitSection from "src/components/sections/splitSection/SplitSection";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";

import styles from "./compensations.module.css";
import CompensationSelector from "./CompensationSelector";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
  language: string;
}

export default async function Compensations({
  compensations,
  locations,
  language,
}: CompensationsProps) {
  const salariesRes = getLatestSalaries();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <Text type="titleL">{compensations.basicTitle}</Text>
        <RichText value={compensations.richText} />
        <SplitSection
          section={compensations.splitSection}
          language={language}
        />
        <CompensationSelector
          compensations={compensations}
          locations={locations}
          salariesRes={salariesRes}
        />
      </div>
    </div>
  );
}
