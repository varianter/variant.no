import React from 'react';

import style from './button.module.css';

type ButtonProps = React.PropsWithChildren<{
  mode?: 'primary';
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
