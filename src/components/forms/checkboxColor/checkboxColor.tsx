import { PortableText } from "@portabletext/react";

import Text from "src/components/text/Text";
import textStyles from "src/components/text/text.module.css";
import { CheckboxProps } from "studio/lib/interfaces/forms/checkbox";

import styles from "./checkboxColor.module.css";

const CheckboxColor = ({
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
            type="bodyNormal"
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

export default CheckboxColor;
