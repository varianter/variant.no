import { useState } from 'react';
import ReadMoreArrow from 'src/summersplash2022/img/lesMerPil';
import style from 'src/summersplash2022/index.module.css';
import HandBooKPagesJob from '../utils/handBookPagesJob';

const WhyVariant = () => {
  const [whichButtonSelected, setWhichButtonSelected] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleOnClick = (buttonValue: string) => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setButtonClicked(true);
    }

    setWhichButtonSelected(buttonValue);
  };
  return (
    <section
      className={style.whyWorkAtVariant}
      id="hvorforjobbeivariant"
      style={{
        backgroundColor: '#01574F',
        color: 'white',
        height: buttonClicked
          ? '1600px'
          : '900px' || window.matchMedia('(min-width: 1550px)').matches
          ? '1300px'
          : '900px',
      }}
    >
      <div className={style.handbook}>
        <div className={style.handbookChildButton}>
          <h3 className={style.section4Heading}>Hvorfor akkurat Variant?</h3>
          <p className={style.positionTextLeft}>
            Variant er en variant av et konsulentselskap som er raust, åpent og
            læreglad. Disse verdiene ligger til grunn for hvordan vi møter
            hverandre, våre kunder og alle andre. I håndboken vår kan du lese om
            hvordan ting gjøres i Variant, hva vi prøver å oppnå og hvorfor vi
            tenker som vi gjør. Under kan du sjekke ut noen utvalgte temaer.
          </p>

          <div className={style.handbookGrid}>
            <button
              style={{ color: 'white' }}
              className={style.handbookButton1}
              onClick={() => handleOnClick('Formal og verdier')}
            >
              Formål og verdier
            </button>
            <button
              style={{ color: 'white' }}
              className={style.handbookButton3}
              onClick={() => handleOnClick('Variantdag')}
            >
              Arbeidet
            </button>
            <button
              style={{ color: 'white' }}
              className={style.handbookButton2}
              onClick={() => handleOnClick('Tillit og ansvar')}
            >
              Det sosiale{' '}
            </button>
            <button
              style={{ color: 'white' }}
              className={style.handbookButton4}
              onClick={() => handleOnClick('Miljofyrtarn')}
            >
              Goder{' '}
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
            <ReadMoreArrow />
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
