import styles from "./salaryCalculator.module.css";
import InputField from "src/components/forms/inputField/InputField";
import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import Button from "src/components/buttons/Button";
import { maxExperience } from "src/salaryAndBenefits/utils/calculateSalary";

export type Degree = "bachelor" | "master";

const degreeOptions: IOption[] = [
  { id: "bachelor", label: "Bachelor" },
  { id: "master", label: "Master" },
];

interface SalaryCalculatorProps {
  examinationYearValue: number;
  selectedDegree: Degree;
  onDegreeChanged: (degree: Degree) => void;
  onExaminationYearChanged: (examinationYear: number) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export default function SalaryCalculator({
  examinationYearValue: yearValue,
  selectedDegree,
  onDegreeChanged,
  onExaminationYearChanged,
  onSubmit,
}: SalaryCalculatorProps) {
  const currentYear = new Date().getFullYear();
  const minExaminationYear = maxExperience(currentYear);
  const maxExaminationYear = currentYear - 1;

  return (
    <form
      aria-label="salary calculator"
      className={styles.calculator}
      onSubmit={onSubmit}
    >
      <RadioButtonGroup
        id="degree-group"
        label="Choose your degree"
        options={degreeOptions}
        selectedId={selectedDegree}
        onValueChange={(selectedOption) =>
          onDegreeChanged(selectedOption.id as Degree)
        }
      />
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
      <Button type="secondary" size="small">
        Submit
      </Button>
    </form>
  );
}
