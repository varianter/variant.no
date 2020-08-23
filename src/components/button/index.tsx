import Link, { LinkProps } from 'next/link';
import React from 'react';
import { and } from 'src/utils/css';

import style from './button.module.css';

type ButtonProps = React.PropsWithChildren<{
  mode?: 'primary';
  className?: string;
}>;

type EType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({
  mode = 'primary',
  children,
  ...props
}: ButtonProps & EType) {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
}

type AType = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function ButtonLink({
  mode = 'primary',
  children,
  ...props
}: ButtonProps & AType) {
  return (
    <a {...props} className={style.buttonLink}>
      {children}
    </a>
  );
}

type LinkType = React.PropsWithChildren<LinkProps>;

export function ButtonNextLink({
  mode = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps & LinkType) {
  return (
    <Link {...props}>
      <a className={and(style.buttonLink, className)}>{children}</a>
    </Link>
  );
}
