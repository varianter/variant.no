import React from 'react';
import styles from "./radioButton.module.css";
import { RadioButton } from './RadioButton';

interface IOption {
    id: string;
    label: string;
    disabled: boolean;
}

interface RadioButtonGroupProps {
    id: string;
    label: string;
    options: IOption[];
    selectedValue: string;
    onValueChange: (name: string, value: string) => void;
}
export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
    id,
    label, 
    options,
    selectedValue, 
    onValueChange
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(e.target.name, e.target.value);
    };

    return (
        <fieldset className={styles.fieldset} id={id}>
            <legend className={styles.legend}>{label}</legend>
            <div className={styles.wrapper}> 
            {options.map(({ id, label, disabled }, index) => (
                <RadioButton
                    key={id}
                    id={id}
                    label={label}
                    name="radio"
                    disabled={disabled}
                    value={label}
                    checked={selectedValue === label}
                    defaultChecked={index === 0}
                    onChange={handleChange}
                />
            ))}
            </div> 
        </fieldset>  
    );
};