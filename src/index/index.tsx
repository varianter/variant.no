import React from "react";
import Layout from "src/layout";

import style from "./index.module.css";

const Home = () => {
  return (
    <Layout>
      <section className={style.omVariant}>
        <h2 className={style.omVariant__title}>Raus, åpen og læreglad</h2>
        <p className={style.omVariant__p1}>
          IT handler ikke om designskisser, linjer av kode eller infrastruktur,
          men om samarbeid og forståelse. IT bør være åpenhet, ærlighet og
          endringsvilje.
        </p>

        <img
          className={style.omVariant_image1}
          src={require("./images/om-variant-1.png")}
          alt="Bilde av Kristin som sitter i en sofa"
        />

        <img
          className={style.omVariant_image2}
          src={require("./images/om-variant-2.png")}
          alt="Bilde av Tonje og Odd Morten som sitter forran gamle Digs"
        />

        <div className={style.omVariant__us}>
          <h3>Der er vi!</h3>
          <p>
            En ny variant av et konsulentselskap som er raust, åpent og læreglad.
          </p>
        </div>
      </section>

      <section className={style.join}>
        <h2>Bli en Variant!</h2>
        <p>
          For å kunne lage gode løsninger trenger vi forskjellige mennesker med
          forskjellig perspektiv. Vi trenger flinke folk med engasjerte stemmer.
        </p>

        <p>
          <strong>Det betyr deg.</strong>
        </p>
        <a href="https://jobs.variant.no" title="Les mer om jobb i Variant">
          Bli en Variant
        </a>

        <p>
          Vi har mange flotte kolleger, et fint hus,{" "}
          <a href="https://handbook.variant.no" title="Variant Håndbok">
            gode (og åpne) vilkår
          </a>{" "}
          og{" "}
          <a href="https://www.variant.no/kalkulator" title="Lønnskalkulator">
            god lønn
          </a>
          . Ikke minst har vi mange spennende prosjekter.
        </p>
      </section>

      <section className={style.services}>
        <img
          className={style.services_image1}
          src={require("./images/bli-en-variant.png")}
          alt="Bilde av gladfisen Jacob"
        />

        <article>
          <h3>Design</h3>

          <p>
            Et begrep som betyr mye og som kan utgjøre like mye for et produkt
            eller prosjekt. Om det er brukeropplevelse-, grafisk- eller
            tjeneste-design, vil vi kunne bidra.
          </p>
        </article>

        <article>
          <h3>Utvikling</h3>

          <p>
            Enten du trenger en eller flere utviklere kan vi hjelpe med
            engasjerte og kunnskapsrike mennesker. Vi leverer assistanse til
            skysetting, utvikling av nye systemer og produkter og ekspertise på
            tradisjonell systemutvikling. Ta kontakt for å høre mer om hvordan
            vi kan hjelpe.
          </p>
        </article>

        <article>
          <h3>Salg</h3>

          <p>
            Salg er vanskelig. Det krever kunnskap om marked, erfaring i
            tilbudsskriving, evne til å generere tekst, pedagogikk, teknisk
            kompetanse og ikke minst kapasitet. Hør hvordan vi kan bistå i en
            slik prosess for dere.
          </p>
        </article>

        <article>
          <h3>Kursing og rådgivning</h3>

          <p>
            Utvikling er et felt i konstant endring, og det kan kreve mye å
            følge med på det som skjer. Men det trenger ikke være slik.
            Erfaringer er også noe som kan overføres og deles. Vi bistår med å
            gjøre grupper, enkeltpersoner og prosjekt mer oppdatert, mer
            effektive og flinkere. Vi tilbyr både ferdige kursopplegg og
            presentasjoner samt skreddersydde opplegg for din organisasjon.
          </p>
        </article>
      </section>

      <section className={style.blog}>
        <div className={style.blog__text}>
          <h2>Våre ytringer</h2>

          <a href="http://variant.blog">
            Sjekk oss ut på
            <img
              className={style.blog__mediumLogo}
              src={require("./images/medium.svg")}
              alt="Logo of Medium"
            />
          </a>
        </div>

        <img
          className={style.blog_image1}
          src={require("./images/blob-ytringer.svg")}
        />
      </section>

      <section className={style.cases}>
        <article className={style.cases__case}>
          <div className={style.cases__caseContent}>
            <h3>Mobilitet for Trøndelag</h3>

            <p>
              AtB ønsker å endre virksomheten til å levere mobilitet. I det
              gjelder også å bidra til mer bærekraftig transport og et lavere
              CO2-avtrykk gjennom kollektiv reising og utfasing av fossildrevne
              transportmidler. Dette synes vi er så utrolig kult å være med på.
            </p>

            <p>
              Mikael, Petter, Magnus og Christian jobber sammen med AtB for å
              oppnå dette. De skal blant annet lage nye mobilapper, ny
              nettbutikk, ny sanntidsvisning og bransjens beste ruteplanlegger.
            </p>
          </div>
          <figure>
            <img
              src={require("./images/case-atb.png")}
              alt="Mikael som jobber for AtB i forgrunn med AtBs busser i bakgrunnen"
            />
          </figure>
        </article>

        <article className={style.cases__case}>
          <div className={style.cases__caseContent}>
            <h3>TrønderEnergi - i fronten av en ny energihverdag</h3>

            <p>
              TrønderEnergi opererer i en bransje som virkelig er i endring.
              Elektrifisering i kombinasjon med økt andel fornybar energi fra
              vindproduksjon krever mye større grad av fleksibilitet og
              intelligens i styring av kraftproduksjon og handel på
              kraftmarkedet. Her er TrønderEnergi pionerer. Tonje, Magnus og
              Kristin er så heldige å få bidra til realisering av ulike
              prosjekter som design av fysiske driftsmiljø, tjenestedesign for
              AI-løsninger og prosjektkommunikasjon.
            </p>
          </div>
          <figure>
            <img
              src={require("./images/case-ten.png")}
              alt="Mikael som jobber for AtB i forgrunn med AtBs busser i bakgrunnen"
            />
          </figure>
        </article>

        <article className={style.cases__case}>
          <div className={style.cases__caseContent}>
            <h3>
              Ren Røros - lokal forretningsutvikling med globale ambisjoner
            </h3>

            <p>
              Det som tidligere het Røros Elektrisitetsverk AS med alle sine
              datterselskap, har gjennom de to siste årene gjennomgått en
              voldsom endringsprosess. Selskapet har rigget seg til å bli Ren
              Røros – en organisasjon som skal drive frem elektrifisering,
              fornybar energiproduksjon og ny bærekraftig klimateknologi. Det
              hele gjennom en helhetlig forretningsstruktur som fokuserer på
              klima, brukerreiser og interne synergieffekter. I prosessen har
              Tonje, Ellen og Magnus bistått med forretningsdesign,
              strategiarbeid, tjenestedesign, selskapsidentitet og kulturbygging
              i tett samarbeid med de ansatte. Ren Røros hevder med ordene i
              behold at “Vi har både kunnskap om tilstanden jorda vår er i, og
              kompetanse til å gjøre noe med det”. Vi er stolte over å jobbe med
              kunder som våger å investere i fremtidens klimaløsninger!
            </p>
          </div>
          <figure>
            <img
              src={require("./images/case-ren.png")}
              alt="Mikael som jobber for AtB i forgrunn med AtBs busser i bakgrunnen"
            />
          </figure>
        </article>
      </section>
    </Layout>
  );
};

export default Home;
