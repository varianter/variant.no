import Link from "next/link";

import { cn } from "src/utils/css";
import { getHref } from "src/utils/link";
import { ILink } from "studio/lib/interfaces/navigation";

import styles from "./linkButton.module.css";

type LinkButtonType = "primary" | "secondary";

interface IButton {
  size?: "XL" | "L" | "M" | "S";
  type?: LinkButtonType;
  link: ILink;
  withIcon?: boolean;
  background?: "dark" | "light";
}

const LinkButton = ({
  size = "XL",
  type = "primary",
  link,
  withIcon = true,
  background,
}: IButton) => {
  const modifierSize = styles[`button--${size.toLowerCase()}`];
  const modifierType = styles[`button--${type}`];
  const modifierBackground = styles[`button--${type}--${background}`];
  const modifierWithIcon = withIcon ? styles["button--withIcon"] : "";

  const className = cn(
    styles.button,
    modifierSize,
    modifierType,
    modifierBackground,
    modifierWithIcon,
  );

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
