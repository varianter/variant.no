import React from 'react';
import styles from 'src/components/forms/radioButtonGroup/radioButtonGroup.module.css';
import textStyles from "src/components/text/text.module.css";

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

export const RadioButton = ({
  id,
  name,
  value,
  label,
  checked,
  disabled,
  defaultChecked,
  onChange,
 }: RadioButtonProps
  id,
  name,
  value,
  label,
  checked,
  disabled,
  defaultChecked,
  onChange,
}) => {
  return (
    <> 
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
        aria-disabled={disabled ? 'true' : 'false'}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
     
        {label}
      </label>
    </>
  );
};
