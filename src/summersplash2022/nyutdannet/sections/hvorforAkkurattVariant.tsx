import { useState } from 'react';
import style from 'src/summersplash2022/index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import HandBookPages, { HandbookPage, pageTitle } from 'src/summersplash2022/utils/handBookPages';

const WhyVariant = ({pages}: {pages: HandbookPage[]}) => {
  const [whichButtonSelected, setWhichButtonSelected] = useState(pages[0]);

  return (
    <section
      className={style.whyWorkAtVariant}
      id="hvorforjobbeivariant"
    >
      <div className={style.handbook}>
        <div className={style.handbookChildButton}>
          <h2 className={style2.heading}>Hvorfor akkurat Variant?</h2>
          <p className={style.positionTextLeft}>
            Variant er en variant av et konsulentselskap som er raust, åpent og
            læreglad. Disse verdiene ligger til grunn for hvordan vi møter
            hverandre, våre kunder og alle andre. I håndboken vår kan du lese om
            hvordan ting gjøres i Variant, hva vi prøver å oppnå og hvorfor vi
            tenker som vi gjør. Under kan du sjekke ut noen utvalgte temaer.
          </p>

          <div className={style.handbookGrid}>
            {pages.map((page: HandbookPage) => (
              <button
              className={whichButtonSelected === page ? style.active : ''}
              onClick={() => setWhichButtonSelected(page)}
              key={page}
            >
              {pageTitle(page)}
            </button>
            ))}
          </div>
        </div>
        <div className={style.handbookPages}>
            <HandBookPages selectedPage={whichButtonSelected} />
        </div>
        <div className={style.section5HandbookLinkMobile}>
            <h3 className={style.mostImportantForYou}>
              Hva er viktigst for deg?
            </h3>
            <a  href="https://handbook.variant.no">
              Sjekk ut Variants håndbok her
            </a>
        </div>
      </div>
    </section>
  );
};

export default WhyVariant;
