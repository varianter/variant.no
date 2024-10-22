import styles from "./text.module.css";

export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "desktopLink"
  | "labelSmall"
  | "labelLight"
  | "labelRegular"
  | "labelSemibold"
  | "labelBold"
  | "quoteItalic"
  | "quoteNormal"
  | "bodyExtraSmall"
  | "bodySmall"
  | "bodyNormal"
  | "bodySmall"
  | "bodyBig"
  | "bodyXl"
  | "mobileH1"
  | "mobileBodyNormal";

const elementMap: { [key in TextType]: string } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  h7: "h7",
  desktopLink: "p",
  labelSmall: "p",
  labelLight: "p",
  labelRegular: "p",
  labelSemibold: "p",
  labelBold: "p",
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
  h7: styles.h7,
  desktopLink: styles.desktopLink,
  labelSmall: styles.labelSmall,
  labelLight: styles.labelLight,
  labelRegular: styles.labelRegular,
  labelSemibold: styles.labelSemibold,
  labelBold: styles.labelBold,
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
}: {
  type?: TextType;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  const Element = elementMap[type] as keyof JSX.IntrinsicElements;
  const generatedClassName = `${classMap[type]} ${className ? className : ""}`;

  return (
    <Element className={generatedClassName} id={id}>
      {children}
    </Element>
  );
};

export default Text;
