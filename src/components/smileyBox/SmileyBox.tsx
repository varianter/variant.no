import { CSSProperties } from "react";

import Smiley, { SmileyAlign, SmileyType } from "src/components/smiley/Smiley";
import Text from "src/components/text/Text";

import styles from "./smileyBox.module.css";

const backgroundColors = {
  green: "#dafbdc",
  purple: "#f0ebfe",
  blue: "#f2f3fd",
} as const;

type SmileyBoxProps = {
  backgroundColor?: keyof typeof backgroundColors;
  smileyType?: SmileyType;
  smileySide?: SmileyAlign;
  description: string;
};

export default function SmileyBox({
  backgroundColor,
  smileySide,
  smileyType,
  description,
}: SmileyBoxProps) {
  const cssVariables = {
    "--smiley-background-color": backgroundColors[backgroundColor ?? "green"],
  } as CSSProperties;

  return (
    <div className={styles.wrapper} style={cssVariables}>
      <Smiley smileySide={smileySide} smileyType={smileyType} />
      <div className={styles.description}>
        <Text type={"titleM"}>{description}</Text>
      </div>
    </div>
  );
}
