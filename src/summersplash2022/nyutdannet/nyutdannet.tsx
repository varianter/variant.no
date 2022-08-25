import JobSelected from '../img/fastjobbSVGSelected';
import SummerJob from '../img/SommerjobbSVG';
import styleNyutdannet from './nyutdannet.module.css';
import style from '../index.module.css';
import { useEffect, useState } from 'react';
import { changeNavbarColor } from '../utils/utils';

const Nyutdannet = () => {
  const blobSection1 = require('../img/section1BlobSummer.png');

  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    changeNavbarColor(setNavColor, setIsMobile, setOffset, offset);
  }, [offset, navColor]);
  return (
    <>
      <div className={style.scrollContainer} id="scrollContainer">
        <section className={style.section1job} id="jobForside">
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
          <div className={style.navigationSlider}>
            <a
              href="#forside"
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
          </div>
          <div className={style.underHeader}>
            {/* middlertidig link. usikker på hvilken vi skal bruke */}
            <p>
              <a className={style.søkHer} href="/jobs">
                Søk her innen 2. oktober
              </a>
            </p>
            <p className={style.eller}>eller</p>
            <p className={style.scroll}>scroll deg nedover</p>
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
      </div>
    </>
  );
};

export default Nyutdannet;
