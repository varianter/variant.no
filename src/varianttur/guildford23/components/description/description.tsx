import style from './description.module.css';

const Description = () => {
  return (
    <div className={style.descriptionContainer}>
        <h2>Stop being so apple handome, this is going to be jolly good!</h2>
        <p>
          Hundre og <span className={style.importantText}>fem</span>ti mil sørover, litt vest og nedover ligger Guildford – en liten by i distriktet Surrey. Sjølberga med både slott og vinskole, shoppinggate og eget teater. Fritt for vær og vind(🤞), akkurat der vi skal bo på Harbour hotel. Her skal vi feire <span className={style.importantText}>5års</span> dagen til Variant🎉 
        </p>
        <p>
          Det blir litt faglig opplegg 🤓, vi skal spise digg mat 🍴, og dra ut på livlige, typisk engelske aktiviteter 🏰 🎢 🍷 🍸🌆. Vi har prøvd å ha noe for alle og enhver, både med mat og utflukter – håper det faller i smak. Det er også lagt inn tid på lørdagen til å ha litt frilek 🛝, forslag til påfunn finner du under praktisk info.
        </p>
        <p className={style.descriptionFooter}>
          <span>(“Og hva skjer med båtturen da?” tenker du,</span> 
          <br/>
          <span>og vi må faktisk skuffe dere: ingen båttur i år😱🚨)</span>
        </p>
    </div>
  );
};

export default Description;