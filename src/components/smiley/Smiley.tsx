import { CSSProperties } from "react";

import styles from "./smiley.module.css";

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

export type SmileyType = keyof typeof smileys;
export type SmileyAlign = "left" | "right";

export type SmileyBoxProps = {
  smileyType?: SmileyType;
  smileySide?: SmileyAlign;
};

export default function Smiley({ smileySide, smileyType }: SmileyBoxProps) {
  const smiley = smileys[smileyType ?? "happy"];
  const cssVariables = {
    "--smiley-url": smiley.url,
    "--smiley-width": smiley.width,
    "--smiley-height": smiley.height,
    "--smiley-align":
      (smileySide ?? "left") === "left" ? "flex-start" : "flex-end",
  } as CSSProperties;

  return <div style={cssVariables} className={styles.smiley} />;
}
