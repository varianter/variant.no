import React, { useEffect, useState } from 'react';
import Map from './img/map';
import style from './index.module.css';
import HandBooKPages from './utils/handBookPages';
import TimeLine from './img/tidslinje';
import ApplyAsDesigner from './img/søkSomDesigner';
import ApplyAsDesignerBiggerBlob from './img/søkSomDesignerBigBlob';
import ApplyAsDeveloper from './img/søkSomUtviklerBlob';
import ApplyAsDeveloperBiggerBlob from './img/søkeSomUtviklerBigBlob';
import ReadMoreArrow from './img/lesMerPil';
import SummerjobSelected from './img/sommerjobbSVGSelected';
import Job from './img/fastjobbSVG';
import { off } from 'process';
import { changeNavbarColor } from './utils/utils';

const Content = () => {
  const blobSection1 = require('./img/section1BlobSummer.png');
  const Marius = require('./img/Marius.png');
  const Even = require('./img/Even.png');
  const summerStudent1 = require('./img/Vilde summerstudent.png');
  const summerStudent2 = require('./img/Olepetter summerstudent.png');
  const summerStudent3 = require('./img/Nora summerstudent.png');

  const [whichButtonSelected, setWhichButtonSelected] = useState('');

  const [buttonClicked, setButtonClicked] = useState(false);

  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [navColor, setNavColor] = useState(false);

  const handleOnClick = (buttonValue: string) => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setButtonClicked(true);
    }

    setWhichButtonSelected(buttonValue);
  };

  //True White
  useEffect(() => {
    changeNavbarColor(setNavColor, setIsMobile, setOffset, offset);
  }, [offset, navColor]);

  return (
    <>
      <div className={style.scrollContainer} id="scrollContainer">
        <section className={style.section1} id="forside">
          <span className={style.searchNewVariants}>
            <h3 className={style.section1H3}>Jeg ser etter</h3>
            <div>
              <SummerjobSelected />
            </div>
            <a href="/nyutdannet">
              <Job />
            </a>
            <h3 className={style.in2023}>i 2023</h3>
          </span>
          <br />
          {/* Navigation bar on the right side */}
          <div className={style.navigationSlider}>
            <a
              href="#forside"
              style={{ color: navColor ? 'white' : 'black' }}
              className={style.navigationButton6}
            >
              Forside
            </a>
            <a
              href="#hvagarsommerjobbenutpa"
              style={{ color: navColor ? 'white' : 'black' }}
              className={style.navigationButton1}
            >
              Hva går sommerjobben ut på
            </a>
            <a
              href="#hvameneraretssommerstudenter"
              style={{ color: navColor && isMobile ? 'white' : 'black' }}
              className={style.navigationButton2}
            >
              Hva mener årets sommerstudenter?
            </a>
            <a
              href="#hvorforjobbeivariant"
              style={{ color: navColor ? 'white' : 'black' }}
              className={style.navigationButton3}
            >
              Hvorfor jobbe i Variant?
            </a>
            <a
              href="#hvaskjerettersoknadsfristen"
              style={{ color: navColor && isMobile ? 'white' : 'black' }}
              className={style.navigationButton4}
            >
              Hva skjer etter søknadsfristen?
            </a>
            <a
              href="#soksommerjobb"
              style={{ color: navColor ? 'white' : 'black' }}
              className={style.navigationButton5}
            >
              Søk sommerjobb
            </a>
          </div>
          <div className={style.underHeader}>
            {/* middlertidig link. usikker på hvilken vi skal bruke */}
            <p>
              <a className={style.søkHer} href="/jobs">
                Søk her innen 2. oktober
              </a>
            </p>
            <p className={style.eller}>eller</p>
            <p className={style.scroll}>scroll deg nedover</p>
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
          <section className={style.section2} id="hvagarsommerjobbenutpa">
            <div className={style.section2Flex}>
              <h3 className={style.section2Heading}>
                Hva går sommerjobben ut på?
              </h3>
              <p className={style.section2Paragraph}>
                En sommerjobb i Variant er en fin mulighet til å anvende det du
                har lært på skolen i praksis. Det forventes ikke at du er
                utlært, men at du ønsker å lære mer. I et tverrfaglig team
                bestående av designere og utviklere kommer du til å jobbe på et
                av de spennende kundeprosjektene vi har. Underveis får du god
                oppfølging og tilrettelegging fra erfarne konsulenter som ønsker
                at du lykkes. Sjekk ut{' '}
                <a className={style.blogpostLink}>bloggen vår</a> for å lese mer
                om hva årets sommerstudenter jobbet med.
              </p>

              <p className={style.section2Paragraph}>
                I 2023 tilbyr vi sommerjobb i både Trondheim, Oslo og Bergen,
                til henholdsvis seks, fem og to studenter. Hvor du vil jobbe
                bestemmer du naturligvis selv. Sommerjobben varer i fire + to
                uker med tre uker ferie i mellomtiden.
              </p>

              <p className={style.section2Paragraph}>
                I Variant liker vi åpnenhet. Det betyr at du selvsagt ikke
                trenger å lure på hvordan kontrakten din vil se ut for sommeren,
                den ligger nemlig åpent og tilgjengelig på våre nettsider.
                Timelønnen trenger du heller ikke å lure på, den er på 271,83kr
                (eller 100
                <em style={{ fontFamily: 'Nimbus Roman No9 L' }}>e </em>
                &#128526;). Under “Hvorfor jobbe i Variant?” ned kan du lese mer
                om hva Variant står for og tilbyr.
              </p>
            </div>
            <div className={style.officeMap}>
              <Map />
            </div>
          </section>
        </div>

        <section className={style.section3} id="hvameneraretssommerstudenter">
          <h3 className={style.section3Heading}>
            Hva mener årets sommerstudenter?
          </h3>
          <div className={style.summerstudent1}>
            <img
              className={style.summerstudent1picture}
              src={summerStudent1}
              alt=""
            />
            <div>
              <p className={style.summerstudent1Paragraph}>
                “Teamet hos kunden stilte gjerne til rådgivning uansett
                hva.[...] Jeg følte man ble en del av firmaet selv om det «bare»
                var en sommerjobb. [...] Utrolig hyggelige kollegaer som ønsker
                å hjelpe der man kan og løfte hverandre frem.”
              </p>
              <p className={style.summerstudentName1}>-Vilde</p>
            </div>
          </div>

          <div className={style.summerstudent2}>
            <div>
              <img
                className={style.summerstudent2picture}
                src={summerStudent2}
                alt=""
              ></img>
              <p className={style.summerstudent2Paragraph}>
                “Det har vært fantastisk å være en nevø i variantfamilien
                gjennom sommeren! Fagkvelder, felles lunsj, sosialt opplegg, alt
                som skal til for en bonding opplevelse var der. [...] Store ord
                om kjerneverdier kan fremstå som grunn markedsføring. I Variant
                synes de når man kommer på jobb!”
              </p>
              <p className={style.summerstudentName2}>-Ole Petter</p>
            </div>
          </div>

          <div className={style.summerstudent3}>
            <img
              className={style.summerstudent3picture}
              src={summerStudent3}
              alt="summerstudent 3"
            ></img>
            <div>
              <p className={style.summerstudent3Paragraph}>
                “Det har vært helt fantastisk å være en del av Variant i sommer.
                For en bra, varm og inkluderende gjeng!”
              </p>
              <p className={style.summerstudentName}>-Nora</p>
            </div>
          </div>
        </section>

        <div className={style.section4Color}>
          <section
            className={style.whyWorkAtVariant}
            id="hvorforjobbeivariant"
            style={{
              height: buttonClicked
                ? '1600px'
                : '900px' || window.matchMedia('(min-width: 1550px)').matches
                ? '1300px'
                : '900px',
            }}
          >
            <div className={style.handbook}>
              <div className={style.handbookChildButton}>
                <h3 className={style.section4Heading}>
                  Hvorfor akkurat Variant
                </h3>
                <p className={style.positionTextLeft}>
                  Variant er en variant av et konsulentselskap som er raust,
                  åpent og læreglad. Disse verdiene ligger til grunn for hvordan
                  vi møter hverandre, våre kunder og alle andre. I håndboken vår
                  kan du lese om hvordan ting gjøres i Variant, hva vi prøver å
                  oppnå og hvorfor vi tenker som vi gjør. Under kan du sjekke ut
                  noen utvalgte temaer.
                </p>

                <div className={style.handbookGrid}>
                  <button
                    className={style.handbookButton1}
                    onClick={() => handleOnClick('Formmal og verdier')}
                  >
                    Formål og verdier
                  </button>
                  <button
                    className={style.handbookButton3}
                    onClick={() => handleOnClick('Variantdag')}
                  >
                    Variantdag
                  </button>
                  <button
                    className={style.handbookButton2}
                    onClick={() => handleOnClick('Tillit og ansvar')}
                  >
                    Tillit og ansvar
                  </button>
                  <button
                    className={style.handbookButton4}
                    onClick={() => handleOnClick('Miljofyrtarn')}
                  >
                    Miljøfyrtårn
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
          <section className={style.section5} id="hvaskjerettersoknadsfristen">
            <h3 className={style.section5Heading}>
              Hva skjer etter søknadsfristen?
            </h3>
            <div className={style.flexTimeline}>
              <div className={style.section5Div}>
                <p className={style.section5ParagraphLeft}>
                  Vi liker ikke tradisjonelle intervjuer. De plasserer søker i
                  en unaturlig situasjon, og man blir ikke godt kjent med
                  hverandre. Etter at vi har vurdert alle søknadene inviterer vi
                  utvalgte kandidater til en kaffeprat. Dette er en uformell
                  samtale hvor målet er å bli bedre kjent med hverandre, med
                  fokus på både det faglige og det personlige. Og nei – du er
                  selvsagt ikke nødt til å drikke kaffe.
                </p>
                <p className={style.section5ParagraphLeft}>
                  Dersom du får jobbtilbud og takker ja, inkluderes du straks i
                  Variant. Du får tilgang til vår Slack, og mulighet til å delta
                  på faglige og sosiale arrangementer. Dette inkluderer blant
                  annet spill- og fagkvelder, nyttårskalas og variantdager, som
                  er fine muligheter til å bli bedre kjent før sommerjobben
                  starter i juni.
                </p>
                <div className={style.Even}>
                  <img src={Even} alt="Even" />
                </div>
              </div>
              <div className={style.section5Div2}>
                <div className={style.timeLine}>
                  <TimeLine />
                </div>

                <div className={style.søknadstips}>
                  <h4 className={style.section5HeadingH4}>Søknadstips:</h4>
                  <p className={style.section5Paragraph}>
                    Vi setter pris på en søknad med CV, søknadsbrev og
                    karakterutskrift. Det viktigste for oss er å få et helhetlig
                    bilde. Både av deg som person, din eksisterende kompetanse
                    og dine ambisjoner. Så hvem er du og hvorfor søker du
                    sommerjobb i Variant? Vi trenger mennesker som bryr seg om å
                    skape en bedre hverdag. Er det deg?
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className={style.section6} id="soksommerjobb">
          <h3 className={style.section6Heading}>Søk sommerjobb</h3>
          <div className={style.section6Flex}>
            <div className={style.section6Text}>
              <p className={style.section6Paragraph}>
                Vi håper du søker, og vi ser frem til å bli bedre kjent med deg.
                Har du spørsmål om sommerjobben eller Variant? Ta gjerne kontakt
                med meg.
              </p>
              <p className={style.section6Paragraph2}>
                - Marius Krakeli, Utvikler og rekrutteringsansvarlig
              </p>
              <div className={style.contactInfo}>
                <div>
                  <p className={style.section6Underline}>41637572</p>
                </div>
                <div>
                  <p>|</p>
                </div>
                <p className={style.section6Underline}>
                  <a href="mailto: mk@variant.no">mk@variant.no</a>
                </p>
              </div>
            </div>
            <img className={style.Marius} src={Marius} alt="Bilde av Marius" />
          </div>
          <div className={style.ApplyDiv}>
            <div className={style.ApplyAsDesignerDiv}>
              <div className={style.applyAsDesigner}>
                <a href="/jobs">
                  <ApplyAsDesigner />
                </a>
              </div>
              <div className={style.applyAsDesignerBig}>
                <a href="/jobs">
                  <ApplyAsDesignerBiggerBlob />
                </a>
              </div>
            </div>
            <div className={style.ApplyAsDeveloperDiv}>
              <div className={style.ApplyAsDeveloper}>
                <a href="/jobs">
                  <ApplyAsDeveloper />
                </a>
              </div>
              <div className={style.ApplyAsDeveloperBig}>
                <a href="/jobs">
                  <ApplyAsDeveloperBiggerBlob />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
