import styles from "./text.module.css";

export type TextType =
  | "titleXL"
  | "titleL"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "desktopLink"
  | "labelRegular"
  | "labelLarge"
  | "quoteItalic"
  | "quoteNormal"
  | "bodyExtraSmall"
  | "bodySmall"
  | "bodyNormal"
  | "bodyBig"
  | "bodyXl"
  | "mobileH1"
  | "mobileBodyNormal"
  | "imageLabel"
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
  labelRegular: "span",
  labelLarge: "span",
  quoteItalic: "p",
  quoteNormal: "p",
  bodyExtraSmall: "p",
  bodySmall: "p",
  bodyNormal: "p",
  bodyBig: "p",
  bodyXl: "p",
  mobileH1: "h1",
  mobileBodyNormal: "p",
  imageLabel: "span",
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
  labelRegular: styles.labelRegular,
  labelLarge: styles.labelLarge,
  quoteItalic: styles.quoteItalic,
  quoteNormal: styles.quoteNormal,
  bodyExtraSmall: styles.bodyExtraSmall,
  bodySmall: styles.bodySmall,
  bodyNormal: styles.bodyNormal,
  bodyBig: styles.bodyBig,
  bodyXl: styles.bodyXl,
  mobileH1: styles.mobileH1,
  mobileBodyNormal: styles.mobileBodyNormal,
  imageLabel: styles.imageLabel,
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
