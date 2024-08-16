"use client";

import React from "react";
import styles from "./radioButton.module.css";

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

export const RadioButton: React.FC<RadioButtonProps> = ({
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
    <div
      className={`${styles.main}`}
    >   
    <input
        className={`${styles.input}`}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={onChange}
      /> 
      <label htmlFor={id} className={`${styles.label} ${disabled? styles.disabledLabel : styles.label}`}>
       {label}
      </label>
    </div >
  );
};