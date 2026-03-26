"use client";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { ReactNode, createContext, useContext } from "react";

import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import {
  Benefit,
  BonusPage,
  CompensationsPage,
  YearlySalaries,
} from "studio/lib/interfaces/compensations";

interface LocationContextValue {
  selectedLocation: string;
  setSelectedLocation: (id: string) => void;
  locationOptions: IOption[];
  yearlySalariesForLocation: YearlySalaries[];
  benefitsForLocation: Benefit[];
  yearlyBonusesForLocation: BonusPage[] | undefined;
}

const LocationContext = createContext<LocationContextValue | null>(null);

export function useLocationContext() {
  return useContext(LocationContext);
}

interface LocationProviderProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
  children: ReactNode;
}

export function LocationProvider({
  compensations,
  locations,
  children,
}: LocationProviderProps) {
  const hasBenefits = (id: string) =>
    compensations.benefits.some(
      (b) =>
        b.location?._id === id && b.location?.companyLocationName !== "Norge",
    );

  const hasBonuses = (id: string) =>
    compensations.bonusesByLocation.some((b) => b.location?._ref === id);

  const salariesByLocation = compensations.yearlySalariesByLocation ?? [];

  const hasSalaries = (id: string) =>
    salariesByLocation.some((s) => s.location?._ref === id);

  const hasLocationData = (id: string) =>
    hasBenefits(id) || hasBonuses(id) || hasSalaries(id);

  const locationOptions: IOption[] = locations
    .filter((companyLocation) => hasLocationData(companyLocation._id))
    .map((companyLocation) => ({
      id: companyLocation._id,
      label: companyLocation.companyLocationName,
    }));

  const defaultLocation = locationOptions[0]?.id;
  const locationIds = new Set(locationOptions.map((o) => o.id));

  const [selectedLocation, setSelectedLocation] = useQueryState("location", {
    defaultValue: defaultLocation,
    parse: (value) =>
      value && locationIds.has(value) ? value : defaultLocation,
    serialize: (value) => value ?? "",
  });

  // @deprecated REMOVE - fallback to global yearlySalaries during migration
  const yearlySalariesForLocation =
    salariesByLocation.length > 0
      ? (salariesByLocation
          .find((s) => s.location._ref === selectedLocation)
          ?.yearlySalaries?.toSorted((a, b) => a.year - b.year) ?? [])
      : (compensations.yearlySalaries ?? []).toSorted(
          (a, b) => a.year - b.year,
        );

  const benefitsForLocation = compensations.benefits.filter(
    (benefit) =>
      benefit.location?._id === selectedLocation ||
      benefit.location?.companyLocationName === "Norge",
  );

  const yearlyBonusesForLocation = compensations.bonusesByLocation
    .find((b) => b.location._ref === selectedLocation)
    ?.yearlyBonuses?.toSorted((a, b) => a.year - b.year);

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        locationOptions,
        yearlySalariesForLocation,
        benefitsForLocation,
        yearlyBonusesForLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function LocationSelector() {
  const t = useTranslations("compensation");
  const ctx = useLocationContext();
  if (!ctx) return null;

  return (
    <RadioButtonGroup
      id="location-group"
      label={t("bonus.location")}
      options={ctx.locationOptions}
      selectedId={ctx.selectedLocation}
      onValueChange={(option) => {
        ctx.setSelectedLocation(option.id);
      }}
    />
  );
}
