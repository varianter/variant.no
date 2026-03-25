"use client";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { use, useMemo } from "react";

import { useLocationContext } from "src/components/compensations/LocationContext";
import {
  calculateSalary,
  getDegreeOptions,
  getMaybeMaxYear,
  getMinMaxYear,
} from "src/components/compensations/utils/salary";
import InputField from "src/components/forms/inputField/InputField";
import { RadioButtonGroup } from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import Text from "src/components/text/Text";
import { formatAsCurrency } from "src/utils/i18n";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { Result, ResultError, ResultOk } from "studio/utils/result";

import styles from "./compensation-calculator.module.css";
import { Degree, SalaryData } from "./types";

type CalculatorProps = {
  localeRes: Promise<LocaleDocument>;
  salariesRes: Promise<Result<SalaryData, unknown>>;
  background: "light" | "dark" | "violet";
};

export default function Calculator({
  localeRes,
  salariesRes,
  background,
}: CalculatorProps) {
  const t = useTranslations("compensation");

  const locale = use(localeRes);
  const serverSalaries = use(salariesRes);

  const locationCtx = useLocationContext();
  const salaries = useMemo(() => {
    if (!locationCtx) return serverSalaries;
    const entries = locationCtx.yearlySalariesForLocation;
    if (entries.length === 0)
      return ResultError<SalaryData, unknown>("No salary data");
    const latest = entries[entries.length - 1];
    try {
      return ResultOk<SalaryData, unknown>(
        JSON.parse(latest.salaries) as SalaryData,
      );
    } catch {
      return ResultError<SalaryData, unknown>("Failed to parse salary data");
    }
  }, [locationCtx, serverSalaries]);

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
