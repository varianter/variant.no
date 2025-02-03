"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";

import BenefitsByLocation from "./components/benefitsByLocation/BenefitsByLocation";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
}

export default function CompensationSelector({
  compensations,
  locations,
}: CompensationsProps) {
  const t = useTranslations("compensation");

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

  const yearlyBonusesForLocation = compensations.bonusesByLocation
    .find((b) => b.location._ref === selectedLocation)
    ?.yearlyBonuses?.toReversed();

  const yearlySalaryForLocation = compensations.salariesByLocation.find(
    (s) => s.location._ref === selectedLocation,
  );

  return (
    <>
      <RadioButtonGroup
        id="location-group"
        label={t("bonus.location")}
        options={locationOptions}
        selectedId={selectedLocation}
        onValueChange={(option) => {
          setSelectedLocation(option.id);
        }}
      />
      <BenefitsByLocation
        benefits={benefitsFilteredByLocation}
        yearlyBonusesForLocation={yearlyBonusesForLocation}
        yearlySalaryForLocation={yearlySalaryForLocation}
      />
    </>
  );
}
