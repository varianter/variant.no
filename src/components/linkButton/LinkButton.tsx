import React from "react";
import styles from "./linkButton.module.css";
import { ILink } from "studio/lib/interfaces/navigation";
import { getHref } from "src/utils/get";

type LinkButtonType = "primary" | "secondary";

interface IButton {
  isSmall?: boolean;
  type?: LinkButtonType;
  link: ILink;
}

const typeClassMap: { [key in LinkButtonType]: string } = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const LinkButton = ({ isSmall, type = "primary", link }: IButton) => {
  const className = `${styles.button} ${isSmall ? styles.small : ""} ${typeClassMap[type]}`;
  const href = getHref(link);
  return (
    href && (
      <a className={className} href={href}>
        {link.linkTitle}
      </a>
    )
  );
};

export default LinkButton;
