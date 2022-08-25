import style from '../nyutdannet.module.css';
import TimeLine from './img/tidslinje';
const FirstYear = () => {
  return (
    <>
      <section className={style.section5}>
        <h3 className={style.section5H3}>Hvordan ser første året ut?</h3>
        <p>
          For å bidra til personlig og faglig utvikling av nyutdanne
          gjennomfører vi oppstartsprogrammet variant:skudd. Programmet
          gjennomføres i løpet av det første året den nyutdannede jobber i
          Variant.{' '}
        </p>
        <TimeLine />
      </section>
    </>
  );
};

export default FirstYear;
