// import React from 'react';
import style from './index.module.css';
// import HandBooKPages from './utils/handBookPages';

const Content = () => {
  const sommervarianterBlob1 = require('./img/sommervarianterBlob1.png');

  const searchNewVariants = require('./img/vi søker nye varianter.png');
  const applyAsDeveloper = require('./img/søk som utvikler.png');
  const applyAsDesigner = require('./img/søk som designer.png');

  return (
    <>
      <section className={style.section1}>
        <span>
          <img className={style.searchNewVariants} src={searchNewVariants} />
        </span>
        <span>
          <p>Mer info kommer</p>
          <img
            className={style.imageBlob1}
            src={sommervarianterBlob1}
            alt="To fra Variant"
          />
          <span className={style.displayFlex}>
            <img
              className={style.applyAsDeveloper}
              src={applyAsDesigner}
              alt="Søk som utvikler"
            />
            <img
              className={style.applyAsDeveloper}
              src={applyAsDeveloper}
              alt="Søk som utvikler"
            />
          </span>
        </span>
      </section>
    </>
  );
};

export default Content;
