import React from 'react';
import style from './index.module.css';
import Link from 'next/link';
import { and } from 'src/utils/css';
import { Calculator } from '../salary-calculator';

interface ContentProps {
  mode: 'job' | 'internship';
}

export default function ContentComponent({ mode }: ContentProps) {
  return (
    <>
      <section
        key={0}
        className={and(style.firstSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#028377' : '#FAD2E2'}
      >
        {mode === 'internship' && (
          <section className={style.mainTitleSection}>
            <span>Søk senest 3. oktober</span>
            <h1 className={style.job_title}>
              Er du en av våre 10 sommervarianter i 2022?
            </h1>
            <img
              className={style.arrow}
              aria-label="Pil som forklarer at Variant i 2022 tilbyr sommerjobb både i Trondheim og Oslo"
              src={require('./images/pil.svg')}
            />
            <h4>
              Enten i Trondheim eller Oslo!{' '}
              <span aria-label="konfetti-emoji">🎉</span>
            </h4>
          </section>
        )}

        {mode === 'job' && (
          <section className={and(style.mainTitleSection, style.white)}>
            <span>Søk senest 3. oktober</span>
            <h1 className={style.job_title}>
              Er du en av våre fire nye varianter?
            </h1>
            <img
              className={style.arrow}
              aria-label="Pil som forklarer at Variant i 2022 tilbyr fast jobb både i Trondheim og Oslo"
              src={require('./images/pil.svg')}
            />
            <h4>
              Kontorer i både Trondheim og Oslo!{' '}
              <span aria-label="konfetti-emoji">🎉</span>
            </h4>
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
                En sommerjobb i Variant passer for deg som har lyst å anvende
                læring fra studiene i praksis. Hos oss vil du jobbe i et
                tverrfaglig team sammen med andre utviklere og designere der
                målet er å løse et reelt oppdrag for en av våre kunder.
              </p>

              <p>
                Du trenger ikke å være spesialist for å få sommerjobb hos oss,
                men du bør ha et ønske om å lære mens du er her. Gjennom
                sommeren vil sommerstudentene få god oppfølging fra erfarne
                konsulenter som vil at du skal lykkes, og for å sikre dette har
                sommerstudentene våre ferie i fellesferien.
              </p>

              <p>
                Variant har sentrale lokaler i{' '}
                <a
                  target="blank"
                  rel="noopener"
                  href="https://www.google.com/maps/place/Varianthuset/@63.4328051,10.397323,17z/data=!3m1!4b1!4m5!3m4!1s0x466d312df4ea1347:0xf63e949e041942ee!8m2!3d63.4328051!4d10.3995117"
                  style={{ color: 'white' }}
                >
                  Varianthuset i Trondheim sentrum
                </a>{' '}
                og{' '}
                <a
                  target="blank"
                  rel="noopener"
                  href="https://www.google.com/maps/place/Spaces+-+Spaces+Oslo+Kvadraturen/@59.9096596,10.7460537,18z/data=!4m5!3m4!1s0x46416e89a671fbe3:0x278831a2eb8f70ea!8m2!3d59.9097229!4d10.7467068"
                  style={{ color: 'white' }}
                >
                  Kvadraturen i Oslo.
                </a>
              </p>
            </div>
          </section>
        )}

        {mode === 'job' && (
          <section className={style.leftText}>
            <h3>Hvem søker vi?</h3>
            <div>
              <p>
                Vi søker fire nyutdannede designere og utviklere som engasjerer
                og motiverer, med oppstart 1. august 2022.
              </p>

              <p>
                Gjennom både strukturert og impulsiv kunnskapsutveksling lærer
                vi av hverandre og de vi jobber med for å bli flinkere, modigere
                og rausere. Til felles har vi at vi elsker utfordringer hvor
                design- og teknologikompetanse finner sammen og tar plass i
                kundens kultur. Her oppdager vi stadig at en helhetlig
                tilnærming til utvikling og design tilfører ekstra verdi og
                engasjement. Variant er et selskap av og for de ansatte
                mennesker, der med læreglede står i sentrum. Deler du samme
                filosofi? . Er det deg?
              </p>

              <p>
                Variant har sentrale lokaler i{' '}
                <a
                  target="blank"
                  rel="noopener"
                  href="https://www.google.com/maps/place/Varianthuset/@63.4328051,10.397323,17z/data=!3m1!4b1!4m5!3m4!1s0x466d312df4ea1347:0xf63e949e041942ee!8m2!3d63.4328051!4d10.3995117"
                >
                  Varianthuset i Trondheim sentrum
                </a>{' '}
                og{' '}
                <a
                  target="blank"
                  rel="noopener"
                  href="https://www.google.com/maps/place/Spaces+-+Spaces+Oslo+Kvadraturen/@59.9096596,10.7460537,18z/data=!4m5!3m4!1s0x46416e89a671fbe3:0x278831a2eb8f70ea!8m2!3d59.9097229!4d10.7467068"
                >
                  Kvadraturen i Oslo.
                </a>
              </p>
            </div>
          </section>
        )}

        {mode === 'internship' && (
          <div className={and(style.rightText, style.white)}>
            <p>
              Prosjektet varer i fire + to uker med tre uker ferie i
              mellomtiden, og vil gi god innsikt i hva det vil si å jobbe i
              konsulentbransjen. Du kommer til å lære masse nyttig, samtidig som
              du har det gøy med de andre variantene.{' '}
            </p>
          </div>
        )}

        {mode === 'job' && (
          <div className={style.rightText}>
            <p>
              Det er ikke viktig hvilket språk eller verktøy du bruker. Det er
              langt viktigere at du bryr deg. Bryr deg om koden du skriver, bryr
              deg om brukeren du lager noe for, bryr deg om kunden du leverer
              til.
            </p>
          </div>
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
                Variant er en variant av et konsulentselskap som er raus, åpen
                og læreglad.
              </p>

              <p>
                En sommerjobb i Variant er en god arena for personlig utvikling,
                både faglig og sosialt. og vi mener at en sommer hos oss vil
                gjøre deg bedre rustet både for resterende tid på skolebenken,
                men også senere i arbeidslivet.
              </p>

              <p>
                Håndboka vår beskriver hvem vi er og hva vi står for. I Variant
                trenger du ikke lure på hvordan{' '}
                <a href="https://avtaler.variant.no/avtaler/ansettelse-sommerjobb.html">
                  kontrakten
                </a>{' '}
                din vil se ut dersom du skulle få tilbud om sommerjobb, den
                ligger selvsagt åpent tilgjengelig på våre nettsider.
              </p>

              <p>
                Til tross for en litt uforutsigbar periode så har vi satt opp en
                plan for både hvordan vi ønsker å ivareta dere faglig, men også
                for å bli bedre kjent med hverandre.
              </p>
            </div>
          </section>
        )}

        {mode === 'job' && (
          <section className={and(style.leftText, style.white)}>
            <h3>Hva jobber vi med?</h3>
            <p>
              Variant er en variant av et konsulentselskap som er raust, åpent
              og læreglad. Disse verdiene ligger til grunn for hvordan vi møter
              hverandre og våre kunder. Vi er en gjeng hyggelige og dyktige
              utviklere, designere og prosjektledere konsulenter som ønsker å
              både tilegne og dele kunnskap. Sammen skaper vi løsninger som
              tjener samfunnet. Vi bruker vår kompetanse til å løse utfordringer
              for våre kunder.
            </p>

            <p>Akkurat nå jobber vi blant annet med disse prosjektene:</p>
            <ul>
              <li>AtB</li>
              <li>Uninett</li>
              <li>Sparebank 1</li>
              <li>Statens Vegvesen</li>
            </ul>

            <p>
              I Variant liker vi å være åpnejobber vi for åpenhet. Derfor spør
              vi heller hvorfor ting skal holdes hemmelig enn hvorfor de skal
              være åpne. Det betyr blant annet at du ikke trenger å lure på
              hvordan kontrakten din vil se utvære, eller hva lønna blir. Dentte
              ligger nemlig åpent tilgjengelig på våre nettsider for alle som
              vil se. Dersom du vil lese mer om hva Variant står for og tilbyr,
              kan du sjekke ut håndboka vår.
            </p>
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

            <img
              className={style.imageBlob}
              src={require(mode === 'job'
                ? './images/design-konsentrert.png'
                : './images/sommerjobbere2021.png')}
              alt={
                mode === 'job'
                  ? 'Designere under en workshop'
                  : 'De fem sommerstudentene i Variant i 2021'
              }
            />
          </div>
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
                  Vi i Variant liker ikke tradisjonelle intervjuer. De plasserer
                  søker i en unaturlig situasjon, og man blir ikke godt nok
                  kjent med hverandre. Etter at vi har sett igjennom alle
                  søknadene inviterer vi derfor alle utvalgte kandidater til en
                  uformell samtale. Dette er det vi kaller kaffeprat. Hensikten
                  med samtalen er for å finne ut om begge parter har felles
                  verdier og mål. Og nei, du er selvsagt ikke nødt til å drikke
                  kaffe.
                </p>

                <p>
                  Dersom du får jobbtilbud og takker ja, inkluderes du straks i
                  Variant på lik linje med de fast ansatte. Du får tilgang til
                  Slack´en vår, og mulighet til å delta på alle sosiale og
                  faglige arrangementer. Dette inkluderer blant annet spill- og
                  fagkvelder, nyttårskalas og variantdager, som er fine
                  muligheter til å bli bedre kjent før sommerjobben starter i
                  juni.
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
                  utviklingsprogrammet vi kaller variant:skudd. Programmet er
                  skreddersydd for deg som kommer rett fra skolen, og bidrar til
                  at du raskt blir en skikkelig god konsulent. Samtidig tror vi
                  at du lærer best ute i prosjekt, og det vil derfor ikke gå
                  lang tid før du starter i oppdrag hos en av våre kunder. Du
                  vil samarbeide med andre varianter, og få god oppfølging
                  underveis. Hos oss vil du jobbe med ulike arbeidsoppgaver ut
                  ifra egne ønsker om bransje og teknologi. Vi vet ikke nøyaktig
                  hvilke oppdrag vi får. Men, det er faktisk slik at din
                  kompetanse og dine ønsker ofte styrer det neste oppdraget.
                </p>

                <p>
                  I Variant liker vi å være rause, og dette gjenspeiles blant
                  annet også i betingelsene våre. Lønna finner du i
                  lønnskalkulatoren vår, og du får selvsagt en like stor bonus
                  som alle andre varianter. Utenom dette har vi også gode
                  betingelser knyttet til gadgeter, treningsabonnement,
                  forsikringer og mobilbruk.
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
          src={require('./images/rundbord.png')}
          alt={'Ni varianter som diskuterer rundt et bord'}
        />
      </section>

      <section
        key={5}
        className={and(style.sixtSection, 'color-scroll-section')}
        data-background-color={mode === 'job' ? '#F4F1E7' : '#423D89'}
      >
        {mode === 'internship' && (
          <section className={style.leftText}>
            <section className={style.applyLinksContainer}>
              <Link href="/jobs/utvikler-trondheim">
                <a style={{ color: 'white' }}>
                  <h3>
                    Søk som designer
                    <span role="img" aria-label="blyant">
                      ✏️
                    </span>
                  </h3>
                </a>
              </Link>

              <Link href="/jobs/utvikler-trondheim">
                <a style={{ color: 'white' }}>
                  <h3>
                    Søk som utvikler
                    <span role="img" aria-label="datamaskin">
                      💻
                    </span>
                  </h3>
                </a>
              </Link>
            </section>

            <div className={style.white}>
              <p>
                Vi håper du søker, og ser frem til å bli bedre kjent med deg.
              </p>
              <p>
                Har du spørsmål om sommerjobbene eller Variant? Ta gjerne
                kontakt med meg.
              </p>
              <p>
                - Marius Krakeli, utvikler og rekrutteringsansvarlig i Variant
              </p>
              <p>
                <a style={{ color: 'white' }} href="mailto:mk@variant.no">
                  mk@variant.no
                </a>{' '}
                |{' '}
                <a style={{ color: 'white' }} href="tel:41637572">
                  41 63 75 72
                </a>
              </p>
            </div>
          </section>
        )}

        {mode === 'job' && (
          <section className={style.leftText}>
            <section className={style.applyLinksContainer}>
              <Link href="/jobs/utvikler-trondheim">
                <a className={style.applyLink}>
                  <h3>
                    Søk som designer
                    <span role="img" aria-label="blyant">
                      ✏️
                    </span>
                  </h3>
                </a>
              </Link>

              <Link href="/jobs/utvikler-trondheim">
                <a className={style.applyLink}>
                  <h3>
                    Søk som utvikler
                    <span role="img" aria-label="datamaskin">
                      💻
                    </span>
                  </h3>
                </a>
              </Link>
            </section>

            <div>
              <p>
                Vi håper du søker, og ser frem til å bli bedre kjent med deg.
              </p>
              <p>
                Har du spørsmål om sommerjobbene eller Variant? Ta gjerne
                kontakt med meg.
              </p>
              <p>
                - Marius Krakeli, utvikler og rekrutteringsansvarlig i Variant
              </p>
              <p>
                <a href="mailto:mk@variant.no">mk@variant.no</a> |{' '}
                <a href="tel:41637572">41 63 75 72</a>
              </p>
            </div>
          </section>
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
