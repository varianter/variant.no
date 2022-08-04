import React from 'react';
import style from './index.module.css';
import { JobOrInternship } from './utils/utils';

const Content = ({ selected }: JobOrInternship) => {
  // Undefined for now. Need to be changed to 'internship' when index sends a prop.
  if (selected === 'internship') {
    return (
      <>
        <section>
          <span>
            <h1>Er du en av våre 10 sommervarianter i 2022?</h1>
            <h4> Sommerjobb i både Trondheim og Oslo!</h4>
          </span>
        </section>

        <section>
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
              at du lykkes. Er du nysgjerrig på hva tidligere sommervarianter
              har gjort? Les mer om{' '}
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

        <section>
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
                motiverer, med oppstart 1. august 2022. Stillingene er fordelt
                på våre kontorer i{' '}
                <a href="https://handbook.variant.no/avdelinger/trondheim">
                  Trondheim
                </a>{' '}
                og{' '}
                <a href="https://handbook.variant.no/avdelinger/oslo">Oslo</a>
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
