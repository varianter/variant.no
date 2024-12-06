"use client";

import { useTranslations } from "next-intl";
import { use, useState } from "react";

import { calculateSalary } from "src/components/compensations/utils/salary";
import InputField from "src/components/forms/inputField/InputField";
import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import Text from "src/components/text/Text";
import { formatAsCurrency } from "src/utils/i18n";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { Result } from "studio/utils/result";

import styles from "./compensation-calculator.module.css";
import { Degree, SalaryData } from "./types";

type CalculatorProps = {
  localeRes: Promise<LocaleDocument>;
  salariesRes: Promise<Result<SalaryData, unknown>>;
  background: "light" | "dark" | "violet";
  initialDegree: Degree;
  initialYear?: number;
};

export default function Calculator({
  localeRes,
  salariesRes,
  initialDegree,
  initialYear,
  background,
}: CalculatorProps) {
  const t = useTranslations("compensation_calculator");
  const locale = use(localeRes);
  const salaries = use(salariesRes);
  const [year, setYear] = useState(
    initialYear ?? getMaybeMaxYear(salaries) ?? new Date().getFullYear(),
  );
  const [degree, setDegree] = useState<Degree>(initialDegree);

  if (!locale || !salaries.ok) {
    console.error(
      "[CompensationCalculator]: Sanity data not found. Not rendering CompensationCalculator.",
    );
    return null;
  }

  const { min, max } = getMinMaxYear(salaries.value);
  const salary = calculateSalary(year, degree, salaries.value) ?? 0;

  const degreeOptions: IOption[] = [
    { id: "bachelor", label: t("degreeOptions.bachelor") },
    { id: "master", label: t("degreeOptions.master") },
  ];

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

      {salary !== null ? (
        <div aria-live="polite" className={styles.salaryTextContainer}>
          <Text type="labelRegular">{t("calculator.resultLabel")}</Text>
          <Text className={styles.salaryText}>
            {formatAsCurrency(salary, locale.locale, locale.currency)}
          </Text>
          <Text type="labelRegular">{t("calculator.bonusResult")}</Text>
        </div>
      ) : null}
    </form>
  );
}

function getMinMaxYear(salaries: SalaryData) {
  const years = Object.keys(salaries).map((s) => parseInt(s));
  const min = Math.min(...years);
  const max = Math.max(...years);
  return { min, max };
}
function getMaybeMaxYear(salaries: Result<SalaryData, unknown>) {
  if (!salaries.ok) return undefined;
  const years = Object.keys(salaries.value).map((s) => parseInt(s));
  return Math.max(...years);
}
