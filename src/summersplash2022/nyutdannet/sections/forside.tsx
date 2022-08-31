import style from '../nyutdannet.module.css';
import Section1Blob from '../img/section1Blob';
import Header from 'src/summersplash2022/components/header/header';

const LandingPage = () => {
  const blobSection1 = require('src/summersplash2022/img/section1Blob.png');

  return (
    <>
      <section className={style.section1} id="jobForside">
        <header className={style.header}>
          <Header white={true} />
        </header>
        <span className={style.searchNewVariants}>
          <h3 className={style.bigHeading}>
            Vi ser etter 7 nyutdannede varianter i 2023!{' '}
          </h3>
        </span>
        <br />
        <div className={style.applyButtonPink}>
          <p>Søk senest 3. oktober</p>
          <p>
            <a href="#soksommerjobb">Søk fast jobb</a>
          </p>
        </div>
        <div className={style.applyButtonBlue}>
          <p>Fortsatt et par år igjen med studier?</p>
          <p>
            <a href="/sommerjobb">Jeg vil ha sommerjobb</a>
          </p>
        </div>
        <span>
          <img
            className={style.imageBlob1}
            src={blobSection1}
            alt="To fra Variant"
          />
          <div className={style.section1Blob}>
            <Section1Blob />
          </div>
        </span>
      </section>
    </>
  );
};

export default LandingPage;