import style from './gradient.module.css';
const Gradient = () => {
  return (
    <svg
      className={style.gradient}
      xmlns="http://www.w3.org/2000/svg"
      width="1280"
      height="245"
      viewBox="0 0 1280 245"
      fill="none"
    >
      <rect width="1280" height="245" fill="url(#paint0_linear_66_970)" />
      <defs>
        <linearGradient
          id="paint0_linear_66_970"
          x1="640"
          y1="76"
          x2="640"
          y2="245"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Gradient;
