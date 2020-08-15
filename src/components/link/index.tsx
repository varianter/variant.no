import React from "react";

import style from "./link.module.css";
import Link, { LinkProps } from "next/link";

type StyledLinkProps = { className?: string };
type LinkType = React.PropsWithChildren<LinkProps>;

export function StyledLink({
  children,
  className = "",
  ...props
}: StyledLinkProps & LinkType) {
  return (
    <Link {...props} className={className}>
      <a className={style.link}>{children}</a>
    </Link>
  );
}
