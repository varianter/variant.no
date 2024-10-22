import styles from "./text.module.css";

export type TextType =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "bodySuperLarge"
  | "bodyLarge"
  | "body"
  | "small"
  | "caption";

const elementMap: { [key in TextType]: keyof JSX.IntrinsicElements } = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodySuperLarge: "p",
  bodyLarge: "p",
  body: "p",
  small: "p",
  caption: "p",
};

const classMap: { [key in TextType]?: string } = {
  display: styles.display,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  bodySuperLarge: styles.bodySuperLarge,
  bodyLarge: styles.bodyLarge,
  body: styles.body,
  small: styles.small,
  caption: styles.caption,
};

const Text = ({
  type = "body",
  children,
  id,
  className,
}: {
  type?: TextType;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  const Element = elementMap[type];
  const generatedClassName = `${classMap[type]} ${className ?? ""}`;

  return (
    <Element className={generatedClassName} id={id}>
      {children}
    </Element>
  );
};

export default Text;
