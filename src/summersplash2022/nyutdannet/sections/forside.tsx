import { useEffect, useState } from 'react';
import { changeNavbarColor } from 'src/summersplash2022/utils/utils';
import SummerJob from 'src/summersplash2022/img/SommerjobbSVG';
import JobSelected from 'src/summersplash2022/img/fastjobbSVGSelected';
import style from '../nyutdannet.module.css';

const LandingPage = () => {
  const blobSection1 = require('src/summersplash2022/img/section1Blob.png');

  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    changeNavbarColor(setNavColor, setIsMobile, setOffset, offset);
  }, [offset, navColor]);
  return (
    <>
      <section className={style.section1} id="jobForside">
        <span className={style.searchNewVariants}>
          <h3 className={style.section1H3}>Jeg ser etter</h3>
          <a href="/sommerjobb">
            <SummerJob />
          </a>
          <div>
            <JobSelected />
          </div>
          <h3 className={style.in2023}>i 2023</h3>
        </span>
        <br />
        {/* Navigation bar on the right side */}
        {/* <div className={style.navigationSlider}>
          <a
            href="#jobForside"
            style={{ color: navColor ? 'white' : 'black' }}
            className={style.navigationButton6}
          >
            Forside
          </a>
          <a
            href="#hvagarsommerjobbenutpa"
            style={{ color: navColor ? 'white' : 'black' }}
            className={style.navigationButton1}
          >
            Hva går sommerjobben ut på
          </a>
          <a
            href="#hvameneraretssommerstudenter"
            style={{ color: navColor && isMobile ? 'white' : 'black' }}
            className={style.navigationButton2}
          >
            Hva mener årets sommerstudenter?
          </a>
          <a
            href="#hvorforjobbeivariant"
            style={{ color: navColor ? 'white' : 'black' }}
            className={style.navigationButton3}
          >
            Hvorfor jobbe i Variant?
          </a>
          <a
            href="#hvaskjerettersoknadsfristen"
            style={{ color: navColor && isMobile ? 'white' : 'black' }}
            className={style.navigationButton4}
          >
            Hva skjer etter søknadsfristen?
          </a>
          <a
            href="#soksommerjobb"
            style={{ color: navColor ? 'white' : 'black' }}
            className={style.navigationButton5}
          >
            Søk sommerjobb
          </a>
        </div> */}
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
        </span>
      </section>

      <section className={style.section1}>
        <a href="/sommerjobb"></a>
        <div></div>
      </section>
    </>
  );
};

export default LandingPage;
