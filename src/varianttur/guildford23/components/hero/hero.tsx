import style from './hero.module.css';
import Heading from '../heading/heading';
import Navbar from '../navbar/navbar';
import HeroBlob from './heroBlob';

const Hero = () => {
  return (
    <div id='hero' className={style.heroContainer}>
      <div className={style.contentContainer}>
        <Heading />
        <Navbar />
      </div>
      <div className={style.imageContainer}>
        <div className={style.blobContainer}>
          <HeroBlob />
        </div>
        <div className={style.iconContainer}>
          <img src='/images/varianttur/happy-traveller.png' />
        </div>
      </div>
    </div>
  );
};

export default Hero; 