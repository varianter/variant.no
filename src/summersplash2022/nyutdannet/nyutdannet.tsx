import LandingPage from './sections/forside';
import AfterApplying from './sections/hvaSkjerEtterSonaadsfristen';
import WhoAreWeSeeking from './sections/hvemSokerVi';
import FirstYear from './sections/hvordanSerFørsteÅretUt';
import WhyVariant from './sections/hvorforAkkurattVariant';
import Payment from './sections/lonn';
import Apply from './sections/søkJobb';

const Nyutdannet = () => {
  return (
    <>
      <LandingPage />
      <WhoAreWeSeeking />
      <WhyVariant />
      <Payment />
      <FirstYear />
      <AfterApplying />
      <Apply />
    </>
  );
};

export default Nyutdannet;
