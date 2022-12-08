import style from './footer.module.css';
const Footer = (props: { color: string }) => {
  return (
    <svg
      className={style.footer}
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="160"
      viewBox="0 0 1200 160"
      fill="none"
    >
      <path
        d="M1200 0L982.053 127.86L782.789 100.329L620.187 56.6354L468.494 104.257L311.132 34.873L160.855 56.6354L84.2755 10.2984L0 56.6354V160H1200V0Z"
        fill={props.color}
      />
    </svg>
  );
};
export default Footer;
