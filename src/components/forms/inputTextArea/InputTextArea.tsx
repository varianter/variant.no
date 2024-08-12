import Text from "src/components/text/Text";
import styles from "./inputTextArea.module.css";
import textStyles from "src/components/text/text.module.css";

interface InputTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  required?: boolean;
}

const InputTextArea = ({
  label,
  name,
  value,
  onChange,
  error,
  required,
}: InputTextAreaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };

  const labelText = `${label} ${!required ? "(Optional)" : ""}`;
  const hintID = `${name}-hint`;

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={`${textStyles.caption} ${styles.label}`}>
        {labelText}
      </label>
      <textarea
        id={name}
        name={name}
        className={styles.textarea}
        value={value}
        onChange={handleChange}
        autoCapitalize="true"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="true"
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

export default InputTextArea;
