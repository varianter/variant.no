import Link from 'next/link';
import React from 'react';
import style from './label.module.css';

type LabelProps = {
  children: string;
};

export const Label = ({ children }: LabelProps) => {
  return (
    <div className={style.label}>
      <Link href={`#${children}`}>
        <div className={style.label__button}>{children}</div>
      </Link>
    </div>
  );
};
