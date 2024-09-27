import React from "react";

import { getHref } from "src/utils/get";
import { ILink } from "studio/lib/interfaces/navigation";

import styles from "./linkButton.module.css";

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
  const linkTitle = link.linkTitle;
  // TODO: pick title based on selected language
  const linkTitleValue =
    typeof linkTitle === "string" ? linkTitle : linkTitle[0].value;
  return (
    href &&
    linkTitleValue && (
      <a className={className} href={href}>
        {linkTitleValue}
      </a>
    )
  );
};

export default LinkButton;
