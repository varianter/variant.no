import Link from "next/link";
import React from "react";

import { getLinkAttributes } from "src/utils/link";
import { ILink, LinkType } from "studio/lib/interfaces/navigation";

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
  const className = getLinkClassName(type, link.linkType, isSelected);
  const attributes = getLinkAttributes(link);

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
          {...attributes}
          className={className}
          aria-label={link.ariaLabel}
          scroll={scroll}
        >
          {link.linkTitle}
        </Link>
      </div>
    ) : (
      <Link
        {...attributes}
        className={className}
        aria-label={link.ariaLabel}
        scroll={scroll}
      >
        {link.linkTitle}
      </Link>
    ))
  );
};

const getLinkClassName = (
  componentType: ComponentLinkType,
  linkType: LinkType,
  isSelected: boolean | undefined,
) => {
  switch (componentType) {
    case "link":
      return linkType == "internal" ? styles.internalLink : styles.externalLink;
    case "headerLink":
      return `${styles.headerLink} ${isSelected ? styles.selected : ""}`;
    case "footerLink":
      return styles.footerLink;
    case "footerLinkGrey":
      return styles.footerLinkGrey;
  }
};

export default CustomLink;
