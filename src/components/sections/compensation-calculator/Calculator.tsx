"use client";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { use, useMemo } from "react";

import { useLocationContext } from "src/components/compensations/LocationContext";
import {
  calculateSalary,
  getDegreeOptions,
  getLatestSalaryResult,
  getMaybeMaxYear,
  getMinMaxYear,
} from "src/components/compensations/utils/salary";
import InputField from "src/components/forms/inputField/InputField";
import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import Text from "src/components/text/Text";
import { formatAsCurrency } from "src/utils/i18n";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import {
  SalariesByLocationPage,
  YearlySalaries,
} from "studio/lib/interfaces/compensations";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { Result } from "studio/utils/result";

import styles from "./compensation-calculator.module.css";
import { Degree, SalaryData } from "./types";

type CalculatorProps = {
  localeRes: Promise<LocaleDocument>;
  salariesByLocationRes: Promise<{
    salariesByLocation: SalariesByLocationPage[];
    locations: CompanyLocation[];
    globalSalaries: YearlySalaries[];
  }>;
  background: "light" | "dark" | "violet";
};

export default function Calculator({
  localeRes,
  salariesByLocationRes,
  background,
}: CalculatorProps) {
  const t = useTranslations("compensation");

  const locale = use(localeRes);
  const { salariesByLocation, locations, globalSalaries } = use(
    salariesByLocationRes,
  );

  const locationCtx = useLocationContext();

  // Build location options for standalone picker
  const locationOptions: IOption[] = useMemo(
    () =>
      locations
        .filter((loc) =>
          salariesByLocation.some((s) => s.location?._ref === loc._id),
        )
        .map((loc) => ({
          id: loc._id,
          label: loc.companyLocationName,
        })),
    [locations, salariesByLocation],
  );

  const [standaloneLocation, setStandaloneLocation] = useQueryState(
    "location",
    {
      defaultValue: locationOptions[0]?.id,
      parse: (value) => {
        const ids = new Set(locationOptions.map((o) => o.id));
        return value && ids.has(value) ? value : locationOptions[0]?.id;
      },
      serialize: (value) => value ?? "",
    },
  );

  const isStandalone = !locationCtx;

  const { yearlySalariesForLocation, isGlobal } = useMemo(() => {
    if (locationCtx) {
      return {
        yearlySalariesForLocation: locationCtx.yearlySalariesForLocation,
        isGlobal: locationCtx.isUsingGlobalSalaries,
      };
    }
    // @deprecated REMOVE - fallback to global during migration
    const locationSalaries = salariesByLocation
      .find((s) => s.location._ref === standaloneLocation)
      ?.yearlySalaries?.toSorted((a, b) => a.year - b.year);
    return {
      yearlySalariesForLocation:
        locationSalaries ?? globalSalaries.toSorted((a, b) => a.year - b.year),
      isGlobal: !locationSalaries,
    };
  }, [locationCtx, salariesByLocation, standaloneLocation, globalSalaries]);

  const salaries = useMemo<Result<SalaryData, unknown>>(
    () => getLatestSalaryResult(yearlySalariesForLocation).salaryData,
    [yearlySalariesForLocation],
  );

  const [year, setYear] = useQueryState<number | null>("year", {
    defaultValue: getMaybeMaxYear(salaries) ?? new Date().getFullYear(),
    parse: (value) => (value ? parseInt(value, 10) : null),
    serialize: (value) => (value ? value.toString() : ""),
    clearOnDefault: false,
  });

  const [degree, setDegree] = useQueryState<Degree>("degree", {
    defaultValue: "master",
    parse: (value) => (value as Degree) ?? null,
    serialize: (value) => value ?? "",
    clearOnDefault: false,
  });

  if (!locale || !salaries.ok) {
    console.error(
      "[CompensationCalculator]: Sanity data not found. Not rendering CompensationCalculator.",
    );
    return null;
  }

  const salary = calculateSalary(year, degree, salaries.value) ?? 0;
  const { min, max } = getMinMaxYear(salaries.value);
  const degreeOptions = getDegreeOptions(t);

  return (
    <form
      className={styles.formCalculator}
      aria-label={t("calculator.formLabel")}
    >
      {/* @deprecated REMOVE - indicator only relevant during migration */}
      {isGlobal && (
        <span
          title="Bruker landsdekkende lønnsdata — byspesifikke data er ikke lagt inn ennå"
          style={{
            cursor: "help",
            fontSize: "0.85em",
            opacity: 0.7,
          }}
        >
          ⚠ Landsdekkende data
        </span>
      )}
      {isStandalone && locationOptions.length > 0 && (
        <RadioButtonGroup
          id="calculator-location-group"
          label={t("bonus.location")}
          options={locationOptions}
          background={background}
          selectedId={standaloneLocation}
          onValueChange={(option) => setStandaloneLocation(option.id)}
        />
      )}
      <RadioButtonGroup
        id="degree-group"
        label={t("calculator.educationInput")}
        options={degreeOptions}
        background={background}
        selectedId={degree}
        onValueChange={(selectedOption) =>
          setDegree(selectedOption.id as Degree)
        }
      />
      <div className={styles.inputWrapper}>
        <InputField
          label={t("calculator.yearInput")}
          name="examinationYear"
          type="number"
          min={min}
          max={max}
          value={year}
          onChange={(_name, value) => setYear(parseInt(value))}
          required
        />
      </div>
      {salary !== null && (
        <div aria-live="polite" className={styles.salaryTextContainer}>
          <Text type="label">{t("calculator.resultLabel")}</Text>
          <p className={styles.salaryText}>
            {formatAsCurrency(salary, locale.locale, locale.currency)}
          </p>
          <Text type="label">{t("calculator.bonusResult")}</Text>
        </div>
      )}
    </form>
  );
}
