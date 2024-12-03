"use client";

import { use, useEffect, useOptimistic, useState } from "react";
import Text from "src/components/text/Text";
import { formatAsCurrency } from "src/utils/i18n";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { getSalaryByYear } from "./actions";
import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import InputField from "src/components/forms/inputField/InputField";
import Button from "src/components/buttons/Button";

export type Degree = "bachelor" | "master";

type CalculatorProps = {
  initialSalary: number;
  localeRes: Promise<LocaleDocument>;
};

type SalarySettings = {
  year: number;
  degree: Degree;
};

export default function Calculator({
  localeRes,
  initialSalary,
}: CalculatorProps) {
  const locale = use(localeRes);
  const [year, setYear] = useState(2024);
  const [degree, setDegree] = useState<Degree>("bachelor");
  const [salary, setSalary] = useState(initialSalary);

  if (!locale) {
    console.error(
      "[CompensationCalculator]: Sanity data not found. Not rendering CompensationCalculator.",
    );
    return null;
  }

  useEffect(() => {
    async function fetchSalary() {
      const salaryByYear = await getSalaryByYear(year);
      console.log(salaryByYear);

      setSalary(salaryByYear.ok ? salaryByYear.value : initialSalary);
    }

    fetchSalary();
  }, [year, degree]);

  return (
    <div>
      <SalaryCalculator
        examinationYearValue={year}
        minExaminationYear={1985}
        maxExaminationYear={2024}
        selectedDegree={degree}
        onDegreeChanged={setDegree}
        onExaminationYearChanged={setYear}
        action={async () => {
          const salaryByYear = await getSalaryByYear(2024);

          console.log(salaryByYear);
        }}
      />

      {salary !== null ? (
        <div aria-live="polite">
          <Text>Din årslønn</Text>
          <Text>
            {salary}
            {/* {formatAsCurrency(salary, locale.locale, locale.currency)} */}
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
