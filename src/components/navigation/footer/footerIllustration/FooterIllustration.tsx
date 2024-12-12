import React from "react";

import styles from "./footerIllustration.module.css";

interface FooterIllustrationProps {
  color: string;
}

export const FooterIllustration = ({ color }: FooterIllustrationProps) => {
  return (
    <div className={styles.footerIllustrations}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="147"
        height="71"
        viewBox="0 0 147 71"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0377 70.0255C8.6983 46.6608 24.1213 24.2022 47.4859 19.8628L83.8554 13.108C107.22 8.76858 129.679 24.1916 134.018 47.5562V47.5562C138.358 70.9209 122.935 93.3795 99.5699 97.7189L63.2004 104.474C39.8358 108.813 17.3772 93.3902 13.0377 70.0255V70.0255ZM125.428 1.30714V1.30714C127.606 0.90263 129.7 2.34033 130.105 4.51833V4.51833L145.819 89.1293V89.1293C146.224 91.3073 144.786 93.4008 142.608 93.8053V93.8053L21.6274 116.275V116.275C19.4494 116.679 17.3559 115.241 16.9513 113.063V113.063L1.23687 28.4525V28.4525C0.832353 26.2745 2.27005 24.1809 4.44805 23.7764V23.7764L125.428 1.30714Z"
          fill={color}
        />
        <circle
          cx="2.00553"
          cy="2.00553"
          r="2.00553"
          transform="matrix(-0.983187 0.182604 0.182604 0.983187 106.894 21.4552)"
          fill="#282828"
        />
        <circle
          cx="2.00553"
          cy="2.00553"
          r="2.00553"
          transform="matrix(-0.983187 0.182604 0.182604 0.983187 90.3052 24.5361)"
          fill="#282828"
        />
        <path
          d="M92.7176 33.0633C93.1221 35.2413 95.9219 36.5478 98.9711 35.9815C102.02 35.4152 104.164 33.1905 103.76 31.0125"
          stroke="#282828"
          strokeWidth="1.60443"
          strokeLinecap="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="215"
        height="84"
        viewBox="0 0 215 84"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.0316 167.754C71.2346 190.957 108.854 190.957 132.057 167.754L167.296 132.516C190.499 109.313 190.499 71.6932 167.296 48.4902V48.4902C144.093 25.2872 106.473 25.2872 83.2701 48.4902L48.0315 83.7288C24.8286 106.932 24.8286 144.551 48.0316 167.754V167.754ZM212.107 93.3012V93.3012C213.652 91.7557 213.652 89.2501 212.107 87.7047V87.7047L128.081 3.67923V3.67923C126.536 2.13381 124.03 2.13381 122.485 3.67923V3.67923L3.2206 122.943V122.943C1.67518 124.489 1.67518 126.994 3.2206 128.54V128.54L87.2461 212.565V212.565C88.7915 214.111 91.2971 214.111 92.8425 212.565V212.565L212.107 93.3012Z"
          fill={color}
        />
        <circle cx="119.025" cy="38.9881" r="1.97865" fill="#282828" />
        <circle cx="131.138" cy="38.9881" r="1.97865" fill="#282828" />
        <path
          d="M130.622 45.7156C130.622 47.9011 128.142 49.6729 125.082 49.6729C122.022 49.6729 119.542 47.9011 119.542 45.7156"
          stroke="#282828"
          strokeWidth="1.58292"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};