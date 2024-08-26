import React from "react";
import styles from "src/components/forms/radioButtonGroup/radioButtonGroup.module.css";
import textStyles from "src/components/text/text.module.css";

export interface IOption {
  id: string;
  label: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

const RadioButton = ({
  id,
  name,
  value,
  label,
  checked,
  disabled,
  defaultChecked,
  onChange,
}: RadioButtonProps) => {
  return (
    <label
      htmlFor={id}
      className={`${styles.container} ${textStyles.caption} ${disabled ? styles.disabledLabel : styles.label}`}
    >
      <input
        className={styles.input}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        aria-disabled={disabled ? "true" : "false"}
        defaultChecked={defaultChecked}
        onChange={onChange}
        aria-label={label}
      />

      {label}
    </label>
  );
};
