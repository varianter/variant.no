import { RichText } from "src/components/richText/RichText";
import SplitSection from "src/components/sections/splitSection/SplitSection";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";

import styles from "./compensations.module.css";
import CompensationSelector from "./CompensationSelector";
import { LocationProvider, LocationSelector } from "./LocationContext";

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
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <Text type="titleL">{compensations.basicTitle}</Text>
        <RichText value={compensations.richText} />
        <LocationProvider compensations={compensations} locations={locations}>
          <LocationSelector />
          <SplitSection
            section={compensations.splitSection}
            language={language}
          />
          <CompensationSelector />
        </LocationProvider>
      </div>
    </div>
  );
}
