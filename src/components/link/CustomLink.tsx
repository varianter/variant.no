import Link from "next/link";
import React from "react";

import { getHref } from "src/utils/link";
import { ILink } from "studio/lib/interfaces/navigation";

import styles from "./link.module.css";

type ComponentLinkType = "link" | "headerLink" | "footerLink";

interface ICustomLink {
  type?: ComponentLinkType;
  link: ILink;
  isSelected?: boolean;
  size?: "normal" | "small";
  color?: "dark" | "light";
}

const CustomLink = ({
  type = "link",
  link,
  isSelected,
  size = "normal",
  color = "dark",
}: ICustomLink) => {
  const href = getHref(link);
  const newTab = link.newTab;
  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : undefined;
  const className =
    type === "headerLink"
      ? `${styles.headerLink} ${isSelected ? styles.selected : ""}`
      : styles.footerLink;

  return (
    link.linkTitle &&
    (type === "link" ? (
      <div
        className={
          styles.wrapper +
          (size === "small" ? ` ${styles.sizeSmall}` : "") +
          (color === "light" ? ` ${styles.colorLight}` : "")
        }
      >
        <Link
          className={styles.link}
          href={href}
          target={target}
          rel={rel}
          aria-label={link.ariaLabel}
        >
          <span className={styles.span}>{link.linkTitle}</span>
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
        {link.linkTitle}
      </Link>
    ))
  );
};

export default CustomLink;
