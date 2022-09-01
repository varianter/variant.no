import React, { useEffect, useState } from 'react';
import Map from './img/map';
import MapMobile from './img/mapMobile';
import style from './index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import HandBooKPages from './utils/handBookPages';
import ReadMoreArrow from './img/lesMerPil';
import Header from './components/header/header';
import PinkBlob from './img/pinkBlob';
import GreenBlob from './nyutdannet/img/greenBlob';
import AfterApplying from './nyutdannet/sections/hvaSkjerEtterSonaadsfristen';
import MoreInfo from './img/merInfo';

const Content = () => {
  const blobSection1 = require('./img/section1Blob.png');
  const Marius = require('./img/Marius.png');
  const summerStudent1 = require('./img/Vilde summerstudent.png');
  const summerStudent2 = require('./img/Olepetter summerstudent.png');
  const summerStudent3 = require('./img/Nora summerstudent.png');

  const [whichButtonSelected, setWhichButtonSelected] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.matchMedia('(max-width: 900px)').matches);
  };

  const handleOnClick = (buttonValue: string) => {
    if (window.matchMedia('(max-width: 900px)').matches) {
    }

    setWhichButtonSelected(buttonValue);
  };

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 900px)').matches);
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <div className={style.scrollContainer} id="scrollContainer">
        <div>
          <section className={style.section1} id="forside">
            <header className={style.header}>
              <Header white={false} />
            </header>
            <span className={style.searchNewVariants}>
              <h3 className={style.bigHeading}>
                Vi ser etter 14 sommervarianter i 2023!{' '}
              </h3>
            </span>
            <br />
            <div className={style2.applyButtonPink}>
              <p>Søk senest 3. oktober</p>
              <p>
                <a href="#sokSommerjobb">Søk sommerjobb</a>
              </p>
            </div>
            <div className={style2.applyButtonBlue}>
              <p>Ferdig utdannet i 2023?</p>
              <p>
                <a href="/nyutdannet">Jeg vil ha fast jobb</a>
              </p>
            </div>
            <div className={style.section1Blobs}>
              <img
                className={style.imageBlob1}
                src={blobSection1}
                alt="To fra Variant"
              />
              <div className={style.section1Blob}>
                <PinkBlob />
              </div>
            </div>
            <div className={style.moreInfoDiv}>
              <MoreInfo white={false} />
            </div>
          </section>
          <div className={style.section2Color}>
            <section className={style.section2} id="hvagarsommerjobbenutpa">
              <h3 className={style.heading}>Hva går sommerjobben ut på?</h3>
              <div className={style.section2Flex}>
                <div className={style.section2Text}>
                  <p className={style.section2Paragraph}>
                    En sommerjobb i Variant er en fin mulighet til å anvende det
                    du har lært på skolen i praksis. Det forventes ikke at du er
                    utlært, men at du ønsker å lære mer. I et tverrfaglig team
                    bestående av designere og utviklere kommer du til å jobbe på
                    et av de spennende kundeprosjektene vi har. Underveis får du
                    god oppfølging og tilrettelegging fra erfarne konsulenter
                    som ønsker at du lykkes. Sjekk ut{' '}
                    <a className={style.blogpostLink}>bloggen vår</a> for å lese
                    mer om hva årets sommerstudenter jobbet med.
                  </p>

                  <p className={style.section2Paragraph}>
                    I 2023 tilbyr vi sommerjobb i både{' '}
                    <strong>Trondheim</strong>, <strong>Oslo</strong> og{' '}
                    <strong>Bergen</strong>, til henholdsvis seks, fem og to
                    studenter. Hvor du vil jobbe bestemmer du naturligvis selv.
                    Sommerjobben varer i fire + to uker med tre uker ferie i
                    mellomtiden.
                  </p>
                  {isMobile ? (
                    <div className={style.officeMapMobile}>
                      <MapMobile />
                    </div>
                  ) : (
                    <></>
                  )}
                  <p className={style.section2Paragraph}>
                    I Variant liker vi åpnenhet. Det betyr at du selvsagt ikke
                    trenger å lure på hvordan kontrakten din vil se ut for
                    sommeren, den ligger nemlig åpent og tilgjengelig på våre
                    nettsider. Timelønnen trenger du heller ikke å lure på, den
                    er på 271,83kr (eller 100
                    <em style={{ fontFamily: 'Nimbus Roman No9 L' }}>e </em>
                    🤓). Under “Hvorfor akkurat Variant?” ned kan du lese mer om
                    hva Variant står for og tilbyr.
                  </p>
                </div>
                {!isMobile ? <Map /> : <></>}
              </div>
            </section>
          </div>

          <section className={style.section3} id="hvameneraretssommerstudenter">
            <h3 className={style.heading}>Hva mener årets sommerstudenter?</h3>
            <div className={style.summerstudent1}>
              <img
                className={style.summerstudent1picture}
                src={summerStudent1}
                alt=""
              />
              <div>
                <p className={style.summerstudent1Paragraph}>
                  “Jeg følte man ble en del av firmaet selv om det «bare» var en
                  sommerjobb. [...] Utrolig hyggelige kollegaer som ønsker å
                  hjelpe der man kan og løfte hverandre frem. [...] Teamet hos
                  kunden stilte gjerne til rådgivning uansett hva.”
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
                  gjennom sommeren! Fagkvelder, felles lunsj, sosialt opplegg,
                  alt som skal til for en bonding opplevelse var der. [...]
                  Store ord om kjerneverdier kan fremstå som grunn
                  markedsføring. I Variant synes de når man kommer på jobb!”
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
                  “Det har vært helt fantastisk å være en del av Variant i
                  sommer. For en bra, varm og inkluderende gjeng!”
                </p>
                <p className={style.summerstudentName}>-Nora</p>
              </div>
            </div>
            <GreenBlob />
          </section>

          <div className={style.section4Color}>
            <section
              className={style.whyWorkAtVariant}
              id="hvorforjobbeivariant"
              style={{
                height: 'auto',
              }}
            >
              <div className={style.handbook}>
                <div className={style.handbookChildButton}>
                  <h3 className={style.heading}>Hvorfor akkurat Variant?</h3>
                  <p className={style.positionTextLeft}>
                    Variant er en variant av et konsulentselskap som er raust,
                    åpent og læreglad. Disse verdiene ligger til grunn for
                    hvordan vi møter hverandre, våre kunder og alle andre. I
                    håndboken vår kan du lese om hvordan ting gjøres i Variant,
                    hva vi prøver å oppnå og hvorfor vi tenker som vi gjør.
                    Under kan du sjekke ut noen utvalgte temaer.
                  </p>
                  {/* If mobile set background else check if pressed before set background */}
                  <div className={style.handbookGrid}>
                    <button
                      style={{
                        color: '#333333',
                        backgroundColor: isMobile
                          ? '#FAD2E2'
                          : whichButtonSelected === 'Formal og verdier' &&
                            !isMobile
                          ? '#FAD2E2'
                          : '#FFF3F2',
                      }}
                      className={style.handbookButton1}
                      onClick={() => handleOnClick('Formal og verdier')}
                    >
                      Formål og verdier
                    </button>
                    <button
                      style={{
                        color: isMobile
                          ? 'white'
                          : whichButtonSelected === 'Tillit og ansvar' &&
                            !isMobile
                          ? 'white'
                          : '#333333',
                        backgroundColor: isMobile
                          ? '#8B0F40'
                          : whichButtonSelected === 'Tillit og ansvar' &&
                            !isMobile
                          ? '#8B0F40'
                          : '#FFF3F2',
                      }}
                      className={style.handbookButton2}
                      onClick={() => handleOnClick('Tillit og ansvar')}
                    >
                      Tillit og ansvar
                    </button>
                    <button
                      style={{
                        color: isMobile
                          ? 'white'
                          : whichButtonSelected === 'Variantdag' && !isMobile
                          ? 'white'
                          : '#333333',
                        backgroundColor: isMobile
                          ? '#423D89'
                          : whichButtonSelected === 'Variantdag' && !isMobile
                          ? '#423D89'
                          : '#FFF3F2',
                      }}
                      className={style.handbookButton3}
                      onClick={() => handleOnClick('Variantdag')}
                    >
                      Variantdag
                    </button>
                    <button
                      style={{
                        color: '#333333',
                        backgroundColor: isMobile
                          ? '#03DAC6'
                          : whichButtonSelected === 'Miljofyrtarn' && !isMobile
                          ? '#03DAC6'
                          : '#FFF3F2',
                      }}
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
          <div style={{ backgroundColor: '#8B0F40', color: 'white' }}>
            <AfterApplying red={true} />
          </div>

          <section className={style.section6} id="sokSommerjobb">
            <h3 className={style.heading}>Søk sommerjobb</h3>
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
                    <p>
                      <a href="tel:41637572">41637572</a>
                    </p>
                  </div>
                  <div>
                    <p>|</p>
                  </div>
                  <p>
                    <a href="mailto:mk@variant.no">mk@variant.no</a>
                  </p>
                </div>
              </div>
              <div className={style2.imagePositionMobile}>
                <img
                  className={style.Marius}
                  src={Marius}
                  alt="Bilde av Marius"
                />
              </div>
              <div className={style2.ApplyDiv}>
                <div className={style2.applyButtonPink}>
                  <p>
                    <a href="/jobs/sommerjobb-designer-2023">
                      Søk som designer
                    </a>
                  </p>
                </div>
                <div className={style2.applyButtonBlue}>
                  <p>
                    <a href="/jobs/sommerjobb-utvikler-2023">
                      Søk som utvikler
                    </a>
                  </p>
                </div>
              </div>
              <div className={style2.imagePositionDesktop}>
                <img
                  className={style.Marius}
                  src={Marius}
                  alt="Bilde av Marius"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Content;
