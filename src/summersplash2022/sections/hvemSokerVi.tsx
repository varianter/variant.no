import style from './hvemSokerVi.module.css';

const WhoAreWeSeeking = ({ className }: { className: string }) => {
  const graduateNorwayMap = require('../img/graduate norway map_withoutoslo.svg');
  return (
    <section className={`${style.section} ${className}`}>
      <h2>Hvem søker vi?</h2>
      <div className={style.flex}>
        <p className={style.textAboveImg}>
          Vi søker 11 nyutdannede designere og utviklere som engasjerer og
          motiverer, med oppstart 1. august 2024. Stillingene er fordelt på våre
          kontorer i Trondheim og Bergen. Det er ikke viktig hvilke verktøy
          eller språk du bruker. Det er derimot viktig at du bryr deg. Bryr deg
          om koden du skriver, bryr deg om brukeren du lager noe for, og bryr
          deg om kunden du leverer til. I Oslo hadde vi som mål å ansette 6
          nyutdannede og det målet har vi nådd ved at alle årets sommerjobbere
          takket ja til tilbud.
        </p>

        <p className={style.textBelowImg}>
          Gjennom både strukturert og impulsiv kunnskapsutveksling lærer vi av
          hverandre og de vi jobber med for å bli flinkere, modigere og rausere.
          Vi elsker utfordringer hvor design- og teknologikompetanse finner
          sammen og tar plass i kundens kultur. Her oppdager vi stadig at en
          helhetlig tilnærming til utvikling og design skaper entusiasme og
          tilfører ekstra verdi. Variant er et selskap av og for de ansatte, der
          læreglede står i sentrum. Deler du også denne filosofien?
        </p>
        <div className={style.imgWrapper}>
          <img
            src={graduateNorwayMap}
            alt="Bergen: 2 utviklere, 1 designer, Trondheim : 4 utviklere
            4 designere"
            className={style.img}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSeeking;
