"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import { SalaryData } from "src/components/sections/compensation-calculator/types";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { Result } from "studio/utils/result";

import Benefits from "./components/benefits/Benefits";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
  salariesRes: Promise<Result<SalaryData, unknown>>;
}

export default function CompensationSelector({
  compensations,
  locations,
  salariesRes,
}: CompensationsProps) {
  const t = useTranslations("compensation");

  const hasBenefits = (id: string) =>
    compensations.benefits.some(
      (b) =>
        b.location?._id === id && b.location?.companyLocationName !== "Norge",
    );

  const hasBonuses = (id: string) =>
    compensations.bonusesByLocation.some((b) => b.location?._ref === id);

  const hasBenefitsOrBonus = (id: string) => hasBenefits(id) || hasBonuses(id);

  const locationOptions: IOption[] = locations
    .filter((companyLocation) => hasBenefitsOrBonus(companyLocation._id))
    .map((companyLocation) => ({
      id: companyLocation._id,
      label: companyLocation.companyLocationName,
    }));

  const [selectedLocation, setSelectedLocation] = useState<string>(
    locationOptions[0]?.id,
  );

  const benefitsFilteredByLocation = compensations.benefits.filter(
    (benefit) =>
      benefit.location?._id === selectedLocation ||
      benefit.location?.companyLocationName === "Norge",
  );

  const yearlyBonusesForLocation = compensations.bonusesByLocation
    .find((b) => b.location._ref === selectedLocation)
    ?.yearlyBonuses?.toReversed();

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
      <Benefits
        benefits={benefitsFilteredByLocation}
        yearlyBonusesForLocation={yearlyBonusesForLocation}
        yearlySalaries={compensations.yearlySalaries}
        salariesRes={salariesRes}
      />
    </>
  );
}
