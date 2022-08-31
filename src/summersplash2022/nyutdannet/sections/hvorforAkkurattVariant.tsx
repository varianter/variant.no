import { useEffect, useState } from 'react';
import style from 'src/summersplash2022/index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import ReadMoreArrowWhite from '../img/lesMerPilHvit';
import HandBooKPagesJob from '../utils/handBookPagesJob';

const WhyVariant = () => {
  const [whichButtonSelected, setWhichButtonSelected] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.matchMedia('(max-width: 900px)').matches);
  };

  const handleOnClick = (buttonValue: string) => {
    if (window.matchMedia('(max-width: 900px)').matches) {
    }

    setWhichButtonSelected(buttonValue);
  };

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 900px)').matches);
    window.addEventListener('resize', handleResize);
  });

  return (
    <section
      className={style.whyWorkAtVariant}
      id="hvorforjobbeivariant"
      style={{
        backgroundColor: '#01574F',
        color: 'white',
        height: 'auto',
      }}
    >
      <div className={style.handbook}>
        <div className={style.handbookChildButton}>
          <h3 className={style2.heading}>Hvorfor akkurat Variant?</h3>
          <p className={style.positionTextLeft}>
            Variant er en variant av et konsulentselskap som er raust, åpent og
            læreglad. Disse verdiene ligger til grunn for hvordan vi møter
            hverandre, våre kunder og alle andre. I håndboken vår kan du lese om
            hvordan ting gjøres i Variant, hva vi prøver å oppnå og hvorfor vi
            tenker som vi gjør. Under kan du sjekke ut noen utvalgte temaer.
          </p>

          <div className={style.handbookGrid}>
            <button
              style={{
                color: isMobile
                  ? '#333333'
                  : whichButtonSelected === 'Formal og verdier'
                  ? '#333333'
                  : 'white',
                backgroundColor: isMobile
                  ? '#68E9DD'
                  : whichButtonSelected === 'Formal og verdier'
                  ? '#68E9DD'
                  : '#01574F',
              }}
              className={style.handbookButton1}
              onClick={() => handleOnClick('Formal og verdier')}
            >
              Formål og verdier
            </button>
            <button
              style={{
                color: isMobile
                  ? '#333333'
                  : whichButtonSelected === 'Arbeidet'
                  ? '#333333'
                  : 'white',
                backgroundColor: isMobile
                  ? '#F1EDDF'
                  : whichButtonSelected === 'Arbeidet'
                  ? '#F1EDDF'
                  : '#01574F',
              }}
              className={style.handbookButton3}
              onClick={() => handleOnClick('Arbeidet')}
            >
              Arbeidet
            </button>
            <button
              style={{
                color: isMobile
                  ? '#333333'
                  : whichButtonSelected === 'Det sosiale'
                  ? '#333333'
                  : 'white',
                backgroundColor: isMobile
                  ? '#FFC4BC'
                  : whichButtonSelected === 'Det sosiale'
                  ? '#FFC4BC'
                  : '#01574F',
              }}
              className={style.handbookButton2}
              onClick={() => handleOnClick('Det sosiale')}
            >
              Det sosiale{' '}
            </button>
            <button
              style={{
                color: isMobile
                  ? '#333333'
                  : whichButtonSelected === 'Goder'
                  ? '#333333'
                  : 'white',
                backgroundColor: isMobile
                  ? '#FAD2E2'
                  : whichButtonSelected === 'Goder'
                  ? '#FAD2E2'
                  : '#01574F',
              }}
              className={style.handbookButton4}
              onClick={() => handleOnClick('Goder')}
            >
              Goder og ytelser
            </button>
          </div>
          <div className={style.section5HandbookLink}>
            <h3 className={style.mostImportantForYou}>
              Hva er viktigst for deg?
            </h3>
            <a
              style={{ color: 'white' }}
              className={style.handbookRef}
              href="https://handbook.variant.no"
            >
              Sjekk ut hele håndboka vår her
            </a>
          </div>
        </div>
        <div className={style.handbookPages}>
          {whichButtonSelected ? (
            <HandBooKPagesJob selectedButton={whichButtonSelected} />
          ) : (
            <div className={style2.arrowDiv}>
              <ReadMoreArrowWhite />
            </div>
          )}
        </div>
        <div className={style.section5HandbookLinkMobile}>
          <h3 className={style.mostImportantForYou}>
            Hva er viktigst for deg?
          </h3>
          <a className={style.handbookRef} href="https://handbook.variant.no">
            Sjekk ut hele håndboka vår her
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyVariant;
