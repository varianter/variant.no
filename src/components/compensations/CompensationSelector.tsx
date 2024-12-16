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
  const hasBenefits = (id: string) =>
    compensations.benefitsByLocation.some((b) => b.location._ref === id);

  const locationOptions: IOption[] = locations
    .map((companyLocation) => ({
      id: companyLocation._id,
      label: companyLocation.companyLocationName,
    }))
    .filter((l) => hasBenefits(l.id));

  const [selectedLocation, setSelectedLocation] = useState<string>(
    locationOptions[0]?.id,
  );

  const benefitsFilteredByLocation =
    compensations.benefitsByLocation.find(
      (benefit) => benefit.location._ref === selectedLocation,
    )?.benefits || [];

  const yearlyBonusesForLocation = compensations.bonusesByLocation.find(
    (b) => b.location._ref === selectedLocation,
  )?.yearlyBonuses;

  return (
    <div className={styles.compensationWrapper}>
      <RadioButtonGroup
        id="location-group"
        label="Velg lokasjon"
        options={locationOptions}
        selectedId={selectedLocation}
        onValueChange={(option) => {
          setSelectedLocation(option.id);
        }}
      />

      {yearlyBonusesForLocation && (
        <YearlyBonuses bonuses={yearlyBonusesForLocation} locale={locale} />
      )}
      <BenefitsByLocation benefits={benefitsFilteredByLocation} />
    </div>
  );
}
