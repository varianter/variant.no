import React from "react";
import Blob from "./blobs";
import style from "./background.module.css";

import { useReducedMotion } from "framer-motion";

export default function AnimatingBackground() {
  const preventAuto = useReducedMotion();
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
