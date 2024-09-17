import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";

import Text from "src/components/text/Text";
import textStyles from "src/components/text/text.module.css";

import styles from "./inputField.module.css";

interface InputFieldProps {
  label: string;
  name: string;
  error?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  autoCorrect?: string;
  type?: HTMLInputTypeAttribute;
  max?: number;
  min?: number;
  spellCheck?: "true" | "false";
  autoCapitalize?: string;
  value: string | number;
  onChange: (name: string, value: string) => void;
  required?: boolean;
}

const InputField = ({
  label,
  name,
  error,
  autoComplete,
  autoCorrect = "off",
  type = "text",
  max,
  min,
  spellCheck,
  autoCapitalize,
  value,
  onChange,
  required,
}: InputFieldProps) => {
  if (type == "email") {
    autoCapitalize = "off";
    autoCorrect = "off";
    spellCheck = "false";
    type = "text"; // to use custom validation we're setting type to 'text' in order to avoid default tooltip validations
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  const labelText = `${label} ${!required ? "(Optional)" : ""}`;
  const hintID = `${name}-hint`;

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={`${textStyles.caption} ${styles.label}`}>
        {labelText}
      </label>
      <input
        id={name}
        name={name}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        type={type}
        max={type === "number" ? max : undefined}
        min={type === "number" ? min : undefined}
        className={styles.input}
        spellCheck={spellCheck}
        value={value}
        onChange={handleChange}
        aria-describedby={hintID}
        aria-required={required}
      />
      {error && (
        <span>
          <Text
            type="small"
            className={styles.error}
            id={hintID}
            aria-live="assertive"
          >
            {error}
          </Text>
        </span>
      )}
    </div>
  );
};

export default InputField;
