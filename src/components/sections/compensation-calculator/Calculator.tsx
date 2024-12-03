"use client";

import { use, useState } from "react";

import Button from "src/components/buttons/Button";
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

import { Degree, SalaryData } from "./types";

type CalculatorProps = {
  localeRes: Promise<LocaleDocument>;
  salariesRes: Promise<Result<SalaryData, unknown>>;

  initialDegree: Degree;
  initialYear: number;
};

export default function Calculator({
  localeRes,
  salariesRes,
  initialDegree,
  initialYear,
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
    <div>
      <SalaryCalculator
        examinationYearValue={year}
        minExaminationYear={1985}
        maxExaminationYear={2024}
        selectedDegree={degree}
        onDegreeChanged={setDegree}
        onExaminationYearChanged={setYear}
        action={async () => {}}
      />

      {salary !== null ? (
        <div aria-live="polite">
          <Text>Din årslønn</Text>
          <Text>
            {formatAsCurrency(salary, locale.locale, locale.currency)}
          </Text>
          <Text>+ bonus</Text>
        </div>
      ) : null}
    </div>
  );
}

const degreeOptions: IOption[] = [
  { id: "bachelor", label: "Bachelor" },
  { id: "master", label: "Master" },
];

interface SalaryCalculatorProps {
  examinationYearValue: number;
  minExaminationYear: number;
  maxExaminationYear: number;
  selectedDegree: Degree;
  onDegreeChanged: (degree: Degree) => void;
  onExaminationYearChanged: (examinationYear: number) => void;
  action: (data: FormData) => void;
}

function SalaryCalculator({
  examinationYearValue: yearValue,
  minExaminationYear,
  maxExaminationYear,
  selectedDegree,
  onDegreeChanged,
  onExaminationYearChanged,
  action,
}: SalaryCalculatorProps) {
  return (
    <form
      //TODO: replace aria-label with static translation from Sanity
      aria-label="salary calculator"
      action={action}
    >
      <RadioButtonGroup
        id="degree-group"
        label="Velg utdanning"
        options={degreeOptions}
        selectedId={selectedDegree}
        onValueChange={(selectedOption) =>
          onDegreeChanged(selectedOption.id as Degree)
        }
      />
      <div>
        <InputField
          label="Year"
          name="examinationYear"
          type="number"
          min={minExaminationYear}
          max={maxExaminationYear}
          value={yearValue}
          onChange={(_name, value) => onExaminationYearChanged(parseInt(value))}
          required
        />
      </div>
      <Button type="secondary" size="small">
        Regn ut
      </Button>
    </form>
  );
}
