import Link from 'next/link';
import React from 'react';
import style from './buttons.module.css';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

const LinkButton = ({ href, children, fullWidth }: LinkButtonProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={style.linkButton}
      href={href}
    >
      <div
        style={
          fullWidth
            ? { width: '100%', textAlign: 'center' }
            : { width: 'fit-content' }
        }
        className={style.linkButton_background}
      >
        {children}
      </div>
    </Link>
  );
};

export default LinkButton;
