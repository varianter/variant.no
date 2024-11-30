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

type TagProps = {
  active?: boolean;
  background?: "light" | "dark";
  text: string;
} & TagInner;

export const Tag = ({
  text,
  background = "light",
  active = false,
  ...props
}: TagProps) => {
  const activeClass = active ? styles["tag--active"] : "";
  const bgDarkClass = background === "dark" ? styles["tag--bgDark"] : "";
  const className = `${styles.tag} ${activeClass} ${bgDarkClass}`;
  if (props.type === "button") {
    return (
      <button className={className} onClick={props.onClick}>
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
