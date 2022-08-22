import React, { useRef, useState } from 'react';
import NewVariants from './img/newVariants';
import Map from './img/map';
import style from './index.module.css';
import HandBooKPages from './utils/handBookPages';
import { JobOrInternship } from './utils/utils';
import TimeLine from './img/tidslinje';
import ApplyAsDesigner from './img/søkSomDesigner';
import ApplyAsDesignerBiggerBlob from './img/søkSomDesignerBigBlob';
import ApplyAsDeveloper from './img/søkSomUtviklerBlob';
import ApplyAsDeveloperBiggerBlob from './img/søkeSomUtviklerBigBlob';
import ReadMoreArrow from './img/lesMerPil';

const Content = ({ selected }: JobOrInternship) => {
  const blobSection1 = require('./img/section1Blob.png');
  const Marius = require('./img/Marius.png');
  const summerStudent1 = require('./img/Vilde summerstudent.png');
  const summerStudent2 = require('./img/Olepetter summerstudent.png');
  const summerStudent3 = require('./img/Nora summerstudent.png');

  const [whichButtonSelected, setWhichButtonSelected] = useState('');

  const forside = useRef<HTMLImageElement>(null);
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
        <div className={style.scrollContainer}>
          <section className={style.section1} ref={forside}>
            <span className={style.searchNewVariants}>
              <NewVariants />
            </span>
            <h4 className={style.h4Section1}>Søk innen 2. Oktober</h4>

            <br />
            {/* Navigation bar on the right side */}
            <div className={style.navigationSlider}>
              <button
                className={style.navigationButton6}
                onClick={() => goToRef(forside)}
              >
                <p className={style.tests}>Forside</p>
              </button>
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
            <div className={style.underHeader}>
              {/* middlertidig link. usikker på hvilken vi skal bruke */}
              <a className={style.søkHer} href="https://www.variant.no/jobs">
                Søk her
              </a>
              <p className={style.eller}>Eller</p>
              <p className={style.scroll}>Scroll deg nedover</p>
            </div>
            <span>
              <img
                className={style.imageBlob1}
                src={blobSection1}
                alt="To fra Variant"
              />
            </span>
          </section>
          <div className={style.section2Color}>
            <section className={style.section2} ref={sommerjobbHandling}>
              <div>
                <h3 className={style.section2Heading}>
                  Hva går sommerjobben ut på?
                </h3>
                <div className={style.section2Div}>
                  <p className={style.section2Paragraph}>
                    En sommerjobb i Variant er en fin mulighet til å anvende det
                    du har lært på skolen i praksis. Det forventes ikke at du er
                    utlært, men at du ønsker å lære mer. I et tverrfaglig team
                    bestående av designere og utviklere kommer du til å jobbe på
                    et av de spennende kundeprosjektene vi har. Underveis får du
                    god oppfølging og tilrettelegging fra erfarne konsulenter
                    som ønsker at du lykkes. Sjekk ut denne bloggposten for å
                    lese mer om hva årets sommerstudenter i Oslo jobbet med.
                  </p>
                </div>
                <div className={style.officeMap}>
                  <Map />
                </div>
                <div className={style.section2Div2}>
                  <p className={style.section2Paragraph}>
                    I 2023 tilbyr vi sommerjobb i både Trondheim, Oslo og
                    Bergen, til henholdsvis seks, fem og to studenter. Hvor du
                    vil jobbe bestemmer du naturligvis selv. Sommerjobben varer
                    i fire + to uker med tre uker ferie i mellomtiden.
                  </p>

                  <p className={style.section2Paragraph}>
                    I Variant liker vi åpnenhet. Det betyr at du selvsagt ikke
                    trenger å lure på hvordan kontrakten din vil se ut for
                    sommeren, den ligger nemlig åpent og tilgjengelig på våre
                    nettsider. Timelønnen trenger du heller ikke å lure på, den
                    er på 265 kr. Under “Hvorfor jobbe i Variant?” ned kan du
                    lese mer om hva Variant står for og tilbyr.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className={style.section3} ref={sommerjobbereMening}>
            <h3 className={style.section3Heading}>
              Hva mener årets sommerstudenter?
            </h3>
            <div className={style.summerstudent1}>
              <img
                className={style.summerstudent1picture}
                src={summerStudent1}
                alt=""
              />
              <p className={style.summerstudent1Paragraph}>
                “Teamet hos kunden stilte gjerne til rådgivning uansett
                hva.[...] Jeg følte man ble en del av firmaet selv om det «bare»
                var en sommerjobb. [...] Utrolig hyggelige kollegaer som ønsker
                å hjelpe der man kan og løfte hverandre frem.” <br></br>
                <br></br>-Vilde
              </p>
            </div>

            <div className={style.summerstudent2}>
              <p className={style.summerstudent2Paragraph}>
                “Det har vært fantastisk å være en nevø i variantfamilien
                gjennom sommeren! Fagkvelder, felles lunsj, sosialt opplegg, alt
                som skal til for en bonding opplevelse var der. [...] Store ord
                om kjerneverdier kan fremstå som grunn markedsføring. I Variant
                synes de når man kommer på jobb!” <br></br>
                <br></br>-Ole Petter
              </p>
              <img
                className={style.summerstudent2picture}
                src={summerStudent2}
                alt=""
              ></img>
            </div>

            <div className={style.summerstudent3}>
              <img
                className={style.summerstudent3picture}
                src={summerStudent3}
                alt="summerstudent 3"
              ></img>
              <p className={style.summerstudent3Paragraph}>
                “Det har vært helt fantastisk å være en del av Variant i sommer.
                For en bra, varm og inkluderende gjeng!” <br></br>
                <br></br>-Nora
              </p>
            </div>
          </section>

          <div className={style.section4Color}>
            <section className={style.whyWorkAtVariant} ref={hvorforVariant}>
              <div className={style.handbook}>
                <div className={style.handbookChildButton}>
                  <h3 className={style.section5Heading}>
                    Hvorfor akkurat Variant
                  </h3>
                  <p className={style.positionTextLeft}>
                    Variant er en variant av et konsulentselskap som er raust,
                    åpent og læreglad. Disse verdiene ligger til grunn for
                    hvordan vi møter hverandre, våre kunder og alle andre. I
                    håndboken vår kan du lese om hvordan ting gjøres i Variant,
                    hva vi prøver å oppnå og hvorfor vi tenker som vi gjør.
                    Under kan du sjekke ut er et par utvalgte temaer.
                  </p>

                  <div className={style.handbookGrid}>
                    <button
                      className={style.handbookButton1}
                      onClick={() =>
                        setWhichButtonSelected('Formmal og verdier')
                      }
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
                  <div className={style.section5HandbookLink}>
                    <h3 className={style.mostImportantForYou}>
                      Hva er viktigst for deg?
                    </h3>
                    <a
                      className={style.handbookRef}
                      href="https://handbook.variant.no"
                    >
                      Sjekk ut hele håndboka vår her
                    </a>
                  </div>
                </div>
                <div className={style.handbookPages}>
                  {whichButtonSelected ? (
                    <HandBooKPages selectedButton={whichButtonSelected} />
                  ) : (
                    <ReadMoreArrow />
                  )}
                </div>
                <div className={style.section5HandbookLinkMobile}>
                  <h3 className={style.mostImportantForYou}>
                    Hva er viktigst for deg?
                  </h3>
                  <a
                    className={style.handbookRef}
                    href="https://handbook.variant.no"
                  >
                    Sjekk ut hele håndboka vår her
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className={style.section5Color}>
            <section className={style.section5} ref={etterSoknad}>
              <h3 className={style.section5Heading}>
                Hva skjer etter søknadsfristen?
              </h3>
              <div className={style.flexTimeline}>
                <div className={style.section5Div}>
                  <p className={style.section5ParagraphLeft}>
                    Vi liker ikke tradisjonelle intervjuer. De plasserer søker i
                    en unaturlig situasjon, og man blir ikke godt kjent med
                    hverandre. Etter at vi har vurdert alle søknadene inviterer
                    vi utvalgte kandidater til en uformell samtale. Dette er det
                    vi kaller kaffeprat. Hensikten med samtalen er å finne ut om
                    begge parter har felles verdier og mål. Og nei – du er
                    selvsagt ikke nødt til å drikke kaffe.
                  </p>
                  <p className={style.section5ParagraphLeft}>
                    Dersom du får jobbtilbud og takker ja, inkluderes du straks
                    i Variant på lik linje med de faste ansatte. Du får tilgang
                    til vår Slack, og mulighet til å delta på alle faglige og
                    sosiale arrangementer. Dette inkluderer blant annet spill-
                    og fagkvelder, nyttårskalas og variantdager, som er fine
                    muligheter til å bli bedre kjent før sommerjobben starter i
                    juni.
                  </p>
                </div>
                <div className={style.section5Div2}>
                  <div className={style.timeLine}>
                    <TimeLine />
                  </div>
                  <div className={style.søknadstips}>
                    <h4 className={style.section5HeadingH4}>Søknadstips:</h4>
                    <p className={style.section5Paragraph}>
                      Vi setter pris på en søknad med CV, søknadsbrev og
                      karakterutskrift. Det viktigste for oss er å få et
                      helhetlig bilde. Både av deg som person, din eksisterende
                      kompetanse og dine ambisjoner. Så hvem er du og hvorfor
                      søker du sommerjobb i Variant? Vi trenger mennesker som
                      bryr seg om å skape en bedre hverdag. Er det deg?
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className={style.section6} ref={sokSommerjobb}>
            <h3 className={style.section6Heading}>Søk sommerjobb</h3>
            <div className={style.section6Flex}>
              <div className={style.section6Text}>
                <p className={style.section6Paragraph}>
                  Vi håper du søker, og vi ser frem til å bli bedre kjent med
                  deg. Har du spørsmål om sommerjobben eller Variant? Ta gjerne
                  kontakt med meg.
                </p>
                <p className={style.section6Paragraph2}>
                  - Marius Krakeli, Utvikler og rekrutteringsansvarlig
                </p>
                <div className={style.contactInfo}>
                  <div>
                    <p className={style.section6Underline}>41637572</p>
                  </div>
                  <div>
                    <p> | </p>
                  </div>
                  <div></div>
                  <p className={style.section6Underline}>
                    <a href="mailto: mk@variant.no">mk@variant.no</a>
                  </p>
                </div>
              </div>
              <img
                className={style.Marius}
                src={Marius}
                alt="Bilde av Marius"
              />
            </div>
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
        </div>
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