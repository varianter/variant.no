import React from "react";
import styles from "src/components/forms/radioButtonGroup/radioButtonGroup.module.css";
import { RadioButton } from "./components/RadioButton";
import textStyles from "src/components/text/text.module.css";

export interface IOption {
  id: string;
  label: string;
  disabled?: boolean;
}

interface RadioButtonGroupProps {
  id: string;
  label: string;
  options: IOption[];
  selectedId: string;
  onValueChange: (option: IOption) => void;
}

export const RadioButtonGroup = ({
  id,
  label,
  options,
  selectedId,
  onValueChange,
}: RadioButtonGroupProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = options.find(
      (option) => option.id === e.target.value,
    );
    if (selectedOption) {
      onValueChange(selectedOption);
    }
  };

  return (
    <fieldset className={styles.fieldset} id={id}>
      <legend className={textStyles.h3}>{label}</legend>
      <div className={styles.wrapper}>
        {options.map(({ id, label, disabled }) => (
          <RadioButton
            key={id}
            id={id}
            label={label}
            name="radio"
            disabled={disabled}
            value={id}
            checked={id === selectedId}
            onChange={onChange}
          />
        ))}
      </div>
    </fieldset>
  );
};
