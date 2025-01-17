import Link from "next/link";

import { cn } from "src/utils/css";
import { getLinkAttributes } from "src/utils/link";
import { ILink } from "studio/lib/interfaces/navigation";

import styles from "./linkButton.module.css";

type LinkButtonType = "primary" | "secondary";

type LinkType = { link: ILink } | { link: string; linkTitle: string };

type LinkButtonProps = {
  size?: "XL" | "L" | "M" | "S";
  type?: LinkButtonType;
  withoutIcon?: boolean;
  background?: "dark" | "light";
} & LinkType;

const LinkButton = ({
  size = "XL",
  type = "primary",
  withoutIcon = false,
  background,
  ...props
}: LinkButtonProps) => {
  const modifierSize = styles[`button--${size.toLowerCase()}`];
  const modifierType = styles[`button--${type}`];
  const modifierBackground = styles[`button--${type}--${background}`];
  const modifierWithIcon = !withoutIcon ? styles["button--withIcon"] : "";

  const className = cn(
    styles.button,
    modifierSize,
    modifierType,
    modifierBackground,
    modifierWithIcon,
  );

  const { href, linkTitle, target, rel } = getLinkData(props);

  return (
    href &&
    linkTitle && (
      <Link className={className} href={href} target={target} rel={rel}>
        {linkTitle}
      </Link>
    )
  );
};

function getLinkData(link: LinkType) {
  if (isLinkTypeString(link)) {
    return { href: link.link, linkTitle: link.linkTitle };
  }

  const attributes = getLinkAttributes(link.link);

  return {
    linkTitle: link.link.linkTitle,
    ...attributes,
  };
}

function isLinkTypeString(
  link: LinkType,
): link is { link: string; linkTitle: string } {
  return typeof link === "object" && "link" in link && "linkTitle" in link;
}

export default LinkButton;
