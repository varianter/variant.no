import React from 'react';
import Blob from './blobs';
import style from './background.module.css';

export default function AnimatingBackground() {
  return (
    <div className={style.backgroundContainer}>
      <Blob
        variation="blob-1"
        autoplay={false}
        className={style.background__first}
      />
      <Blob
        variation="blob-2"
        autoplay={false}
        className={style.background__second}
      />
      <Blob
        variation="blob-3"
        autoplay={false}
        className={style.background__third}
      />
    </div>
  );
}
