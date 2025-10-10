import Text from "src/components/text/Text";

import styles from "./textTertiary.module.css";

interface IText {
  children: React.ReactNode;
}

export const TextTertiary = ({ children }: IText) => {
  return (
    <Text type="description" className={styles.text_tertiary}>
      {children}
    </Text>
  );
};
