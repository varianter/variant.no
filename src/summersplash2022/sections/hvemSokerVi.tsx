import style from './hvemSokerVi.module.css';

const WhoAreWeSeeking = ({ className }: { className: string }) => {
  const graduateNorwayMap = require('../img/graduate_norway_2024.svg');
  return (
    <section className={`${style.section} ${className}`}>
      <h2>Hvem søker vi?</h2>
      <div className={style.flex}>
        <p className={style.textAboveImg}>
          Vi søker 3 nyutdannede designere og 1 nyutdannet utvikler som
          engasjerer og motiverer, med oppstart 1. august 2024. Stillingene er
          fordelt på våre kontorer i Trondheim og Bergen, med 3 designere i
          Trondheim og 1 utvikler i Bergen. Det er ikke viktig hvilke verktøy
          eller språk du bruker. Det er derimot viktig at du bryr deg. Bryr deg
          om koden du skriver, bryr deg om brukeren du lager noe for, og bryr
          deg om kunden du leverer til.
        </p>
        <p>
          "Ansetter dere bare 4 nyutdannede", tenker du kanskje? En del av vår
          rekrutteringsstrategi har i lengre tid vært å ansette dyktige
          studenter til sommerjobb og gi noen av disse tilbud om fast jobb. I
          Oslo hadde vi som mål å ansette 6 nyutdannede og det målet har vi nådd
          ved at alle årets sommerjobbere takket ja til tilbud. Bergen hadde mål
          om å ansette 2 og har allerede ansatt en av sommerdesignerne sine. For
          Trondheims del har vi ansatt det vi har kapasitet til av utviklere,
          men har fortsatt plass til 3 designere.
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
            alt="Trondheim: 3 designere, Bergen: 1 utvikler"
            className={style.img}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSeeking;
