import style from './description.module.css';
import ImageBlob from './imageBlob';

const Description = () => {
  return (
    <div className={style.descriptionContainer}>
      <div className={style.description}>
        <div className={style.backgroundBlobContainer}>
        </div>
        <div className={style.textContainer}>
          <h2>Stop being so apple handsome,<br /> this is going to be jolly good!</h2>
          <div className={style.descriptionText}>
            <p>
              Hundre og <span className={style.importantText}>fem</span>ti mil sørover, litt vest og nedover ligger Guildford – en liten by i distriktet Surrey. Sjølberga med både slott og vinskole, shoppinggate og eget teater. Fritt for vær og vind(🤞), akkurat der vi skal bo på Harbour hotel. Her skal vi feire <span className={style.importantText}>5års</span> dagen til Variant🎉 
            </p>
            <p>
              Det blir litt faglig opplegg 🤓, vi skal spise digg mat 🍴, og dra ut på livlige, typisk engelske aktiviteter 🏰 🎢 🍷 🍸🌆. Vi har prøvd å ha noe for alle og enhver, både med mat og utflukter – håper det faller i smak. Det er også lagt inn tid på lørdagen til å ha litt frilek 🛝, forslag til påfunn finner du under praktisk info.
            </p>
            <p className={style.descriptionFooter}>
              <span className={style.descriptionFooterText}>(“Og hva skjer med båtturen da?” tenker du,</span> 
              <br/>
              <span className={style.descriptionFooterText}>og vi må faktisk skuffe dere: ingen båttur i år</span>
              <span>😱🚨</span>
              <span className={style.descriptionFooterText}>)</span>
            </p>
          </div>
        </div>
        <div className={style.imageBlobContainer}>
          <ImageBlob />
        </div>  
        <div className={style.imageContainer}>
          <img src='/images/varianttur/street.png' alt='Street' className={style.image} />
        </div>  
      </div>
    </div>
  );
};

export default Description;