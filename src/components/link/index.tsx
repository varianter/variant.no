import React from "react";

import style from "./link.module.css";
import Link, { LinkProps } from "next/link";
import { and } from "src/utils/css";

type StyledLinkProps = { className?: string };
type LinkType = React.PropsWithChildren<LinkProps>;

export function StyledLink({
  children,
  className = "",
  ...props
}: StyledLinkProps & LinkType) {
  return (
    <Link {...props}>
      <a className={and(style.link, className)}>{children}</a>
    </Link>
  );
}
