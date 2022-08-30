import SummerJob from 'src/summersplash2022/img/SommerjobbSVG';
import JobSelected from 'src/summersplash2022/img/fastjobbSVGSelected';
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
          <h3 className={style.heading}>
            Vi ser etter nye varianter! Hva ser du etter?
          </h3>
          <a href="/sommerjobb">
            <SummerJob />
          </a>
          <div>
            <JobSelected />
          </div>
          <h3 className={style.heading}>i 2023</h3>
        </span>
        <br />
        <div className={style.underHeader}>
          {/* middlertidig link. usikker på hvilken vi skal bruke */}
          <p>
            <a className={style.søkHer} href="/jobs">
              Søk her innen 2. oktober
            </a>
          </p>
          <p className={style.eller}>eller</p>
          <p>scroll deg nedover</p>
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
