// based on Sayhi component

import Link from 'next/link';
import React from 'react';
import style from './logoblob.module.css';

export type LogoBlobProps = {
  className?: string;
  text?: string;
  href: string;
  rel?: string;
};

export default function LogoBlob({ className, href }: LogoBlobProps) {
  return (
    <div className={className}>
      <Link href={href}>
        <a className={style.logoblob}>
          <img src={require('./logo-blob.svg')} role="none" />
          <div className={style.text}>
            <img src={require('../images/variant-white.svg')} role="none" />
          </div>
        </a>
      </Link>
    </div>
  );
}
