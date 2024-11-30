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
  text: string;
} & TagInner;

export const Tag = ({ text, active = false, ...props }: TagProps) => {
  const className = `${styles.tag} ${active ? styles["tag--active"] : ""}`;
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
