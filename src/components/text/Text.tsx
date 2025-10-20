import type { JSX } from "react";

import styles from "./text.module.css";

export type TextType =
  | "titleXL"
  | "titleL"
  | "titleM"
  | "titleS"
  | "titleXS"
  | "h6"
  | "desktopLink"
  | "labelL"
  | "label"
  | "quoteItalic"
  | "quoteNormal"
  | "bodyExtraSmall"
  | "description"
  | "normal"
  | "lead"
  | "subtitle"
  | "mobileH1"
  | "mobileBodyNormal"
  | "caption"
  | "italic";

export type TextColor = "dark" | "light" | "tertiary" | "error";

const elementMap: { [key in TextType]: keyof JSX.IntrinsicElements } = {
  titleXL: "h1",
  titleL: "h2",
  titleM: "h3",
  titleS: "h4",
  titleXS: "h5",
  h6: "h6",
  desktopLink: "p",
  labelL: "span",
  label: "span",
  quoteItalic: "p",
  quoteNormal: "p",
  bodyExtraSmall: "p",
  description: "p",
  normal: "p",
  lead: "p",
  subtitle: "p",
  mobileH1: "h1",
  mobileBodyNormal: "p",
  caption: "span",
  italic: "p",
};

const classMap: { [key in TextType]?: string } = {
  titleXL: styles.titleXL,
  titleL: styles.titleL,
  titleM: styles.titleM,
  titleS: styles.titleS,
  titleXS: styles.titleXS,
  h6: styles.h6,
  desktopLink: styles.desktopLink,
  labelL: styles.labelL,
  label: styles.label,
  quoteItalic: styles.quoteItalic,
  quoteNormal: styles.quoteNormal,
  bodyExtraSmall: styles.bodyExtraSmall,
  description: styles.description,
  normal: styles.normal,
  lead: styles.lead,
  subtitle: styles.subtitle,
  mobileH1: styles.mobileH1,
  mobileBodyNormal: styles.mobileBodyNormal,
  caption: styles.caption,
  italic: styles.italic,
};

const colorMap: { [key in TextColor]: string } = {
  dark: styles.dark,
  light: styles.light,
  tertiary: styles.tertiary,
  error: styles.error,
};

const Text = ({
  type = "normal",
  children,
  id,
  as: asElement,
  color = "dark",
}: {
  type?: TextType;
  children: React.ReactNode;
  id?: string;
  as?: React.ElementType;
  color?: TextColor;
}) => {
  const Element = asElement ?? elementMap[type];
  const generatedClassName = `${classMap[type]} ${colorMap[color]}`;

  return (
    <Element className={generatedClassName} id={id}>
      {children}
    </Element>
  );
};

export default Text;
