import Link from 'next/link';
import style from './lonn.module.css';
import PinkBlob from '../img/pinkBlob';
import Calculator from '../utils/calculator';

const Payment = () => {
  return (
    <section className={style.section}>
      <h2>Lønn</h2>
      <div className={style.flex}>
        <div className={style.text}>
          <p>
            Vi er sikre på at flinke folk i liten grad lar seg motivere av lønn
            alene, men god lønn er like fullt viktig for den frihet og
            stabilitet vi ønsker å gi.
          </p>
          <p>
            Lønnen vår bestemmes utelukkende av en utjevnet kurve for øvre
            kvartil av Teknas lønnsstatistikk. Lønnsøkninger tas ikke
            individuelt – det går automatisk. Din lønn baseres rett og slett på
            antall års erfaring.
          </p>
          <p>
            I kalkulatoren til høyre kan du se hva du vil tjene som nyutdannet.
            Du kan også ta en titt på
            <Link href="/kalkulator">lønnskalkulatoren</Link>
            om du vil vite mer om lønn og andre goder i Variant.
          </p>
        </div>
        <div className={style.calculator}>
          <div className={style.calculatorWrapper}>
            <Calculator />
          </div>
          <div className={style.pinkBlobWrapper}>
            <PinkBlob />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
