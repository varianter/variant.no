import LandingPage from './sections/forside';
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
      <Apply />
    </>
  );
};

export default Nyutdannet;
