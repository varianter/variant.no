"use client";

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
  initialYear: number;
};

const degreeOptions: IOption[] = [
  { id: "bachelor", label: "Bachelor" },
  { id: "master", label: "Master" },
];

export default function Calculator({
  localeRes,
  salariesRes,
  initialDegree,
  initialYear,
  background,
}: CalculatorProps) {
  const locale = use(localeRes);
  const salaries = use(salariesRes);
  const [year, setYear] = useState(initialYear);
  const [degree, setDegree] = useState<Degree>(initialDegree);

  if (!locale || !salaries.ok) {
    console.error(
      "[CompensationCalculator]: Sanity data not found. Not rendering CompensationCalculator.",
    );
    return null;
  }

  const salary = calculateSalary(year, degree, salaries.value) ?? 0;

  return (
    <form className={styles.formCalculator} aria-label="salary calculator">
      <RadioButtonGroup
        id="degree-group"
        label="Utdanning"
        options={degreeOptions}
        background={background}
        selectedId={degree}
        onValueChange={(selectedOption) =>
          setDegree(selectedOption.id as Degree)
        }
      />

      <div className={styles.inputWrapper}>
        <InputField
          label="Året du begynte i relevant arbeid"
          name="examinationYear"
          type="number"
          min={1085}
          max={2024}
          value={year}
          onChange={(_name, value) => setYear(parseInt(value))}
          required
        />
      </div>

      {salary !== null ? (
        <div aria-live="polite" className={styles.salaryTextContainer}>
          <Text type="labelRegular">Din årslønn</Text>
          <Text className={styles.salaryText}>
            {formatAsCurrency(salary, locale.locale, locale.currency)}
          </Text>
          <Text type="labelRegular">+ bonus</Text>
        </div>
      ) : null}
    </form>
  );
}
