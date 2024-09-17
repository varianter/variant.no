import Link from "next/link";
import React from "react";

import { getHref } from "src/utils/get";
import { ILink } from "studio/lib/interfaces/navigation";

import styles from "./link.module.css";

type ComponentLinkType = "link" | "headerLink" | "footerLink";

interface ICustomLink {
  type?: ComponentLinkType;
  link: ILink;
  isSelected?: boolean;
}

const CustomLink = ({ type = "link", link, isSelected }: ICustomLink) => {
  const linkTitle = link.linkTitle;
  const href = getHref(link);
  const newTab = link.newTab;
  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : undefined;
  const className =
    type === "headerLink"
      ? `${styles.headerLink} ${isSelected ? styles.selected : ""}`
      : styles.footerLink;

  return type === "link" ? (
    <div className={styles.wrapper}>
      <Link
        className={styles.link}
        href={href}
        target={target}
        rel={rel}
        aria-label={link.ariaLabel}
      >
        <span className={styles.span}>{linkTitle}</span>
      </Link>
      <div className={styles.underline}></div>
    </div>
  ) : (
    <Link
      className={className}
      href={href}
      target={target}
      rel={rel}
      aria-label={link.ariaLabel}
    >
      {linkTitle}
    </Link>
  );
};

export default CustomLink;
