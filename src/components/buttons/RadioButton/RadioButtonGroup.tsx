"use client";

import React from 'react';
import styles from "./radioButton.module.css";
import { RenderOptions } from './RenderOptions';

interface IOption {
    id: string;
    label: string;
    disabled: boolean;
}

interface RadioButtonGroupProps {
    id: string;
    label: string;
    options: IOption[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
    id,
    label, 
    options,
    onChange
}) => {
    return (
        <fieldset className={styles.fieldset} id={id}>
            <legend className={styles.legend}>{label}</legend>
            <div className={styles.wrapper}> 
            <RenderOptions options={options} onChange={onChange} />
                {/* <RadioButton key="radio-one" label="Bachelor" id="radio-one" name="radio" disabled={false}/> 
                <RadioButton key="radio-two" label="Master" id="radio-two" name="radio" disabled={false}/>  */}
            </div>
        </fieldset>  
    );
};