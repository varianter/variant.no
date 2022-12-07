import { ColorSet } from '@variant/profile/lib/colors';
import Link, { LinkProps } from 'next/link';
import React, { useState } from 'react';
import { and } from 'src/utils/css';

import style from './button.module.css';

type ButtonProps = React.PropsWithChildren<{
  mode?: 'primary';
  className?: string;
  colorPair?: ColorSet;
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
}: ButtonProps & LinkType & Pick<AType, 'aria-label'>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link {...props}>
      <a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={
          !isHovered
            ? {
                backgroundColor: props.colorPair?.default.bg,
                color: props.colorPair?.default.text,
                transition:
                  'background-color 250ms ease-out, color 250ms ease-out',
              }
            : {
                backgroundColor: props.colorPair?.tint![0].bg,
                color: props.colorPair?.tint![0].text,
                transition:
                  'background-color 250ms ease-in, color 250ms ease-in',
              }
        }
        className={and(style.buttonLink, className)}
        aria-label={props['aria-label']}
      >
        {children}
      </a>
    </Link>
  );
}
