import Link from "next/link";
import React from "react";

import { getHref } from "src/utils/link";
import { ILink } from "studio/lib/interfaces/navigation";

import styles from "./link.module.css";

type ComponentLinkType =
  | "link"
  | "headerLink"
  | "footerLink"
  | "footerLinkNew"
  | "footerLinkGrey";

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

  switch (type) {
    case "link":
      return (
        link.linkTitle && (
          <div
            className={
              styles.wrapper +
              (size === "small" ? ` ${styles.sizeSmall}` : "") +
              (color === "light" ? ` ${styles.colorLight}` : "")
            }
          >
            <Link
              className={
                link.linkType == "internal"
                  ? styles.internalLink
                  : styles.externalLink
              }
              href={href}
              target={target}
              rel={rel}
              aria-label={link.ariaLabel}
            >
              <span className={styles.span}>{link.linkTitle}</span>
            </Link>
          </div>
        )
      );
    case "headerLink":
      return (
        link.linkTitle && (
          <Link
            className={`${styles.headerLink} ${isSelected ? styles.selected : ""}`}
            href={href}
            target={target}
            rel={rel}
            aria-label={link.ariaLabel}
          >
            <span className={styles.dot}></span>
            {link.linkTitle}
          </Link>
        )
      );
    case "footerLink":
      return (
        link.linkTitle && (
          <Link
            className={styles.footerLink}
            href={href}
            target={target}
            rel={rel}
            aria-label={link.ariaLabel}
          >
            {link.linkTitle}
          </Link>
        )
      );
    case "footerLinkGrey":
      return (
        link.linkTitle && (
          <Link
            className={styles.footerLinkGrey}
            href={href}
            target={target}
            rel={rel}
            aria-label={link.ariaLabel}
          >
            {link.linkTitle}
          </Link>
        )
      );
  }
};

export default CustomLink;
