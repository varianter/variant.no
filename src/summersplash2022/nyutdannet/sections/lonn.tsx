import Link from 'next/link';
import style from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import PinkBlob from '../img/pinkBlob';
import Calculator from '../utils/calculator';

const Payment = () => {
  return (
    <section className={style.section4}>
      <h2 className={style.heading}>Lønn</h2>
      <div className={style.section4Flex}>
        <div className={style.section4Text}>
          <p>
            Vi er sikre på at flinke folk i liten grad lar seg motivere av lønn
            alene, men god lønn er like fullt viktig for den frihet og
            stabilitet vi ønsker å gi.
          </p>
          <p>
            {' '}
            Lønnen vår bestemmes utelukkende av en utjevnet kurve for øvre
            kvartil av Teknas lønnsstatistikk. Lønnsøkninger tas ikke
            individuelt – det går automatisk. Din lønn baseres rett og slett på
            antall års erfaring.
          </p>
          <p>
            I kalkulatoren til høyre kan du se hva du vil tjene som nyutdannet.
            Du kan også ta en titt på{' '}
            <Link href="/kalkulator">
              <a>lønnskalkulatoren</a>
            </Link>{' '}
            om du vil vite mer om lønn og andre goder i Variant.
          </p>
        </div>
        <div className={style.calculator}>
          <div className={style.wrapper}>
            <Calculator />
          </div>
          <div>
            <PinkBlob />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
