import { CSSProperties } from "react";

import Text from "src/components/text/Text";

import styles from "./smileyBox.module.css";

const smileys = {
  shock: {
    url: "url(/_assets/smiley-face-shock.svg)",
    height: "4.1875rem",
    width: "4.1875rem",
  },
  happy: {
    url: "url(/_assets/smiley-face-happy.svg)",
    width: "4.86119rem",
    height: "4.86119rem",
  },
  smug: {
    url: "url(/_assets/smiley-face-smug.svg)",
    width: "4.375rem",
    height: "4.375rem",
  },
} as const;

const backgroundColors = {
  green: "#dafbdc",
  purple: "#f0ebfe",
  blue: "#f2f3fd",
} as const;

type SmileyBoxProps = {
  background?: "dark" | "light";
  backgroundColor?: keyof typeof backgroundColors;
  smileyType?: keyof typeof smileys;
  smileySide?: "left" | "right";
  description: string;
};

export default function SmileyBox({
  description,
  backgroundColor,
  smileySide,
  smileyType,
}: SmileyBoxProps) {
  const smiley = smileys[smileyType ?? "happy"];
  const cssVariables = {
    "--smiley-url": smiley.url,
    "--smiley-width": smiley.width,
    "--smiley-height": smiley.height,
    "--smiley-background-color": backgroundColors[backgroundColor ?? "green"],
    "--smiley-align":
      (smileySide ?? "left") === "left" ? "flex-start" : "flex-end",
  } as CSSProperties;

  return (
    <div className={styles.wrapper} style={cssVariables}>
      <div className={styles.smiley} />
      <div className={styles.description}>
        <Text type={"h3"}>{description}</Text>
      </div>
    </div>
  );
}
