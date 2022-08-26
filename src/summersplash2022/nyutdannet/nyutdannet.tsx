import LandingPage from './sections/forside';
import AfterApplying from './sections/hvaSkjerEtterSonaadsfristen';
import WhoAreWeSeeking from './sections/hvemSokerVi';
import FirstYear from './sections/hvordanSerFørsteÅretUt';
import WhyVariant from './sections/hvorforAkkurattVariant';
import Payment from './sections/lonn';
import Apply from './sections/søkJobb';
import style from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';

const Nyutdannet = () => {
  return (
    <>
      <div className={style.scrollContainer}>
        <LandingPage />
        <WhoAreWeSeeking />
        <WhyVariant />
        <Payment />
        <FirstYear />
        <AfterApplying />
        <Apply />
      </div>
    </>
  );
};

export default Nyutdannet;
