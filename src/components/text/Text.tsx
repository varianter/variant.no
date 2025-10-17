import type { JSX } from "react";

import styles from "./text.module.css";

export type TextType =
  | "titleXL"
  | "titleL"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "desktopLink"
  | "labelL"
  | "label"
  | "quoteItalic"
  | "quoteNormal"
  | "bodyExtraSmall"
  | "description"
  | "bodyNormal"
  | "bodyBig"
  | "subtitle"
  | "mobileH1"
  | "mobileBodyNormal"
  | "caption"
  | "italic";

export type TextColor = "dark" | "light" | "tertiary" | "error";

const elementMap: { [key in TextType]: keyof JSX.IntrinsicElements } = {
  titleXL: "h1",
  titleL: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  desktopLink: "p",
  labelL: "span",
  label: "span",
  quoteItalic: "p",
  quoteNormal: "p",
  bodyExtraSmall: "p",
  description: "p",
  bodyNormal: "p",
  bodyBig: "p",
  subtitle: "p",
  mobileH1: "h1",
  mobileBodyNormal: "p",
  caption: "span",
  italic: "p",
};

const classMap: { [key in TextType]?: string } = {
  titleXL: styles.titleXL,
  titleL: styles.titleL,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  desktopLink: styles.desktopLink,
  labelL: styles.labelL,
  label: styles.label,
  quoteItalic: styles.quoteItalic,
  quoteNormal: styles.quoteNormal,
  bodyExtraSmall: styles.bodyExtraSmall,
  description: styles.description,
  bodyNormal: styles.bodyNormal,
  bodyBig: styles.bodyBig,
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
  type = "bodyNormal",
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
