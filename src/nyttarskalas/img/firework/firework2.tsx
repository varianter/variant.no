import { useEffect } from 'react';
import { animation2 } from './animations';

import style from './firework.module.css';

const fireworkAnimation = () => {
  animation2();
};

const Firework2 = () => {
  useEffect(() => {
    fireworkAnimation();
  });

  return (
    <div className={style.firework2}>
      <div className={style.firework2__position}>
        <svg
          style={{ display: 'none' }}
          id="path1"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="558"
          viewBox="0 0 100 558"
          fill="none"
        >
          <path
            d="M87.0467 557C129.837 359 47.5117 103.833 1 1"
            stroke="black"
            strokeLinecap="round"
          />
        </svg>
        <svg
          id="blob1"
          className={style.blob1}
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
          viewBox="0 0 299 286"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M75.339 89.5979C105.292 57.413 120.317 -2.54605 164.132 1.09306C208.033 4.7393 214.195 65.6716 237.483 103.065C260.553 140.108 309.444 171.344 296.025 212.869C282.536 254.614 226.164 256.408 184.008 268.551C146.432 279.374 107.814 294.64 72.8382 277.154C34.0565 257.766 -0.00986521 220.198 0.568202 176.844C1.10544 136.551 47.8865 119.096 75.339 89.5979Z"
            fill="#03DAC6"
          />
        </svg>
        <svg
          id="firework1"
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
            stroke="#03DAC6"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Firework2;
