import style from './footer.module.css';
import Arrow from './arrow';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <a href='#hero'>
        <span>
            Ta meg til toppen
        </span>
        <div className={style.arrowContainer}>
          <Arrow />
        </div>
      </a>
    </div>
  );
};

export default Footer;