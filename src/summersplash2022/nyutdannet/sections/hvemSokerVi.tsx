import { useEffect, useState } from 'react';
import style from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
const WhoAreWeSeeking = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const graduateNorwayMap = require('../img/graduate norway map.svg')

  const handleResize = () => {
    if (window.matchMedia('(max-width: 500px)').matches) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    if (window) {
      if (window.matchMedia('(max-width: 500px)').matches) {
        setIsDesktop(false);
      }
      window.addEventListener('resize', handleResize);
    }
  }, []);
  return (
    <section className={style.section2}>
      <h2 className={style.heading}>Hvem søker vi?</h2>
      <div className={style.section2Flex}>
        <div className={style.section2Text}>
          <p>
            Vi søker 17 nyutdannede designere og utviklere som engasjerer og
            motiverer, med oppstart 1. august 2024. Stillingene er fordelt på
            våre kontorer i Trondheim, Oslo og Bergen. Det er ikke viktig hvilke
            verktøy eller språk du bruker. Det er derimot viktig at du bryr deg.
            Bryr deg om koden du skriver, bryr deg om brukeren du lager noe for,
            og bryr deg om kunden du leverer til.
          </p>
          {!isDesktop ? <img src={graduateNorwayMap} alt='Bergen: 2 utviklere, 1 designer, Trondheim : 4 utviklere
          4 designere, Oslo : 3 utviklere 3 designere ' width='100%' /> : <></>}

          <p>
            Gjennom både strukturert og impulsiv kunnskapsutveksling lærer vi av
            hverandre og de vi jobber med for å bli flinkere, modigere og
            rausere. Vi elsker utfordringer hvor design- og teknologikompetanse
            finner sammen og tar plass i kundens kultur. Her oppdager vi stadig
            at en helhetlig tilnærming til utvikling og design skaper entusiasme
            og tilfører ekstra verdi. Variant er et selskap av og for de
            ansatte, der læreglede står i sentrum. Deler du også denne
            filosofien?
          </p>
        </div>
        {isDesktop ? <img src={graduateNorwayMap} alt='Bergen: 2 utviklere, 1 designer, Trondheim : 4 utviklere
          4 designere, Oslo : 3 utviklere 3 designere '/> : <></>}
      </div>
    </section>
  );
};

export default WhoAreWeSeeking;
