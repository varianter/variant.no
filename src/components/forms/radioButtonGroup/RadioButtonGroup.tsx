import React from 'react';
import styles from 'src/components/forms/radioButtonGroup/radioButtonGroup.module.css';
import { RadioButton } from './components/RadioButton';
import textStyles from "src/components/text/text.module.css";

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
    onValueChange: (name: string, value: string) => void;
}

/**
 * Important Note on RadioButtons:
 * 
 * - The `RadioButton` component, defined in this code, should not be used in isolation. 
 *   Radio buttons are designed to be part of a group where only one option can be selected at a time.
 * 
 * - When used individually, a radio button loses its intended functionality of providing mutually exclusive choices 
 *   and may confuse users or lead to unexpected behavior. 
 * 
 * - Instead, radio buttons should always be used within a group, typically managed by a parent component 
 *   such as `RadioButtonGroup`, which ensures that only one radio button in the group can be selected at any given time.
 * 
 * - The parent component should handle the state management and changes, ensuring that the user can only select 
 *   one option from the group and that this selection is properly communicated back to the application.
 * 
 * - Example of usage within a group:
 * 
 * ```
 * const options = [
 *   { id: 'radio1', name: 'group1', label: 'Option 1', value: '1' },
 *   { id: 'radio2', name: 'group1', label: 'Option 2', value: '2' },
 * ];
 * 
 * <RadioButtonGroup
 *   id="example-group"
 *   label="Choose an option"
 *   options={options}
 *   onValueChange={(name, value) => console.log(`Selected ${name}: ${value}`)}
 * />
 * ```
 * - In this example, the `RadioButtonGroup` component renders multiple `RadioButton` components 
 *   as part of a cohesive group, enabling proper radio button functionality.
 */

export const RadioButtonGroup = ({
    id,
    label, 
    options,
    onValueChange}: 
    RadioButtonGroupProps)
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
            <legend className={textStyles.h3}>{label}</legend>
            <div className={styles.wrapper}> 
                <RenderOptions options={options} onChange={handleChange} />
            </div> 
        </fieldset>  
    );
};

const RenderOptions  = ({ options, onChange }: RenderOptionsProps) => {
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
                    defaultChecked={currentValue}
                    onChange={onChange}
                />
            ))}
        </>
    );
};