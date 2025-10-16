import Link from "next/link";
import type { JSX } from "react";

import Text, { TextColor } from "src/components/text/Text";

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

export function tagComponentTextColor(
  active: boolean,
  background: string,
): TextColor {
  // Active state
  if (active) {
    switch (background) {
      case "dark":
        // Match css: .tag--active.tag--bgDark: text-primary (dark)
        return "dark";
      case "violet":
        // Match css: .tag--active.tag--bgViolet: text-primary (dark)
        return "dark";
      default:
        // .tag--active: text-primary-light (light)
        return "light";
    }
  }

  // Inactive state
  switch (background) {
    case "dark":
      // Match css: .tag--bgDark: text-primary-light (light)
      return "light";
    case "violet":
      // Match css: .tag--bgViolet: text-primary-light (light)
      return "light";
    default:
      // Match css: .tag: text-primary (dark)
      return "dark";
  }
}

export const Tag = ({
  text,
  background = "light",
  active = false,
  ...props
}: TagProps) => {
  const className = tagComponentStyle(active, background);
  const textColor = tagComponentTextColor(active, background);

  if (props.type === "button") {
    return (
      <button
        className={className}
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
        {...props}
      >
        <Text type="label" color={textColor}>
          {text}
        </Text>
      </button>
    );
  }

  return (
    <Link className={className} href={props.href}>
      <Text type="label" color={textColor}>
        {text}
      </Text>
    </Link>
  );
};
