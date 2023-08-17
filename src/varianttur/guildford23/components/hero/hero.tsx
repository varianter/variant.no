import style from './hero.module.css';
import Heading from '../heading/heading';
import Navbar from '../navbar/navbar';
import HeroBlob from './heroBlob';

const Hero = () => {
  return (
    <div id='hero' className={style.heroContainer}>
      <div className={style.contentContainer}>
        <Heading />
        <div className={style.navbarContainer}>
          <Navbar />
        </div>
      </div>
      <div className={style.imageContainer}>
        <div className={style.blobContainer}>
          <HeroBlob />
        </div>
        <div className={style.iconContainer}>
          <img src='/images/varianttur/happy-traveller.png' alt='Happy traveller' />
        </div>
      </div>
    </div>
  );
};

export default Hero; 