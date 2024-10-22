import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

import Text from "src/components/text/Text";
import textStyles from "src/components/text/text.module.css";

import styles from "./checkbox.module.css";

interface CheckboxProps {
  label: string | PortableTextBlock[];
  name: string;
  error?: string;
  value: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  label,
  name,
  error,
  value,
  required,
  onChange,
}: CheckboxProps) => {
  const hintID = `${name}-hint`;

  return (
    <>
      <label
        className={`${styles.container} ${textStyles.caption} ${styles.label}`}
        htmlFor={name}
      >
        <input
          id={name}
          name={name}
          type="checkbox"
          className={styles.input}
          checked={value}
          aria-describedby={hintID}
          aria-required={required}
          onChange={onChange}
        />
        <span className={styles.checkbox} />
        {typeof label === "string" ? label : <PortableText value={label} />}
      </label>
      {error && (
        <span>
          <Text
            type="bodySmall"
            className={styles.error}
            id={hintID}
            aria-live="assertive"
          >
            {error}
          </Text>
        </span>
      )}
    </>
  );
};

export default Checkbox;
