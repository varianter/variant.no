import styles from "./text.module.css";

export type TextType =
  | "titleXL"
  | "titleL"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "desktopLink"
  | "label"
  | "labelLarge"
  | "quoteItalic"
  | "quoteNormal"
  | "bodyExtraSmall"
  | "description"
  | "bodyNormal"
  | "bodyBig"
  | "bodyXl"
  | "mobileH1"
  | "mobileBodyNormal"
  | "caption"
  | "italic";

const elementMap: { [key in TextType]: keyof JSX.IntrinsicElements } = {
  titleXL: "h1",
  titleL: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  desktopLink: "p",
  label: "span",
  labelLarge: "span",
  quoteItalic: "p",
  quoteNormal: "p",
  bodyExtraSmall: "p",
  description: "p",
  bodyNormal: "p",
  bodyBig: "p",
  bodyXl: "p",
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
  label: styles.label,
  labelLarge: styles.labelLarge,
  quoteItalic: styles.quoteItalic,
  quoteNormal: styles.quoteNormal,
  bodyExtraSmall: styles.bodyExtraSmall,
  description: styles.description,
  bodyNormal: styles.bodyNormal,
  bodyBig: styles.bodyBig,
  bodyXl: styles.bodyXl,
  mobileH1: styles.mobileH1,
  mobileBodyNormal: styles.mobileBodyNormal,
  caption: styles.caption,
  italic: styles.italic,
};

const Text = ({
  type = "bodyNormal",
  children,
  id,
  className,
  as: asElement,
}: {
  type?: TextType;
  children: React.ReactNode;
  id?: string;
  as?: React.ElementType;
  className?: string;
}) => {
  const Element = asElement ?? elementMap[type];
  const generatedClassName = `${classMap[type]} ${className ?? ""}`;

  return (
    <Element className={generatedClassName} id={id}>
      {children}
    </Element>
  );
};

export default Text;
