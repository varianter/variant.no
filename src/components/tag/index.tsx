import Link from "next/link";

import Text from "src/components/text/Text";

import styles from "./tag.module.css";

type TagInner =
  | ({
      type: "button";
      onClick?: () => void;
    } & JSX.IntrinsicElements["button"])
  | ({
      type: "link";
      href: string;
    } & JSX.IntrinsicElements["link"]);

function getBackgroundClass(backgroundColor: string) {
  switch (backgroundColor) {
    case "light":
      return "";
    case "dark":
      return styles["tag--bgDark"];
    case "violet":
      return styles["tag--bgViolet"];
    default:
      return "";
  }
}

type TagProps = {
  active?: boolean;
  background?: "light" | "dark" | "violet";
  text: string;
} & TagInner;

export function tagComponentStyle(active: boolean, background: string) {
  const activeClass = active ? styles["tag--active"] : "";
  const bgClass = getBackgroundClass(background);
  const className = `${styles.tag} ${activeClass} ${bgClass}`;
  return className;
}

export const Tag = ({
  text,
  background = "light",
  active = false,
  ...props
}: TagProps) => {
  const className = tagComponentStyle(active, background);

  if (props.type === "button") {
    return (
      <button
        className={className}
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
        {...props}
      >
        <Text type="labelRegular">{text}</Text>
      </button>
    );
  }

  return (
    <Link className={className} href={props.href}>
      <Text type="labelRegular">{text}</Text>
    </Link>
  );
};
