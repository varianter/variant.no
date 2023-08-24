import style from './hero.module.css';
import Heading from '../heading/heading';
import Navbar from '../navbar/navbar';

const Hero = () => {
  return (
    <div id='hero' className={style.heroContainer}>
      <div className={style.heroContent}>
        <Heading />
        <div className={style.imageContainer}>
          <div className={style.blobContainer}>
            <div className={style.blob}></div>
          </div>
          <div className={style.iconContainer}>
            <img src='/images/varianttur/happy-traveller.png' alt='Happy traveller' className={style.image} />
          </div>
        </div>
      </div>
      <div className={style.navbarContainer}>
        <Navbar />
      </div>
    </div>
  );
};

export default Hero; 