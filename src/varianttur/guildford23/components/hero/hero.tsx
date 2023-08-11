import style from './hero.module.css';
import Heading from '../heading/heading';
import Navbar from '../navbar/navbar';

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <Heading />
      <Navbar />
    </div>
  );
};

export default Hero; 