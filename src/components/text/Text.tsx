import styles from "./text.module.css";

export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "desktopLink"
  | "desktopLinkBig"
  | "labelSmall"
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
  | "mobileBodyNormal";

const elementMap: { [key in TextType]: keyof JSX.IntrinsicElements } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  desktopLink: "p",
  desktopLinkBig: "p",
  labelSmall: "span",
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
};

const classMap: { [key in TextType]?: string } = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  desktopLink: styles.desktopLink,
  desktopLinkBig: styles.desktopLinkBig,
  labelSmall: styles.labelSmall,
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
