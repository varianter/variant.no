import { useEffect } from 'react';
import { animation1 } from './animations/animation1';

import style from './firework.module.css';

const fireworkAnimation = () => {
  animation1();
};

const Firework = () => {
  useEffect(() => {
    fireworkAnimation();
  });

  return (
    <div className={style.firework}>
      <div className={style.firework__position}>
        <svg
          style={{ display: 'none' }}
          id="path"
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="557"
          viewBox="0 0 66 557"
          fill="none"
        >
          <path
            d="M9.19425 556.5C-18.4057 358.5 34.6943 103.333 64.6943 0.5"
            stroke="black"
            stroke-linecap="round"
          />
        </svg>
        <svg
          id="blob"
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
          viewBox="0 0 301 333"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M139.363 332.846C88.3307 335.632 43.6177 300.167 16.0525 259.594C-8.29911 223.75 0.503975 180.581 7.33288 138.509C15.2385 89.8027 10.2604 27.8013 57.1974 6.1029C104.231 -15.6404 153.374 25.8792 199.195 49.8132C240.012 71.1334 289.043 89.599 299.223 132.522C309.373 175.315 273.941 211.999 245.976 247.043C216.423 284.076 188.447 330.167 139.363 332.846Z"
            fill="#E61A6B"
          />
        </svg>
        <svg
          id="firework"
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="3"
          viewBox="0 0 43 3"
          fill="none"
        >
          <line
            xmlns="http://www.w3.org/2000/svg"
            y1="1.5"
            x2="43"
            y2="1.5"
            stroke="#E61A6B"
            stroke-width="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Firework;
