import React from 'react';
import { and } from 'src/utils/css';
import style from './page-title.module.css';
type PageTitleProps = {
  element?: 'h2' | 'h1';
  title: string;
  jumbo?: boolean;
};
export default function PageTitle({
  element = 'h1',
  title,
  jumbo = false,
}: PageTitleProps) {
  return React.createElement(
    element,
    { className: and(style.title, jumbo ? style['title--jumbo'] : undefined) },
    [title],
  );
}
