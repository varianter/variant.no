import React, { useRef } from 'react';
import style from './index.module.css';
import Link from 'next/link';
import { and } from 'src/utils/css';
import { Calculator } from './graduate-calculator';

interface ContentProps {
  mode: 'job' | 'internship';
}

export default function ContentComponent({ mode }: ContentProps) {
  const endRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    endRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        key={0}
        className={and(style.firstSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#028377' : '#FAD2E2'}
      >
        {mode === 'internship' && (
          <section>
            <section className={style.arrowContainer}>
              <h4>
                Sommerjobb i både Trondheim og Oslo!
                <span aria-label="konfetti-emoji">🎉</span>
              </h4>
              <img
                className={style.arrow}
                aria-label="Pil som forklarer at Variant nå har kontorer i både Trondheim og Oslo"
                src={require('./images/pil.svg')}
              />
            </section>

            <span className={style.deadline}>Søk senest 3. oktober</span>
            <h1>Er du en av våre 10 sommervarianter i 2022?</h1>

            <a className={style.applyLink} onClick={scrollToBottom}>
              <div className={style.blobButtons}>
                <img
                  className={style.buttonBlob}
                  src={require('./images/blobs/Topblob_crop.png')}
                  alt="Søk nå knapp"
                />
                <h3 className={style.layerText_dark}>
                  Søk nå{' '}
                  <span role="img" aria-label="Postkasse">
                    📬
                  </span>
                </h3>
              </div>
            </a>
          </section>
        )}

        {mode === 'job' && (
          <section className={style.white}>
            <section className={style.arrowContainer}>
              <h4>
                Kontorer i både Trondheim og Oslo!{' '}
                <span aria-label="konfetti-emoji">🎉</span>
              </h4>
              <img
                className={style.arrow}
                aria-label="Pil som forklarer at Variant i 2022 tilbyr fast jobb både i Trondheim og Oslo"
                src={require(mode === 'job'
                  ? './images/hvit-pil.svg'
                  : './images/pil.svg')}
              />
            </section>

            <span className={style.deadline}>Søk senest 3. oktober</span>
            <h1>Er du en av våre 4 nyutdannede varianter i 2022?</h1>

            <a className={style.applyLink} onClick={scrollToBottom}>
              <div className={style.blobButtons}>
                <img
                  className={style.buttonBlob}
                  src={require('./images/blobs/Topblob_ny_crop.png')}
                  alt="Søk nå knapp"
                />
                <h3 className={style.layerText}>
                  Søk nå{' '}
                  <span role="img" aria-label="Postkasse">
                    📬
                  </span>
                </h3>
              </div>
            </a>
          </section>
        )}

        <img
          className={style.imageBlob}
          src={require(mode === 'job'
            ? './images/utvikler-jacob.png'
            : './images/pekende.png')}
          alt={
            mode === 'job'
              ? 'Bilde av geipende Jacob'
              : 'Bilde av engasjert sommerstudent'
          }
        />
      </section>

      <section
        key={1}
        className={and(style.secondSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#FFDCD7' : '#423D89'}
      >
        {mode === 'internship' && (
          <section className={and(style.leftText, style.white)}>
            <h3>Hva går sommerjobben ut på?</h3>
            <div>
              <p>
                En sommerjobb i Variant er en fin mulighet til å anvende det du
                har lært på skolen i praksis. Det forventes ikke at du er
                utlært, men at du ønsker å lære mer. Det viktigste er at du bryr
                deg. Bryr deg om koden du skriver, bryr deg om brukeren du
                designer noe for, bryr deg om kunden du leverer til. I
                tverrfaglige team bestående av designere og utviklere kommer
                dere til å jobbe sammen på et av de spennende kundeprosjektene
                vi har. Underveis får du god oppfølging og tilrettelegging fra
                erfarne konsulenter som ønsker at du lykkes. Er du nysgjerrig på
                hva tidligere sommervarianter har gjort? Les mer om{' '}
                <a href="https://blog.variant.no">sommerprosjektene</a>.
              </p>
            </div>
          </section>
        )}

        {mode === 'job' && (
          <section className={style.leftText}>
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
                <a href="https://handbook.variant.no/avdelinger/oslo">Oslo</a>{' '}
                med henholdsvis 1 designer og 1 utvikler i hver by. Det er ikke
                viktig hvilke verktøy eller språk du bruker. Det er langt
                viktigere at du bryr deg. Bryr deg om koden du skriver, bryr deg
                om brukeren du lager noe for, bryr deg om kunden du leverer til.
              </p>
            </div>
          </section>
        )}

        <img
          className={style.imageBlob}
          src={require(mode === 'job'
            ? './images/strategisk-ellen-hilde.png'
            : './images/presentasjon.png')}
          alt={
            mode === 'job'
              ? 'Ellen og Hilde under entusiastisk diskusjon'
              : 'Sommerstudent som deler kunnskap og erfaringer'
          }
        />

        {mode === 'internship' && (
          <div className={and(style.rightText, style.white)}>
            <p>
              I 2022 tilbyr vi sommerjobb i både{' '}
              <a href="https://handbook.variant.no/avdelinger/trondheim">
                Trondheim
              </a>{' '}
              og <a href="https://handbook.variant.no/avdelinger/oslo">Oslo</a>{' '}
              , til henholdsvis 6 og 4 studenter. Hvor du vil jobbe bestemmer du
              naturligvis selv. Sommerjobben varer i fire + to uker med tre uker
              ferie imellom, og vil gi god innsikt i hva det vil si å jobbe i
              konsulentbransjen. Du kommer til å lære masse nyttig, samtidig som
              du har det gøy sammen med oss andre varianter.
            </p>
          </div>
        )}

        {mode === 'job' && (
          <div className={style.rightText}>
            <p>
              Gjennom både strukturert og impulsiv kunnskapsutveksling lærer vi
              av hverandre og de vi jobber med for å bli flinkere, modigere og
              rausere. Vi elsker utfordringer hvor design- og
              teknologikompetanse finner sammen og tar plass i kundens kultur.
              Her oppdager vi stadig at en helhetlig tilnærming til utvikling og
              design skaper entusiasme og tilfører ekstra verdi. Variant er et
              selskap av og for de ansatte, der læreglede står i sentrum. Deler
              du også denne filosofien?
            </p>
          </div>
        )}
      </section>

      <section
        key={2}
        className={and(style.thirdSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#423D89' : '#F4F1E7'}
      >
        {mode === 'internship' && (
          <section className={style.leftText}>
            <h3>Hvorfor jobbe i Variant?</h3>
            <div>
              <p>
                Variant er en variant av et konsulentselskap som er{' '}
                <a href="https://handbook.variant.no/handbook#form%C3%A5l-og-verdier">
                  raust, åpent og læreglad
                </a>
                . Disse verdiene ligger til grunn for hvordan vi møter hverandre
                og våre kunder. Vi er en gjeng hyggelige og dyktige{' '}
                <a href="https://www.variant.no/ansatte">mennesker</a> som
                ønsker å både tilegne og dele kunnskap. Sammen skaper vi
                løsninger som tjener samfunnet.
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
                fribeløpet! Dersom du har lyst til å lese mer om hva Variant
                står for kan du sjekke ut vår egen{' '}
                <a href="https://handbook.variant.no/handbook">håndbok</a>.
              </p>
            </div>
          </section>
        )}

        {mode === 'job' && (
          <section className={and(style.leftText, style.white)}>
            <h3>Hvorfor jobbe i Variant?</h3>
            <p>
              Variant er en variant av et konsulentselskap som er{' '}
              <a href="https://handbook.variant.no/handbook#form%C3%A5l-og-verdier">
                raust, åpent og læreglad
              </a>
              . Disse verdiene ligger til grunn for hvordan vi møter hverandre
              og våre kunder. Vi er en gjeng dyktige{' '}
              <a href="https://www.variant.no/ansatte">
                utviklere, designere og prosjektledere
              </a>{' '}
              som ønsker å både tilegne og dele kunnskap. Sammen skaper vi
              løsninger som tjener samfunnet. Hos oss er det din kompetanse og
              dine ønsker som påvirker våre neste oppdrag.
            </p>

            <p>
              Kundelisten vår endrer seg stadig, men for tiden bistår vi blant
              annet på disse prosjektene:
            </p>

            <ul>
              <li>
                For RiksTV designer vi tjenester og plattformer som gjør folks
                underholdningshverdag bedre, enklere og mer inspirerende.
              </li>
              <li>
                For Telenor designer og utvikler vi støtteverktøy for
                morgendagens mobiloperatørløsninger.
              </li>
              <li>
                For Sparebank 1 designer vi ny og bedre funksjonalitet i
                nettbanken til privatkunder, så bank blir enkelt og intuitivt
                for alle brukergrupper.
              </li>
            </ul>
          </section>
        )}

        <section className={style.rightText}>
          <div className={style.groupArrow}>
            {mode === 'internship' && (
              <>
                <h4>Sommerstudentene i 2021</h4>

                <img
                  className={style.handbookArrow}
                  aria-label="Pil til bildet av årets sommerstudenter"
                  src={require('./images/pil.svg')}
                />
              </>
            )}
          </div>
          <img
            className={style.imageBlob}
            src={require(mode === 'job'
              ? './images/progging.png'
              : './images/sommerjobbere2021.png')}
            alt={
              mode === 'job'
                ? 'En programmerende variant med tilskuer'
                : 'De fem sommerstudentene i Variant i 2021'
            }
          />
        </section>
      </section>

      <section
        key={3}
        className={and(style.fourthSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#FAD2E2' : '#028377'}
      >
        {mode === 'internship' && (
          <>
            <h3 className={style.white}>Hva skjer etter søknadsfristen?</h3>
            <section className={and(style.leftText, style.white)}>
              <div>
                <p>
                  Vi liker ikke tradisjonelle intervjuer. De plasserer søker i
                  en unaturlig situasjon, og man blir ikke godt kjent med
                  hverandre. Etter at vi har vurdert alle søknadene inviterer vi
                  utvalgte kandidater til en uformell samtale. Dette er det vi
                  kaller kaffeprat. Hensikten med samtalen er å finne ut om
                  begge parter har felles verdier og mål. Og nei – du er
                  selvsagt ikke nødt til å drikke kaffe.
                </p>

                <p>
                  Dersom du får jobbtilbud og takker ja, inkluderes du straks i
                  Variant på lik linje med de fast ansatte. Du får tilgang til
                  vår Slack, og mulighet til å delta på alle faglige og{' '}
                  <a href="https://handbook.variant.no/quality_manual#sosiale-aktiviteter">
                    sosiale arrangementer
                  </a>
                  . Dette inkluderer blant annet spill- og fagkvelder,
                  nyttårskalas og{' '}
                  <a href="https://handbook.variant.no/handbook#variantdag">
                    variantdager
                  </a>
                  , som er fine muligheter til å bli bedre kjent før
                  sommerjobben starter i juni.
                </p>
              </div>
            </section>
          </>
        )}

        {mode === 'job' && (
          <>
            <h3>Hva kan vi tilby?</h3>
            <section className={style.leftText}>
              <div>
                <p>
                  Som nyutdannet konsulent i Variant blir du en del av
                  utviklingsprogrammet vi kaller{' '}
                  <a href="https://handbook.variant.no/handbook#utviklingsprogram">
                    Variant:skudd
                  </a>
                  . Programmet er skreddersydd for deg som kommer rett fra
                  skolen, og bidrar til at du raskt blir en skikkelig god
                  konsulent. Samtidig tror vi at du lærer best ute i prosjekt,
                  og det vil derfor ikke gå lang tid før du starter i oppdrag
                  hos en av våre kunder. Du vil samarbeide med andre varianter,
                  og få god oppfølging underveis.
                </p>

                <p>
                  I Variant jobber vi for å være åpne og rause, og dette
                  gjenspeiles blant annet i betingelsene våre. Du trenger for
                  eksempel ikke å lure på hvordan{' '}
                  <a href="https://avtaler.variant.no/avtaler/ansettelse.html">
                    kontrakten din
                  </a>{' '}
                  vil se ut. Den ligger nemlig åpent på våre nettsider for alle
                  som vil se. Lønna ligger også tilgjengelig og kan enkelt
                  regnes ut ved hjelp av lønnskalkulatoren vår. Etter hvert
                  kvartal utbetales det{' '}
                  <a href="https://handbook.variant.no/handbook#bonus">bonus</a>
                  , og denne summen fordeles selvsagt likt på alle ansatte.
                  Utenom lønn har vi også gode betingelser knyttet til{' '}
                  <a href="https://handbook.variant.no/handbook#pensjon-og-forsikring">
                    pensjon og forsikringer
                  </a>
                  ,{' '}
                  <a href="https://handbook.variant.no/handbook#goder-og-ytelser">
                    gadgets, treningsabonnement og mobiltelefoni.
                  </a>{' '}
                  Dersom du vil lese mer om hva Variant står for og tilbyr,
                  sjekk gjerne ut{' '}
                  <a href="https://handbook.variant.no/handbook">
                    håndboka vår.
                  </a>
                </p>
              </div>
            </section>
          </>
        )}

        {mode === 'internship' && (
          <section className={and(style.timelineContainer, style.white)}>
            <div className={style.timelineEvent}>
              <h4>Søknadsfrist</h4>
              <h5>3. oktober</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Kaffeprat med utvalgte kandidater</h4>
              <h5>6. - 7. oktober</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Tilbud om sommerjobb</h4>
              <h5>8. oktober</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Mulighet for å delta på alle sosiale arrangementer</h4>
              <h5>november - juni</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Første arbeidsperiode</h4>
              <h5>13. juni - 8. juli (4 uker)</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Fellesferie</h4>
              <h5>11. - 29. juli (3 uker)</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Andre arbeidsperiode</h4>
              <h5>1. - 12. august (2 uker)</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Tilbud om fast ansettelse?</h4>
            </div>
          </section>
        )}

        {mode === 'job' && (
          <section className={style.calculatorContainer}>
            <Calculator year={2021} degree={'masters'} />
          </section>
        )}
      </section>

      <section
        key={4}
        className={and(style.fifthSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#028377' : '#FFDCD7'}
      >
        {mode === 'internship' && (
          <section className={style.rightText}>
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
        )}

        {mode === 'job' && (
          <section className={and(style.rightText, style.white)}>
            <h3>Hva skjer etter at du har søkt?</h3>

            <p>
              Alle søknader til fast jobb behandles fortløpende, og aktuelle
              kandidater inviteres like etterpå til det vi kaller kaffeprat.
              Kaffepraten er en uformell samtale hvor vi finner ut om begge
              parter har felles verdier og mål. Og nei - du er selvsagt ikke
              nødt til å drikke kaffe. Dersom begge er interessert, fortsetter{' '}
              <a href="https://blog.variant.no/paa-tide-med-bedre-jobbintervjuer-e59f6789a134">
                ansettelsesprosessen
              </a>
              . Her samarbeider vi først om å løse en avgrenset problemstilling,
              før sluttkandidatene inviteres til en forventningssamtale. Vi vil
              være sikre på at begge parter ønsker seg i samme retning, og
              gjennom en mer praktisk rettet samtale tilrettelegges det for å
              snakke litt mer sammen og avklare om vi er en match.
            </p>

            <p>
              Dersom du får jobbtilbud og takker ja, inkluderes du straks i
              Variant. Du får tilgang til vår Slack, og mulighet til å delta på
              alle faglige og{' '}
              <a href="https://handbook.variant.no/quality_manual#sosiale-aktiviteter">
                sosiale arrangementer
              </a>
              . Dette inkluderer blant annet spill- og fagkvelder, nyttårskalas
              og{' '}
              <a href="https://handbook.variant.no/handbook#variantdag">
                variantdager
              </a>
              , som er fine muligheter til å bli bedre kjent før oppstart i
              august.
            </p>
          </section>
        )}

        <section
          className={
            mode === 'job' ? and(style.leftText, style.white) : style.leftText
          }
        >
          <div className={style.applyArrow}>
            <h4>Du kan søke på neste side!</h4>
            <img
              className={and(style.arrow, style.upsideDown)}
              aria-label="Pil som viser at du kan søke lenger nede på siden"
              src={require(mode === 'job'
                ? './images/hvit-pil.svg'
                : './images/pil.svg')}
            />
          </div>
        </section>

        <img
          className={style.imageBlob}
          src={require(mode === 'job'
            ? './images/simen.png'
            : './images/rundbord.png')}
          alt={
            mode === 'job'
              ? 'Simen som koser seg på variantdag'
              : 'Ni varianter som diskuterer rundt et bord'
          }
        />
      </section>

      <section
        key={5}
        className={and(style.sixtSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#F4F1E7' : '#423D89'}
        ref={endRef}
      >
        {mode === 'internship' && (
          <>
            <section className={style.leftText}>
              <div className={style.white}>
                <h3>Søk sommerjobb</h3>
                <p>
                  Vi håper du søker, og ser frem til å bli bedre kjent med deg.
                  Har du spørsmål om jobben eller Variant? <br />
                  Ta gjerne kontakt med meg.
                </p>
                <p>
                  Marius Krakeli
                  <br />
                  Utvikler og rekrutteringsansvarlig
                  <br />
                  <a style={{ color: 'white' }} href="tel:41637572">
                    41 63 75 72
                  </a>{' '}
                  |{' '}
                  <a style={{ color: 'white' }} href="mailto:mk@variant.no">
                    mk@variant.no
                  </a>
                </p>
              </div>
            </section>

            <section className={style.applyLinksContainer}>
              <Link href="/jobs/utvikler-trondheim">
                <a className={style.applyLink}>
                  <div className={style.blobButtons}>
                    <img
                      className={style.buttonBlob}
                      src={require('./images/blobs/Leftblob_crop.png')}
                      alt="Klikkbar blob"
                    />
                    <h3 className={style.layerText_dark}>
                      Søk som designer{' '}
                      <span role="img" aria-label="blyant">
                        ✏️
                      </span>
                    </h3>
                  </div>
                </a>
              </Link>

              <Link href="/jobs/utvikler-trondheim">
                <a className={style.applyLink} href="/jobs/utvikler-trondheim">
                  <div className={style.blobButtons}>
                    <img
                      className={style.buttonBlob}
                      src={require('./images/blobs/Rightblob_crop.png')}
                      alt="Klikkbar blob"
                    />
                    <h3 className={style.layerText_dark}>
                      Søk som utvikler{' '}
                      <span role="img" aria-label="datamaskin">
                        💻
                      </span>
                    </h3>
                  </div>
                </a>
              </Link>
            </section>
          </>
        )}

        {mode === 'job' && (
          <>
            <section className={style.leftText}>
              <div>
                <h3>Søk fast jobb</h3>
                <p>
                  Vi håper du søker, og ser frem til å bli bedre kjent med deg.
                  Har du spørsmål om jobben eller Variant? <br />
                  Ta gjerne kontakt med meg.
                </p>
                <p>
                  Marius Krakeli
                  <br />
                  Utvikler og rekrutteringsansvarlig
                  <br />
                  <a href="tel:41637572">41 63 75 72</a> |{' '}
                  <a href="mailto:mk@variant.no">mk@variant.no</a>
                </p>
              </div>
            </section>
            <section className={style.applyLinksContainer}>
              <Link href="/jobs/utvikler-trondheim">
                <a className={style.applyLink}>
                  <div className={style.blobButtons}>
                    <img
                      className={style.buttonBlob}
                      src={require('./images/blobs/Leftblob_ny_crop.png')}
                      alt="Klikkbar blob"
                    />
                    <h3 className={style.layerText}>
                      Søk som designer{' '}
                      <span role="img" aria-label="blyant">
                        ✏️
                      </span>
                    </h3>
                  </div>
                </a>
              </Link>

              <Link href="/jobs/utvikler-trondheim">
                <a className={style.applyLink}>
                  <div className={style.blobButtons}>
                    <img
                      className={style.buttonBlob}
                      src={require('./images/blobs/Rightblob_ny_crop.png')}
                      alt="Klikkbar blob"
                    />
                    <h3 className={style.layerText}>
                      Søk som utvikler{' '}
                      <span role="img" aria-label="datamaskin">
                        💻
                      </span>
                    </h3>
                  </div>
                </a>
              </Link>
            </section>
          </>
        )}

        <img
          className={style.imageBlob}
          src={require('public/images/marius.png')}
          alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
        />

        <img
          className={style.variantLogo}
          src={require(mode === 'job'
            ? './images/variant.svg'
            : './images/variant-white.svg')}
          role="none"
        />
      </section>
    </>
  );
}
