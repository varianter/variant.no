import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile';
import Link from 'next/link';
import React from 'react';
import { and } from 'src/utils/css';
import Arrow from '../arrow';

import style from './blob-link.module.css';

type BlobLinkProps = {
  text: string;
  href: string;
  size?: number;
  className?: string;
  background?: colors.ValidDefaultColor;
};

export default function BlobLink({
  text,
  href,
  className,
  size = 300,
  background = colors.colorPairs.secondary1.default.bg,
}: BlobLinkProps) {
  return (
    <Link href={href} className={and(style.blobLink, className)}>
      <div className={style.blobContainer}>
        <BaseBlob
          width={size}
          height={size}
          randomness={2}
          extraPoints={6}
          color={background}
        />
      </div>
      <div className={style.linkContent}>
        <span>{text}</span>
        <Arrow className={style.blobLinkArrow} />
      </div>
    </Link>
  );
}
