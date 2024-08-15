import Text from "src/components/text/Text";
import styles from "./inputField.module.css";
import textStyles from "src/components/text/text.module.css";
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  error?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  autoCorrect?: string;
  type?: HTMLInputTypeAttribute;
  spellCheck?: "true" | "false";
  autoCapitalize?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
  min?: number;
  max?: number;
}

const InputField = ({
  label,
  name,
  error,
  autoComplete,
  autoCorrect = "off",
  type = "text",
  spellCheck,
  autoCapitalize,
  value,
  onChange,
  required,
  min,
  max,
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
        className={styles.input}
        spellCheck={spellCheck}
        value={value}
        onChange={handleChange}
        aria-describedby={hintID}
        aria-required={required}
        min={min}
        max={max}
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
