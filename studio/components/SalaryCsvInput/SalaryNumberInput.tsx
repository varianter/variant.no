import { HTMLProps, useState, ChangeEvent } from "react";
import { VALID_SALARY_REGEX } from "./salariesParseUtils";

type SalaryNumberInputProps = Omit<
  HTMLProps<HTMLInputElement>,
  "value" | "onChange"
> & {
  value: number;
  onChange: (value: number) => void;
};

export default function SalaryNumberInput({
  value,
  onChange,
  ...props
}: SalaryNumberInputProps) {
  const [rawValue, setRawValue] = useState<string>(value.toString());

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const newRawValue = e.target.value;
    setRawValue(newRawValue);
    if (VALID_SALARY_REGEX.test(newRawValue)) {
      onChange(Number(newRawValue));
    }
  }

  return (
    <input
      type="number"
      value={rawValue}
      onChange={handleInputChange}
      {...props}
    />
  );
}
