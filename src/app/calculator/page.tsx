"use client"; 

import React, { useState } from 'react';
import { RadioButtonGroup } from 'src/components/buttons/RadioButton/RadioButtonGroup';

const options = [
    { id: 'radio-one', label: 'Bachelor', disabled: false },
    { id: 'radio-two', label: 'Master', disabled: true },
    { id: 'radio-three', label: 'PhD', disabled: false }
];

const Page: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>(options[0].label);

    const handleValueChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <div>
            <RadioButtonGroup
                label="Radio Button Group"
                id="radio-group"
                options={options}
                selectedValue={selectedValue}
                onValueChange={handleValueChange}
            />
        </div>
    );
};

export default Page;