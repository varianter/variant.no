import Link from 'next/link';
import React from 'react';
import style from './buttons.module.css';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <Link className={style.linkButton} href={href}>
      <div className={style.linkButton_background}>{children}</div>
    </Link>
  );
};

export default LinkButton;
