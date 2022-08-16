// import React from 'react';
import React, { useRef, useState } from 'react';
import NewVariants from './img/newVariants';
import Map from './img/map';
import style from './index.module.css';
import HandBooKPages from './utils/handBookPages';
// import HandBooKPages from './utils/handBookPages';
import { JobOrInternship } from './utils/utils';
import TimeLine from './img/tidslinje';
import ApplyAsDesigner from './img/søkSomDesigner';
import ApplyAsDesignerBiggerBlob from './img/søkSomDesignerBigBlob';
import ApplyAsDeveloper from './img/søkSomUtviklerBlob';
import ApplyAsDeveloperBiggerBlob from './img/søkeSomUtviklerBigBlob';

const Content = ({ selected }: JobOrInternship) => {
  const blobSection1 = require('./img/section1Blob.png');
  const summerstudent1 = require('./img/sommerstudent1.png');
  const Marius = require('./img/Marius.png');

  const [whichButtonSelected, setWhichButtonSelected] = useState('');

  const sommerjobbHandling = useRef<HTMLImageElement>(null);
  const sommerjobbereMening = useRef<HTMLImageElement>(null);
  const hvorforVariant = useRef<HTMLImageElement>(null);
  const etterSoknad = useRef<HTMLImageElement>(null);
  const sokSommerjobb = useRef<HTMLImageElement>(null);

  const goToRef = (ref: React.RefObject<HTMLImageElement>) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Undefined for now. Need to be changed to 'internship' when index sends a prop.
  if (selected === 'internship') {
    return (
      <>
        {/* Navigation bar on the right side */}
        <div className={style.navigationSlider}>
          <button
            className={style.navigationButton1}
            onClick={() => goToRef(sommerjobbHandling)}
          >
            Hva går sommerjobben ut på
          </button>
          <button
            className={style.navigationButton2}
            onClick={() => goToRef(sommerjobbereMening)}
          >
            Hva mener årets sommerstudenter?
          </button>
          <button
            className={style.navigationButton3}
            onClick={() => goToRef(hvorforVariant)}
          >
            Hvorfor jobbe i Variant?
          </button>
          <button
            className={style.navigationButton4}
            onClick={() => goToRef(etterSoknad)}
          >
            Hva skjer etter søknadsfristen?
          </button>
          <button
            className={style.navigationButton5}
            onClick={() => goToRef(sokSommerjobb)}
          >
            Søk sommerjobb
          </button>
        </div>
        <section className={style.section1}>
          <span className={style.searchNewVariants}>
            <NewVariants />
          </span>
          <br />
          <div className={style.underHeader}>
            {/* middlertidig link. usikker på hvilken vi skal bruke */}
            <h4 className={style.h4Section1}>Søk innen 4. Oktober</h4>
            <a href="https://www.variant.no/jobs">Søk her</a>
            <p>Eller</p>
            <p>naviger med menyen</p>
          </div>
          <span>
            <img
              className={style.imageBlob1}
              src={blobSection1}
              alt="To fra Variant"
            />
          </span>
        </section>

        <section className={style.section2}>
          <div>
            <h3 className={style.section2Heading}>
              Hva går sommerjobben ut på ?
            </h3>
            <p className={style.section2Paragraph}>
              En sommerjobb i Variant er en fin mulighet til å anvende det du
              har lært på skolen i praksis. Det forventes ikke at du er utlært,
              men at du ønsker å lære mer. I et tverrfaglig team bestående av
              designere og utviklere kommer du til å jobbe på et av de spennende
              kundeprosjektene vi har. Underveis får du god oppfølging og
              tilrettelegging fra erfarne konsulenter som ønsker at du lykkes.
              Sjekk ut denne bloggposten for å lese mer om hva årets
              sommerstudenter i Oslo jobbet med.
            </p>
            <p className={style.section2Paragraph}>
              I 2023 tilbyr vi sommerjobb i både Trondheim, Oslo og Bergen, til
              henholdsvis seks, fem og to studenter. Hvor du vil jobbe bestemmer
              du naturligvis selv. Sommerjobben varer i fire + to uker med tre
              uker ferie i mellomtiden.
            </p>

            <p className={style.section2Paragraph}>
              I Variant liker vi åpnenhet. Det betyr at du selvsagt ikke trenger
              å lure på hvordan kontrakten din vil se ut for sommeren, den
              ligger nemlig åpent og tilgjengelig på våre nettsider. Timelønnen
              trenger du heller ikke å lure på, den er på 265 kr. Under “Hvorfor
              jobbe i Variant?” ned kan du lese mer om hva Variant står for og
              tilbyr.
            </p>
          </div>
          <div className={style.officeMap}>
            <Map />
          </div>
        </section>

        <section className={style.section3}>
          <h3>Hva mener årets sommerstudenter?</h3>
          <div className={style.summerstudent1}>
            <img
              className={style.summerstudent1picture}
              src={summerstudent1}
              alt=""
            />
            <p className={style.summerstudent1Paragraph}>
              “Teamet hos kunden stilte gjerne til rådgivning uansett hva.[...]
              Jeg følte man ble en del av firmaet selv om det «bare» var en
              sommerjobb. [...] Utrolig hyggelige kollegaer som ønsker å hjelpe
              der man kan og løfte hverandre frem.”
            </p>
          </div>
        </section>

        <section className={style.whyWorkAtVariant} ref={hvorforVariant}>
          <div className={style.handbook}>
            <div className={style.handbookChildButton}>
              <h3 className={style.positionTextSubLeft}>
                Hvorfor akkurat Variant
              </h3>
              <p className={style.positionTextLeft}>
                Variant er en variant av et konsulentselskap som er raust, åpent
                og læreglad. Disse verdiene ligger til grunn for hvordan vi
                møter hverandre, våre kunder og alle andre. I håndboken vår kan
                du lese om hvordan ting gjøres i Variant, hva vi prøver å oppnå
                og hvorfor vi tenker som vi gjør. Under kan du sjekke ut er et
                par utvalgte temaer.
              </p>

              <button
                className={style.handbookButton1}
                onClick={() => setWhichButtonSelected('Formmal og verdier')}
              >
                Formål og verdier
              </button>
              <button
                className={style.handbookButton2}
                onClick={() => setWhichButtonSelected('Tillit og ansvar')}
              >
                Tillit og ansvar
              </button>
              <button
                className={style.handbookButton3}
                onClick={() => setWhichButtonSelected('Variantdag')}
              >
                Variantdag
              </button>
              <button
                className={style.handbookButton4}
                onClick={() => setWhichButtonSelected('Miljofyrtarn')}
              >
                Miljøfyrtårn
              </button>
              <button
                className={style.handbookButton5}
                onClick={() => setWhichButtonSelected('Fleksitid')}
              >
                Fleksitid
              </button>

              <h3>Hva er Viktigst for deg?</h3>
              <a href="https://handbook.variant.no">
                Sjekk ut hele håndboka vår her
              </a>
            </div>
            <div className={style.flexbox}>
              <HandBooKPages selectedButton={whichButtonSelected} />
            </div>
          </div>

          <div></div>
        </section>

        <section className={style.section5}>
          <h3 className={style.section5Heading}>
            Hva skjer etter søknadsfristen?
          </h3>
          <div className={style.section5ParagraphLeft}>
            <div>
              <p className={style.section5Paragraph}>
                Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
                unaturlig situasjon, og man blir ikke godt kjent med hverandre.
                Etter at vi har vurdert alle søknadene inviterer vi utvalgte
                kandidater til en uformell samtale. Dette er det vi kaller
                kaffeprat. Hensikten med samtalen er å finne ut om begge parter
                har felles verdier og mål. Og nei – du er selvsagt ikke nødt til
                å drikke kaffe.
              </p>
              <p className={style.section5Paragraph}>
                Dersom du får jobbtilbud og takker ja, inkluderes du straks i
                Variant på lik linje med de faste ansatte. Du får tilgang til
                vår Slack, og mulighet til å delta på alle faglige og sosiale
                arrangementer. Dette inkluderer blant annet spill- og
                fagkvelder, nyttårskalas og variantdager, som er fine muligheter
                til å bli bedre kjent før sommerjobben starter i juni.
              </p>
            </div>
            <div className={style.section5ParagraphRight}>
              <h4>Søknadstips:</h4>
              <p className={style.section5Paragraph}>
                Vi setter pris på en søknad med CV, søknadsbrev og
                karakterutskrift. Det viktigste for oss er å få et helhetlig
                bilde. Både av deg som person, din eksisterende kompetanse og
                dine ambisjoner. Så hvem er du og hvorfor søker du sommerjobb i
                Variant? Vi trenger mennesker som bryr seg om å skape en bedre
                hverdag. Er det deg?
              </p>
            </div>
          </div>
          <div className={style.timeLine}>
            <TimeLine />
          </div>
        </section>

        <section className={style.section6}>
          <div>
            <h3>Søk sommerjobb</h3>
            <p className={style.section6Paragraph}>
              Vi håper du søker, og vi ser frem til å bli bedre kjent med deg.
              Har du spørsmål om sommerjobben eller Variant? Ta gjerne kontakt
              med meg.
            </p>
            <p>- Marius Krakeli, Utvikler og rekrutteringsansvarlig</p>
            <div className={style.contactInfo}>
              <div>
                <p className={style.section6Underline}>41 63 75 72</p>
              </div>
              <div>
                <p> | </p>
              </div>
              <div>
                <p className={style.section6Underline}>mk@variant.no</p>
              </div>
            </div>
          </div>
          <img className={style.Marius} src={Marius} alt="Bilde av Marius" />
          <div className={style.ApplyAsDesignerDiv}>
            <div className={style.applyAsDesigner}>
              <a href="https://www.variant.no/jobs">
                <ApplyAsDesigner />
              </a>
            </div>
            <div className={style.applyAsDesignerBig}>
              <a href="https://www.variant.no/jobs">
                <ApplyAsDesignerBiggerBlob />
              </a>
            </div>
          </div>
          <div className={style.ApplyAsDeveloperDiv}>
            <div className={style.ApplyAsDeveloper}>
              <a href="">
                <ApplyAsDeveloper />
              </a>
            </div>
            <div className={style.ApplyAsDeveloperBig}>
              <a href="">
                <ApplyAsDeveloperBiggerBlob />
              </a>
            </div>
          </div>
        </section>
      </>
    );
  } else if (selected === 'job') {
    return (
      <>
        <section>
          <h1>Er du en av de x nyutdannede varrianter i 2023</h1>
        </section>

        <section>
          <h3>Hvem søker vi?</h3>
          <div>
            <p>
              Vi søker 4 nyutdannede designere og utviklere som engasjerer og
              motiverer, med oppstart 1. august 2022. Stillingene er fordelt på
              våre kontorer i{' '}
              <a href="https://handbook.variant.no/avdelinger/trondheim">
                Trondheim
              </a>{' '}
              og <a href="https://handbook.variant.no/avdelinger/oslo">Oslo</a>
              med henholdsvis 1 designer og 1 utvikler i hver by. Det er ikke
              viktig hvilke verktøy eller språk du bruker. Det er langt
              viktigere at du bryr deg. Bryr deg om koden du skriver, bryr deg
              om brukeren du lager noe for, bryr deg om kunden du leverer til.
            </p>
          </div>
        </section>
      </>
    );
  } else {
    return <h1>ingenting</h1>;
  }
};

export default Content;
