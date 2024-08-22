import style from '../sections/søkJobb.module.css';

const ApplyImgWithBlob = ({ color }: { color: string }) => {
  return (
    <svg
      width="684"
      height="620"
      viewBox="0 0 684 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={style.imgWithBlob}
    >
      <path
        d="M79.311 322.682C72.5012 395.377 179.266 420.132 227.171 475.226C266.3 520.228 275.446 594.499 332.086 613.396C389.404 632.519 451.109 599.839 501.787 566.846C546.134 537.974 565.027 487.851 593.425 443.253C627.714 389.405 684.512 344.761 683.793 281.011C682.982 209.115 649.419 134.142 589.49 94.3222C530.315 55.0026 450.839 59.8024 382.94 81.1057C325.169 99.2313 300.328 162.222 252.962 199.908C195.768 245.413 86.1151 250.048 79.311 322.682Z"
        fill={color}
      />
      <rect width="504" height="504" fill="url(#patternApplyWithBlob)" />
      <defs>
        <pattern
          id="patternApplyWithBlob"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_259_22" transform="scale(0.001)" />
        </pattern>
        <image
          id="image0_259_22"
          width="1000"
          height="1000"
        />
      </defs>
    </svg>
  );
};

export default ApplyImgWithBlob;