import { ColorSeries, ColorSet } from '@variant/profile/lib/colors';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { and } from 'src/utils/css';

import style from './button.module.css';

type ButtonProps = React.PropsWithChildren<{
  className?: string;
  colorPair?: ColorSet;
  tint?: ColorSeries;
  tintLevel?: number;
}>;

type EType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, colorPair, ...props }: ButtonProps & EType) {
  return (
    <button
      {...props}
      style={colorPairToCssCustomProps(colorPair)}
      className={style.button}
    >
      {children}
    </button>
  );
}

type AType = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function ButtonLink({
  children,
  colorPair,
  ...props
}: ButtonProps & AType) {
  return (
    <a
      {...props}
      style={colorPairToCssCustomProps(colorPair)}
      className={style.buttonLink}
    >
      {children}
    </a>
  );
}

type LinkType = React.PropsWithChildren<LinkProps>;

export function ButtonNextLink({
  className = '',
  children,
  colorPair,
  tint,
  tintLevel,
  ...props
}: ButtonProps & LinkType & Pick<AType, 'aria-label'>) {
  return (
    <Link {...props}>
      <a
        style={colorPairToCssCustomProps(colorPair, tint, tintLevel)}
        className={and(style.buttonLink, className)}
        aria-label={props['aria-label']}
      >
        {children}
      </a>
    </Link>
  );
}

function colorPairToCssCustomProps(
  colorPair: ColorSet | undefined,
  tint?: ColorSeries | undefined,
  tintLevel?: number,
) {
  if (!colorPair) return {};

  if (tint && tintLevel && tintLevel < tint.length) {
    let hoverTintNumber = 1;
    tintLevel == 3 ?? (hoverTintNumber = -1);
    return {
      '--bg': tint[tintLevel].bg,
      '--color': tint[tintLevel].text,
      '--hover': tint[tintLevel + hoverTintNumber].bg ?? tint[tintLevel].bg,
    } as React.CSSProperties;
  }

  return {
    '--bg': colorPair.default.bg,
    '--color': colorPair.default.text,
    '--hover': colorPair.tint?.[0]?.bg ?? colorPair.default.bg,
  } as React.CSSProperties;
}
