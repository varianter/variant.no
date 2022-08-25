import LandingPage from './sections/forside';
import style from '../index.module.css';
import FirstYear from './sections/hvordanSerFørsteÅretUt';

const Nyutdannet = () => {
  return (
    <div className={style.scrollContainer} id="scrollContainer">
      <LandingPage />
      <FirstYear />
    </div>
  );
};

export default Nyutdannet;
