"use client";
import { useState } from "react";

import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { LocaleDocument } from "studio/lib/interfaces/locale";

import styles from "./compensations.module.css";
import BenefitsByLocation from "./components/benefitsByLocation/BenefitsByLocation";
import YearlyBonuses from "./components/yearlyBonuses/YearlyBonuses";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
  locale: LocaleDocument;
}

export default function CompensationSelector({
  compensations,
  locations,
  locale,
}: CompensationsProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    locations[0]._id,
  );

  const locationOptions: IOption[] = locations.map((companyLocation) => ({
    id: companyLocation._id,
    label: companyLocation.companyLocationName,
  }));

  const benefitsFilteredByLocation =
    compensations.benefitsByLocation.find(
      (benefit) => benefit.location._ref === selectedLocation,
    )?.benefits || [];

  const yearlyBonusesForLocation = compensations.bonusesByLocation.find(
    (b) => b.location._ref === selectedLocation,
  )?.yearlyBonuses;

  return (
    <div className={styles.compensationWrapper}>
      {yearlyBonusesForLocation && (
        <YearlyBonuses bonuses={yearlyBonusesForLocation} locale={locale} />
      )}
      <RadioButtonGroup
        id="location-group"
        label="Velg lokasjon"
        options={locationOptions}
        selectedId={selectedLocation}
        onValueChange={(option) => setSelectedLocation(option.id)}
      />

      <BenefitsByLocation benefits={benefitsFilteredByLocation} />
    </div>
  );
}
