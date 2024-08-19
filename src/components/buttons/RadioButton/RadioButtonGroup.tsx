import React from 'react';
import styles from "./radioButton.module.css";
import { RadioButton } from './RadioButton';

interface IOption {
    id: string;
    label: string;
    disabled: boolean;
}

interface RenderOptionsProps {
    options: IOption[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioButtonGroupProps {
    id: string;
    label: string;
    options: IOption[];
    selectedValue: string;
    onValueChange: (name: string, value: string) => void;
}

export const RenderOptions: React.FC<RenderOptionsProps> = ({ options, onChange }) => {
    return (
        <>
            {options.map(({ id, label, disabled }, index) => (
                <RadioButton
                    key={id}
                    id={id}
                    label={label}
                    name="radio"
                    disabled={disabled}
                    value={label}
                    defaultChecked={index === 0}
                    onChange={onChange}
                />
            ))}
        </>
    );
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
    id,
    label, 
    options,
    onValueChange
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(e.target.name, e.target.value);
    };

    return (
        <fieldset className={styles.fieldset} id={id}>
            <legend className={styles.legend}>{label}</legend>
            <div className={styles.wrapper}> 
                <RenderOptions options={options} onChange={handleChange} />
            </div> 
        </fieldset>  
    );
};