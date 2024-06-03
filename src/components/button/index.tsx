import { ColorSeries, ColorSet } from '@variant/profile/lib/colors';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { and } from 'src/utils/css';

import style from './button.module.css';

export type ButtonProps = React.PropsWithChildren<{
  className?: string;
  colorPair?: ColorSet;
  colorVariation?: ColorVariations;
}>;

export type EType = React.DetailedHTMLProps<
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

export type ColorVariations = {
  series: ColorSeries;
  colorLevel: number;
};

export function ButtonNextLink({
  className = '',
  children,
  colorPair,
  colorVariation,
  ...props
}: ButtonProps & LinkType & Pick<AType, 'aria-label'>) {
  return (
    <Link
      {...props}
      style={colorPairToCssCustomProps(colorPair, colorVariation)}
      className={and(style.buttonLink, className)}
      aria-label={props['aria-label']}
    >
      {children}
    </Link>
  );
}

function colorPairToCssCustomProps(
  colorPair: ColorSet | undefined,
  colorVariation?: ColorVariations | undefined,
) {
  if (!colorPair) return {};

  if (colorVariation && colorVariation.colorLevel < 4) {
    let hoverTintNumber = 1;
    colorVariation.colorLevel >= 3 ? (hoverTintNumber = -1) : hoverTintNumber;
    return {
      '--bg': colorVariation.series[colorVariation.colorLevel].bg,
      '--color': colorVariation.series[colorVariation.colorLevel].text,
      '--hover':
        colorVariation.series[colorVariation.colorLevel + hoverTintNumber].bg ??
        colorVariation.series[colorVariation.colorLevel].bg,
    } as React.CSSProperties;
  }

  return {
    '--bg': colorPair.default.bg,
    '--color': colorPair.default.text,
    '--hover': colorPair.tint?.[0]?.bg ?? colorPair.default.bg,
  } as React.CSSProperties;
}
