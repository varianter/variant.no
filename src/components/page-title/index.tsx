import React from 'react';
import style from './page-title.module.css';
type PageTitleProps = {
  element?: 'h2' | 'h1';
  title: string;
};
export default function PageTitle({ element = 'h1', title }: PageTitleProps) {
  return React.createElement(element, { className: style.title }, [title]);
}
