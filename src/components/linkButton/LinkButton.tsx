import Link from "next/link";

import { getHref } from "src/utils/link";
import { ILink } from "studio/lib/interfaces/navigation";

import styles from "./linkButton.module.css";

type LinkButtonType = "primary" | "secondary";

interface IButton {
  isSmall?: boolean;
  type?: LinkButtonType;
  link: ILink;
  background?: "dark" | "light";
}

const typeClassMap = (
  background: IButton["background"],
): {
  [key in LinkButtonType]: string;
} => ({
  primary:
    background === "dark"
      ? `${styles.primary} ${styles["primary--darkBg"]}`
      : styles.primary,
  secondary:
    background === "dark"
      ? `${styles.secondary} ${styles["secondary--darkBg"]}`
      : styles.secondary,
});

const LinkButton = ({
  isSmall,
  type = "primary",
  link,
  background,
}: IButton) => {
  const classMap = typeClassMap(background);
  const className = `${styles.button} ${isSmall ? styles.small : ""} ${classMap[type]}`;
  const href = getHref(link);
  const linkTitleValue = link.linkTitle;
  return (
    href &&
    linkTitleValue && (
      <Link className={className} href={href}>
        {linkTitleValue}
      </Link>
    )
  );
};

export default LinkButton;
