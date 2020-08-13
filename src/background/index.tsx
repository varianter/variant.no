import React from "react";
import Blob from "./blobs";
import style from "./background.module.css";
import { useReducedMotionEffect } from "src/utils/hooks";

export default function AnimatingBackground() {
  const preventAuto = useReducedMotionEffect();
  return (
    <div className={style.backgroundContainer}>
      <Blob
        variation="blob-1"
        autoplay={!preventAuto}
        className={style.background__first}
      />
      <Blob
        variation="blob-2"
        autoplay={!preventAuto}
        className={style.background__second}
      />
      <Blob
        variation="blob-3"
        autoplay={!preventAuto}
        className={style.background__third}
      />
    </div>
  );
}
