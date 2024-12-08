import React from "react";

import styles from "src/components/forms/radioButtonGroup/radioButtonGroup.module.css";
import { tagComponentStyle } from "src/components/tag";
import Text from "src/components/text/Text";
import { cnIf } from "src/utils/css";

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
  background?: "light" | "dark" | "violet";

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioButtonGroupProps {
  id: string;
  label: string;
  options: IOption[];
  selectedId: string;
  onValueChange: (option: IOption) => void;
  background?: "light" | "dark" | "violet";
}

export const RadioButtonGroup = ({
  id,
  label,
  options,
  selectedId,
  onValueChange,
  background = "light",
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
      <legend className={styles.srOnly}>
        <Text type="labelRegular" as="span">
          {label}
        </Text>
      </legend>
      <Text type="labelRegular" aria-hidden>
        {label}
      </Text>

      {options.map(({ id, label, disabled }) => (
        <RadioButton
          key={id}
          id={id}
          label={label}
          name="radio"
          disabled={disabled}
          value={id}
          checked={id === selectedId}
          background={background}
          onChange={onChange}
        />
      ))}
    </fieldset>
  );
};

const RadioButton = ({
  id,
  name,
  value,
  label,
  checked = false,
  disabled,
  defaultChecked,
  onChange,
  background = "light",
}: RadioButtonProps) => {
  const className = cnIf({
    [tagComponentStyle(checked, background)]: true,
    [styles.inputLabelDisabled]: disabled ?? false,
    [styles.inputLabel]: true,
  });

  return (
    <label htmlFor={id} className={className}>
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
