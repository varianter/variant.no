import { useState } from 'react';
import style from './hvorforAkkuratVariant.module.css';
import HandBookPages, {
  HandbookPage,
  pageTitle,
} from 'src/summersplash2022/utils/handBookPages';

const WhyVariant = ({
  pages,
  className,
}: {
  pages: HandbookPage[];
  className: string;
}) => {
  const [whichButtonSelected, setWhichButtonSelected] = useState(pages[0]);

  return (
    <section
      className={`${style.section} ${className}`}
      id="hvorforjobbeivariant"
    >
      <div className={style.flex}>
        <div className={style.topicsDiv}>
          <h2>Hvorfor akkurat Variant?</h2>
          <p>
            Variant er en variant av et konsulentselskap som er raust, åpent og
            læreglad. Disse verdiene ligger til grunn for hvordan vi møter
            hverandre, våre kunder og alle andre. I håndboken vår kan du lese om
            hvordan ting gjøres i Variant, hva vi prøver å oppnå og hvorfor vi
            tenker som vi gjør. Under kan du sjekke ut noen utvalgte temaer.
          </p>

          <div className={style.buttons}>
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
        <div className={style.mostImportantForYouDiv}>
          <h3 className={style.mostImportantForYou}>
            Hva er viktigst for deg?
          </h3>
          <a href="https://handbook.variant.no">
            Sjekk ut Variants håndbok her
          </a>
        </div>
        <div className={style.selectedTopic}>
          <HandBookPages selectedPage={whichButtonSelected} />
        </div>
      </div>
    </section>
  );
};

export default WhyVariant;
