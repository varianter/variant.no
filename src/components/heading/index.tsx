import React from 'react';
import { and } from 'src/utils/css';

import style from './heading.module.css';

type HeadingLevels = '1' | '2' | '3' | '4' | '5' /* | '6'*/;

type HeadingProps = React.PropsWithChildren<{
  styleLevel?: HeadingLevels;
  className?: string;
}> &
  JSX.IntrinsicElements['h1'];

const Heading = ({
  children,
  level,
  styleLevel,
  className,
  ...props
}: HeadingProps & { level: HeadingLevels }) => {
  const H: React.ElementType = `h${level}`;
  const headingClass = `var-heading--${styleLevel ? styleLevel : level}`;

  return (
    <H
      {...props}
      className={and(style['var-heading'], style[headingClass], className)}
    >
      {children}
    </H>
  );
};

export const Heading1 = (props: HeadingProps) =>
  Heading({ level: '1', ...props });
export const Heading2 = (props: HeadingProps) =>
  Heading({ level: '2', ...props });
export const Heading3 = (props: HeadingProps) =>
  Heading({ level: '3', ...props });
export const Heading4 = (props: HeadingProps) =>
  Heading({ level: '4', ...props });
export const Heading5 = (props: HeadingProps) =>
  Heading({ level: '5', ...props });
