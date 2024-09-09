import Link from 'next/link';
import React from 'react';
import style from './buttons.module.css';

type MenyButtonprops = {
  text: string;
  emoji: string;
};

export const MenyButton = ({ text, emoji }: MenyButtonprops) => {
  return (
    <Link href={`#${text}`}>
      <div className={style.menyButton}>
        <p className={style.menyButton__emoji}>{emoji}</p>
        {text}
      </div>
    </Link>
  );
};
