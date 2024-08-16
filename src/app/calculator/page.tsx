"use client";

import React from 'react';
import { RadioButtonGroup } from 'src/components/buttons/RadioButton/RadioButtonGroup';


const options = [
    { id: 'radio-one', label: 'Bachelor', disabled: false },
    { id: 'radio-two', label: 'Master', disabled: true },
    { id: 'radio-three', label: 'PhD', disabled: false }
];

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
};

const Page: React.FC = () => {
    return (
        <div>
            <RadioButtonGroup
                label="Radio Button Group"
                id="radio-group"
                options={options}
                onChange={handleChange}
            />
        </div>
    );
};

export default Page;