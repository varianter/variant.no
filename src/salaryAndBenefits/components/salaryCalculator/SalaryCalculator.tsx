import styles from "./salaryCalculator.module.css";
import InputField from "src/components/forms/inputField/InputField";
import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import Button from "src/components/buttons/Button";

export type Degree = "bachelor" | "master";

const degreeOptions: IOption[] = [
  {
    id: "bachelor",
    label: "Bachelor",
    currentSelected: true,
    disabled: false,
  },
  { id: "master", label: "Master", currentSelected: false, disabled: false },
];

interface SalaryCalculatorProps {
  examinationYear: number;
  minExaminationYear: number;
  maxExaminationYear: number;
  onDegreeChanged: (degree: Degree) => void;
  onExaminationYearChanged: (examinationYear: number) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export default function SalaryCalculator({
  examinationYear,
  minExaminationYear,
  maxExaminationYear,
  onDegreeChanged,
  onExaminationYearChanged,
  onSubmit,
}: SalaryCalculatorProps) {
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
        onValueChange={(value) =>
          (value.id === "bachelor" || value.id === "master") &&
          onDegreeChanged(value.id)
        }
      />
      <InputField
        label="year"
        name="examinationYear"
        type="number"
        max={maxExaminationYear}
        min={minExaminationYear}
        value={examinationYear}
        onChange={(_name, value) => onExaminationYearChanged(parseInt(value))}
        required
      />
      <Button type="secondary" size="small">
        Submit
      </Button>
    </form>
  );
}
