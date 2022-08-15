import ApplyAsDesigner from './img/søk som designer';
import ApplyAsDeveloper from './img/søk som utvikler';
import NewVariants from './img/vi søker sommervarianter';
import style from './index.module.css';

const Content = () => {
  const sommervarianterBlob1 = require('./img/Vector-9.png');

  return (
    <>
      <div className={style.section1}>
        <section className={style.section1}>
          <span>
            <NewVariants />
          </span>
          <span>
            <p className={style.moreInfo}>Mer info kommer</p>
            <img
              className={style.imageBlob1}
              src={sommervarianterBlob1}
              alt="To fra Variant"
            />
            <span className={style.displayFlex}>
              <a href="https://www.variant.no/jobs">
                <ApplyAsDesigner />
              </a>
              <a href="https://www.variant.no/jobs">
                <ApplyAsDeveloper />
              </a>
            </span>
          </span>
        </section>
      </div>
    </>
  );
};

export default Content;
