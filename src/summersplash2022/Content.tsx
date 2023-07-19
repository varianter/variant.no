import React, { useEffect, useState } from 'react';
import style from './index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import { HandbookPage } from './utils/handBookPages';
import Header from './components/header/header';
import PinkBlob from './img/pinkBlob';
import GreenBlob from './nyutdannet/img/greenBlob';
import AfterApplying, {
  ApplyType,
} from './nyutdannet/sections/hvaSkjerEtterSonaadsfristen';
import MoreInfo from './img/merInfo';
import WhyVariant from './nyutdannet/sections/hvorforAkkurattVariant';

const Content = () => {
  const blobSection1 = require('./img/section1Blob.png');
  const Marius = require('./img/Marius.png');
  const summerStudent1 = require('./img/emma.svg');
  const summerStudent2 = require('./img/mathias.svg');
  const summerStudent3 = require('./img/swarny.svg');
  const norwayMap = require('./img/norway summer job.svg');
  // bildefiler finnes på  https://www.figma.com/file/9130OrLEkCHn15Cq4BvPRP/Skisser?type=design&node-id=908-163&mode=design&t=Bg1HGOBmQhOpszRV-4

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.matchMedia('(max-width: 900px)').matches);
  };

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 900px)').matches);
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={style.scrollContainer} id="scrollContainer">
        <div>
          <section className={style.section1} id="forside">
            <div className={style.header}>
              <Header white={false} />
            </div>
            <span className={style.searchNewVariants}>
              <h1 className={style.bigHeading}>
                Vi ser etter 23 sommervarianter i 2024!
              </h1>
            </span>
            <br />
            <div className={style.ApplyDiv}>
              <div className={style2.applyButtonPink}>
                <p>Søk senest 1. oktober</p>
                <p>
                  <a href="#sokSommerjobb">Søk sommerjobb</a>
                </p>
              </div>
              <div className={style2.applyButtonBlue}>
                <p>Ferdig utdannet i 2024?</p>
                <p>
                  <a href="/nyutdannet">Jeg vil ha fast jobb</a>
                </p>
              </div>
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
              <h2 className={style.heading}>Hva går sommerjobben ut på?</h2>
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
                    <a href='https://blog.variant.no/' className={style.blogpostLink}>bloggen vår</a> for å lese
                    mer om hva årets sommerstudenter jobbet med.
                  </p>

                  <p className={style.section2Paragraph}>
                    I 2024 tilbyr vi sommerjobb i både{' '}
                    <strong>Trondheim</strong>, <strong>Oslo</strong> og{' '}
                    <strong>Bergen</strong>, til henholdsvis ti, ti og tre
                    studenter. Hvor du vil jobbe bestemmer du naturligvis selv.
                    Sommerjobben varer i fire + to uker med tre uker ferie i
                    mellomtiden.
                  </p>
                  {isMobile ? (
                    <div className={style.officeMapMobile}>
                      <img
                        src={norwayMap}
                        alt="Vi ansetter 10 i Trondheim, 10 i Oslo og 3 i Bergen!"
                        width="100%"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <p className={style.section2Paragraph}>
                    I Variant liker vi åpenhet. Det betyr at du selvsagt ikke
                    trenger å lure på hvordan kontrakten din vil se ut for
                    sommeren, den ligger nemlig åpent og tilgjengelig på våre
                    nettsider. Timelønnen trenger du heller ikke å lure på, den
                    er på 271,83kr (eller 100
                    <em style={{ fontFamily: 'Nimbus Roman No9 L' }}>e </em>
                    🤓). Under “Hvorfor akkurat Variant?” ned kan du lese mer om
                    hva Variant står for og tilbyr.
                  </p>
                </div>
                {!isMobile ? (
                  <img
                    src={norwayMap}
                    alt="Vi ansetter 10 i Trondheim, 10 i Oslo og 3 i Bergen"
                  />
                ) : (
                  <></>
                )}
              </div>
            </section>
          </div>

          <section className={style.section3} id="hvameneraretssommerstudenter">
            <h2 className={style.heading}>Hva mener årets sommerstudenter?</h2>
            <div className={style.summerstudent1}>
              <img
                className={style.summerstudent1picture}
                src={summerStudent1}
                alt=""
              />
              <div>
                <p className={style.summerstudent1Paragraph}>
                  “Jeg er utrolig glad for å få være en del av variantgjengen i
                  sommer! Det er gøy å se hvordan kjerneverdier som åpenhet og
                  læreglede virkelig praktiseres i arbeidshverdagen, ikke bare
                  på papiret. Det gjør at jeg føler meg veldig inkludert og
                  lærer masse, samtidig som vi har det mye moro!”
                </p>
                <p className={style.summerstudentName1}>-Emma</p>
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
                  “Sommeren i Variant ga meg en smakebit av hva det vil si å
                  være konsulent. Med ekte kunder og reelle behov lærte jeg
                  masse og fikk vist frem ferdighetene mine. Gjennom sosiale
                  arrangementer og pulserende Slack-kanaler følte jeg meg
                  inkludert allerede før dag én. Jevnlige sparringer ga faglig
                  påfyll og støtte til teamet, og folkene her er rett og slett
                  herlige 🤗”
                </p>
                <p className={style.summerstudentName2}>-Mathias</p>
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
                  “Sommeren hos Variant har vært helt fantastisk. Vi fikk jobbe
                  med et megakult og aktuelt prosjekt med god oppfølging, både
                  fra Variant og kunden. Selv om Variant er et konsulentselskap,
                  har de et godt sosialt miljø hvor alle er inkluderende, ivrige
                  og åpne. Jeg er superfornøyd med at
                  jeg søkte sommerjobb hos Variant!!”
                </p>
                <p className={style.summerstudentName}>-Swarny</p>
              </div>
            </div>
            <GreenBlob />
          </section>

          <div className={style.sectionLightPeach}>
            <WhyVariant pages={[HandbookPage.INTENTIONS_AND_VALUES, HandbookPage.TRUST_AND_RESPONSIBILITY, HandbookPage.VARIANTDAY, HandbookPage.ENVIRONMENT_LIGHTHOUSE]} />
          </div>

          <div style={{ backgroundColor: '#8B0F40', color: 'white' }}>
            <AfterApplying red={true} applyType={ApplyType.SUMMER} />
          </div>

          <section className={style.section6} id="sokSommerjobb">
            <h2 className={style.heading}>Søk sommerjobb</h2>
            <div className={style.section6Flex}>
              <div className={style.section6Text}>
                <p className={style.section6Paragraph}>
                  Vi håper du søker, og vi ser frem til å bli bedre kjent med
                  deg. Har du spørsmål om sommerjobben eller Variant? Ta gjerne
                  kontakt med meg.
                </p>
                <p className={style.section6Paragraph2}>
                  - Marius Krakeli, Chief Recruitment Officer
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
                    <a href="/jobs/sommerjobb-designer-2024">
                      Søk som designer
                    </a>
                  </p>
                </div>
                <div className={style2.applyButtonBlue}>
                  <p>
                    <a href="/jobs/sommerjobb-utvikler-2024">
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
