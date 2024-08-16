"use client";

import React from 'react';
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