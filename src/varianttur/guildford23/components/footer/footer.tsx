import Arrow from './arrow';
import style from './footer.module.css';

const Footer = ({ topHref, isPrimary }: { topHref: string, isPrimary: boolean }) => {
  return (
    <div className={isPrimary? style.primaryFooterContainer : style.secondaryFooterContainer}>
      <a href={topHref}>
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