const ArrowDown = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_199_784)">
        <path
          d="M13.5 2.5C13.5 1.67157 12.8284 1 12 1C11.1716 1 10.5 1.67157 10.5 2.5L13.5 2.5ZM10.9393 24.5607C11.5251 25.1464 12.4749 25.1464 13.0607 24.5607L22.6066 15.0147C23.1924 14.4289 23.1924 13.4792 22.6066 12.8934C22.0208 12.3076 21.0711 12.3076 20.4853 12.8934L12 21.3787L3.51472 12.8934C2.92893 12.3076 1.97919 12.3076 1.3934 12.8934C0.807612 13.4792 0.807612 14.4289 1.3934 15.0147L10.9393 24.5607ZM10.5 2.5L10.5 23.5L13.5 23.5L13.5 2.5L10.5 2.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_199_784">
          <rect
            width="25"
            height="24"
            fill="white"
            transform="translate(24 0.5) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDown;
