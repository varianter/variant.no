import style from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import OfficeMap2 from '../img/kontorKart2';
const WhoAreWeSeeking = () => {
  return (
    <section className={style.section2}>
      <h3 className={style.heading}>Hvem søker vi?</h3>
      <div className={style.section2Flex}>
        <div className={style.section2Text}>
          <p>
            Vi søker 7 nyutdannede designere og utviklere som engasjerer og
            motiverer, med oppstart 1. august 2023. Stillingene er fordelt på
            våre kontorer i Trondheim, Oslo og Bergen. Det er ikke viktig hvilke
            verktøy eller språk du bruker. Det er derimot viktig at du bryr deg.
            Bryr deg om koden du skriver, bryr deg om brukeren du lager noe for,
            og bryr deg om kunden du leverer til.
          </p>
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
        <OfficeMap2 />
      </div>
    </section>
  );
};

export default WhoAreWeSeeking;