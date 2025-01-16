import Link from "next/link";
import React from "react";

import { getLinkAttributes } from "src/utils/link";
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
  scroll?: boolean;
}

const CustomLink = ({
  type = "link",
  link,
  isSelected,
  size = "normal",
  color = "dark",
  scroll,
}: ICustomLink) => {
  const attributes = getLinkAttributes(link);

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
              {...attributes}
              className={
                link.linkType == "internal"
                  ? styles.internalLink
                  : styles.externalLink
              }
              aria-label={link.ariaLabel}
              scroll={scroll}
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
            {...attributes}
            className={`${styles.headerLink} ${isSelected ? styles.selected : ""}`}
            aria-label={link.ariaLabel}
            scroll={scroll}
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
            {...attributes}
            className={styles.footerLink}
            aria-label={link.ariaLabel}
            scroll={scroll}
          >
            {link.linkTitle}
          </Link>
        )
      );
    case "footerLinkGrey":
      return (
        link.linkTitle && (
          <Link
            {...attributes}
            className={styles.footerLinkGrey}
            aria-label={link.ariaLabel}
            scroll={scroll}
          >
            {link.linkTitle}
          </Link>
        )
      );
  }
};

export default CustomLink;
