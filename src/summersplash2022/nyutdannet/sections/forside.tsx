import style from '../nyutdannet.module.css';
import Section1Blob from '../img/section1Blob';
import Header from 'src/summersplash2022/components/header/header';
import MoreInfo from 'src/summersplash2022/img/merInfo';

const LandingPage = () => {
  const blobSection1 = require('src/summersplash2022/img/section1Blob.png');

  return (
    <>
      <section className={style.section1} id="jobForside">
        <div className={style.header}>
          <Header white={true} />
        </div>
        <span className={style.searchNewVariants}>
          <h1 className={style.bigHeading}>
            Vi ser etter 17 nyutdannede varianter i 2024!
          </h1>
        </span>
        <br />
        <div className={style.applyButtonPink}>
          <p>Søk senest 1. oktober</p>
          <p>
            <a href="#sokfastjobb">Søk fast jobb</a>
          </p>
        </div>
        <div className={style.applyButtonBlue}>
          <p>Fortsatt et par år igjen med studier?</p>
          <p>
            <a href="/sommerjobb">Jeg vil ha sommerjobb</a>
          </p>
        </div>
        <div className={style.section1Blobs}>
          <img
            className={style.imageBlob1}
            src={blobSection1}
            alt="To fra Variant"
          />
          <Section1Blob />
        </div>
        <div className={style.moreInfoDiv}>
          <MoreInfo white={true} />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
