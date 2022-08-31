import React from 'react';
import { and } from 'src/utils/css';
import style from './page-title.module.css';
type PageTitleProps = {
  element?: 'h2' | 'h1';
  title: string;
  bold?: boolean;
};
export default function PageTitle({
  element = 'h1',
  title,
  bold = false,
}: PageTitleProps) {
  return React.createElement(
    element,
    { className: and(style.title, bold ? style['title--bold'] : undefined) },
    [title],
  );
}
