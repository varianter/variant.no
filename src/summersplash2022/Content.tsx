// import React from 'react';
import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.css';
import HandBooKPages from './utils/handBookPages';
// import HandBooKPages from './utils/handBookPages';
import { JobOrInternship, WhichButtonPressed } from './utils/utils';

const Content = ({ selected }: JobOrInternship) => {
  const blobSection1 = require('./img/Vector.png');
  const blobSection2 = require('./img/hva går sommerjobben ut på.png');
  // const upArrow = require('./img/Vector-2.png');
  // const downArrow = require('./img/Vector-3.png');
  const map = require('./img/kart.png');
  const jenga = require('./img/jenga.png');
  const pinkBlobb = require('./img/rosaBlobb.png');
  const Even = require('./img/Even.png');
  const searchNewVariants = require('./img/vi søker nye varianter.png');

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
          {/* <img
            className={style.arrow}
            src={upArrow}
            alt="arrow up"
            height="30px"
            width="30px"
          /> */}
          <button className={style.navigationButton1} onClick={() => goToRef(sommerjobbHandling)}>
            Hva går sommerjobben ut på
          </button>
          <button className={style.navigationButton2} onClick={() => goToRef(sommerjobbereMening)}>
            Hva mener årets sommerstudenter?
          </button>
          <button className={style.navigationButton3} onClick={() => goToRef(hvorforVariant)}>
            Hvorfor jobbe i Variant?
          </button>
          <button className={style.navigationButton4} onClick={() => goToRef(etterSoknad)}>
            Hva skjer etter søknadsfristen?
          </button>
          <button className={style.navigationButton5} onClick={() => goToRef(sokSommerjobb)}>
						Søk sommerjobb 
					</button>

          {/* <img
            className={style.arrow}
            src={downArrow}
            alt="arrow down"
            height="30px"
            width="30px"
          /> */}
        </div>
        <section>
          <span>
            <img className={style.searchNewVariants} src={searchNewVariants} />
          </span>
          <span>
            {/* middlertidig link. usikker på hvilken vi skal bruke */}
            <a
              className={style.marginLeftLess}
              href="https://www.variant.no/jobs"
            >
              Søk her
            </a>
            <p className={style.marginTopMore}>Eller</p>
            <p className={style.marginTopMore}>naviger med menyen</p>
          </span>
          <span>
            <img
              className={style.imageBlob1}
              src={blobSection1}
              alt="To fra Variant"
            />
          </span>
        </section>

        <section>
          <img
            className={style.imageBlob2}
						ref={sommerjobbHandling}
            src={blobSection2}
            alt="green blobb"
          />
          <div className={style.positionTextLeft}>
            <p>
              En sommerjobb i Variant er en fin mulighet til å anvende det du
              har lært på skolen i praksis. Det forventes ikke at du er utlært,
              men at du ønsker å lære mer. I tverrfaglige team bestående av
              designere og utviklere kommer dere til å jobbe sammen på et av de
              spennende kundeprosjektene vi har. Underveis får du god oppfølging
              og tilrettelegging fra erfarne konsulenter som ønsker at du
              lykkes.
            </p>
            <p>
              I 2022 tilbyr vi sommerjobb i både Trondheim og Oslo, til
              henholdsvis seks og fire studenter. Hvor du vil jobbe bestemmer du
              naturligvis selv. Sommerjobben varer i fire + to uker med tre uker
              ferie i mellomtiden, og vil gi god innsikt i hva det vil si å
              jobbe i konsulentbransjen. Du kommer til å lære masse nyttig,
              samtidig som du har det gøy med de andre variantene.
            </p>
          </div>
          <img
            className={style.officeMap}
            src={map}
            alt="kart over kontorene i norge"
          />
        </section>

        <section className={style.jenga}>
          <img src={jenga} alt="jenga spill" />
        </section>

        <section className={style.whyWorkAtVariant} ref={hvorforVariant}>
          <h3>Hvorfor jobbe i Variant</h3>
					<p className={style.positionTextLeft}>
					Variant er en variant av et konsulentselskap som er raust, åpent 
					og læreglad. Disse verdiene ligger til grunn for hvordan vi møter 
					hverandre, våre kunder og alle andre. I håndboken vår kan du lese 
					om hvordan ting gjøres i Variant, hva vi prøver å oppnå og 
					hvorfor vi tenker som vi gjør. Under kan du sjekke ut er et par 
					utvalgte temaer. 
					</p>
          <div className={style.handbook}>
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
          </div>
          <div>
            <HandBooKPages selectedButton={whichButtonSelected} />
          </div>
          <div>
            <h3>Hva er Viktigst for deg?</h3>
            <a href="https://handbook.variant.no">
              Sjekk ut hele håndboka vår her
            </a>
          </div>
        </section>
        <section>
          <img src={pinkBlobb} ref={etterSoknad}  alt="pink blobb" />
          <div>
            <h3>Hva skjer etter søknadsfristen?</h3>
            <p>
              Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
              unaturlig situasjon, og man blir ikke godt kjent med hverandre.
              Etter at vi har vurdert alle søknadene inviterer vi utvalgte
              kandidater til en uformell samtale. Dette er det vi kaller
              kaffeprat. Hensikten med samtalen er å finne ut om begge parter
              har felles verdier og mål. Og nei – du er selvsagt ikke nødt til å
              drikke kaffe.
            </p>
            <p>
              Dersom du får jobbtilbud og takker ja, inkluderes du straks i
              Variant på lik linje med de fast ansatte. Du får tilgang til vår
              Slack, og mulighet til å delta på alle faglige og sosiale
              arrangementer. Dette inkluderer blant annet spill- og fagkvelder,
              nyttårskalas og variantdager, som er fine muligheter til å bli
              bedre kjent før sommerjobben starter i juni.
            </p>
          </div>
          <img src={Even} alt="picture of Even" />
        </section>

        {/* Gammelt */}
        <section className={style.underDev}>
          <span>Søk senest 3. oktober</span>
          <h4>Kontorer både i Trondheim og Oslo</h4>
        </section>

        <section className={style.positionRight}>
          <h3>Hva går sommerjobben ut på</h3>
          <div>
            <p>
              En sommerjobb i Variant er en fin mulighet til å anvende det du
              har lært på skolen i praksis. Det forventes ikke at du er utlært,
              men at du ønsker å lære mer. Det viktigste er at du bryr deg. Bryr
              deg om koden du skriver, bryr deg om brukeren du designer noe for,
              bryr deg om kunden du leverer til. I tverrfaglige team bestående
              av designere og utviklere kommer dere til å jobbe sammen på et av
              de spennende kundeprosjektene vi har. Underveis får du god
              oppfølging og tilrettelegging fra erfarne konsulenter som ønsker
              at du. Er du nysgjerrig på hva tidligere sommervarianter har
              gjort? Les mer om{' '}
              <a href="https://blog.variant.no">sommerprosjektene</a>.
            </p>
          </div>
        </section>

        <section className={style.positionLeft}>
          <div>
            <p>
              I 2022 tilbyr vi sommerjobb i både{' '}
              <a href="https://handbook.variant.no/avdelinger/trondheim">
                Trondheim
              </a>{' '}
              og <a href="https://handbook.variant.no/avdelinger/oslo">Oslo</a>,
              til henholdsvis 6 og 4 studenter. Hvor du vil jobbe bestemmer du
              naturligvis selv. Sommerjobben varer i fire + to uker med tre uker
              ferie imellom, og vil gi god innsikt i hva det vil si å jobbe i
              konsulentbransjen. Du kommer til å lære masse nyttig, samtidig som
              du har det gøy sammen med oss andre varianter.
            </p>
          </div>
        </section>

        <section className={style.positionRight}>
          <h3>Hvorfor jobbe i Variant?</h3>
          <div>
            <p>
              Variant er en variant av et konsulentselskap som er{' '}
              <a href="https://handbook.variant.no/handbook#form%C3%A5l-og-verdier">
                raust, åpent og læreglad
              </a>
              . Disse verdiene ligger til grunn for hvordan vi møter hverandre
              og våre kunder. Vi er en gjeng hyggelige og dyktige{' '}
              <a href="https://www.variant.no/ansatte">mennesker</a> som ønsker
              å både tilegne og dele kunnskap. Sammen skaper vi løsninger som
              tjener samfunnet.
            </p>
            <p>
              I Variant har alle innsyn i alt - selv som sommerstudent. Derfor
              trenger du selvsagt ikke å lure på hvordan{' '}
              <a href="https://avtaler.variant.no/avtaler/ansettelse-sommerjobb.html">
                kontrakten din
              </a>{' '}
              vil se ut for sommeren. Den ligger åpent og tilgjengelig på våre
              nettsider. Lønna trenger du heller ikke å lure på. Du får 266,66
              kr timen, og til sammen 59998 og femti øre. Perfekt rett under
              fribeløpet! Dersom du har lyst til å lese mer om hva Variant står
              for kan du sjekke ut vår egen{' '}
              <a href="https://handbook.variant.no/handbook">håndbok</a>.
            </p>
          </div>
        </section>

        <section className={style.positionLeft}>
          <div>
            <h4>Sommerstudentene i 2022</h4>
            <img src="" alt="" />
            <h4>Bilder går her feks</h4>
          </div>
        </section>

        <section className={style.positionRight}>
          <h3>Hva skjer etter søknadsfristen</h3>
          <div>
            <p>
              Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
              unaturlig situasjon, og man blir ikke godt kjent med hverandre.
              Etter at vi har vurdert alle søknadene inviterer vi utvalgte
              kandidater til en uformell samtale. Dette er det vi kaller
              kaffeprat. Hensikten med samtalen er å finne ut om begge parter
              har felles verdier og mål. Og nei – du er selvsagt ikke nødt til å
              drikke kaffe.
            </p>

            <p>
              Dersom du får jobbtilbud og takker ja, inkluderes du straks i
              Variant på lik linje med de fast ansatte. Du får tilgang til vår
              Slack, og mulighet til å delta på alle faglige og{' '}
              <a href="https://handbook.variant.no/quality_manual#sosiale-aktiviteter">
                sosiale arrangementer
              </a>
              . Dette inkluderer blant annet spill- og fagkvelder, nyttårskalas
              og{' '}
              <a href="https://handbook.variant.no/handbook#variantdag">
                variantdager
              </a>
              , som er fine muligheter til å bli bedre kjent før sommerjobben
              starter i juni.
            </p>
          </div>
        </section>

        <section className={style.positionLeft}>
          <p>TIDSLINJE. FRA SØKNAD TIL SLUTT PROSESS</p>
        </section>

        <section className={style.positionRight}>
          <h3>Hva ser vi etter i en søknad?</h3>
          <p>
            Selv om vi liker å skille oss ut, setter vi pris på en søknad med
            CV, søknadsbrev og karakterutskrift. Det viktigste for oss er å få
            et helhetlig bilde. Både av deg som person, din eksisterende
            kompetanse og dine ambisjoner. Så hvem er du, og hvorfor søker du
            sommerjobb i Variant? Vi trenger mennesker som bryr seg om å skape
            en bedre hverdag. Er det deg?
          </p>
        </section>

        <section ref={sokSommerjobb}>
          <h3>Søk sommerjobb</h3>
          <h3>Søk som designer</h3>
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
