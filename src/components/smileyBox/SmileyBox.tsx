import Text from "src/components/text/Text";

import styles from "./smileyBox.module.css";

type SmileyBoxProps = {
  background?: "dark" | "light";
  description: string;
};

export default function SmileyBox({ description }: SmileyBoxProps) {
  return (
    description && (
      <div className={styles.wrapper}>
        <div className={styles.smiley} />
        <Text type={"h3"}>{description}</Text>
      </div>
    )
  );
}
