import style from './index.module.css';
import { HandbookPage } from './utils/handBookPages';
import Apply from './sections/søkJobb';
import { ApplyType } from './utils/utils';
import AfterApplying from './sections/hvaSkjerEtterSonaadsfristen';
import WhyVariant from './sections/hvorforAkkurattVariant';
import LandingPage from './sections/forside';
import omJobbenStyle from './sections/hvemSokerVi.module.css';
import SummerstudentsQuotes from './sections/hvaSierSommerstudentene';

const Content = () => {
  const norwayMap = require('./img/summerjob_norway_2025.svg');

  return (
    <>
      <div className={style.scrollContainer} id="scrollContainer">
        <LandingPage
          applyType={ApplyType.SUMMER}
          className={style.sectionLightBeige}
        />
        <section
          className={`${omJobbenStyle.section} ${style.sectionDarkBlue}`}
          id="hvagarsommerjobbenutpa"
        >
          <h2>Hva går sommerjobben ut på?</h2>
          <div className={omJobbenStyle.flex}>
            <div className={omJobbenStyle.textAboveImg}>
              <p>
                En sommerjobb i Variant er en fin mulighet til å anvende det du
                har lært på skolen i praksis. Det forventes ikke at du er
                utlært, men at du ønsker å lære mer. I et tverrfaglig team
                bestående av designere og utviklere kommer du til å jobbe på et
                av de spennende kundeprosjektene vi har. Underveis får du god
                oppfølging og tilrettelegging fra erfarne konsulenter som ønsker
                at du lykkes. Sjekk ut{' '}
                <a href="https://blog.variant.no/">bloggen vår</a> for å lese
                mer om hva årets sommerstudenter jobbet med.
              </p>

              <p>
                I 2025 tilbyr vi sommerjobb i både <strong>Trondheim</strong>,{' '}
                <strong>Oslo</strong> og <strong>Bergen</strong>, til
                henholdsvis åtte, åtte og tre studenter. Hvor du vil jobbe
                bestemmer du naturligvis selv. Sommerjobben varer i fire + to
                uker med tre uker ferie i mellomtiden.
              </p>
            </div>
            <p className={omJobbenStyle.textBelowImg}>
              I Variant liker vi åpenhet. Det betyr at du selvsagt ikke trenger
              å lure på hvordan kontrakten din vil se ut for sommeren, den
              ligger nemlig åpent og tilgjengelig på våre nettsider. Timelønnen
              trenger du heller ikke å lure på, den er på 271,83kr (eller 100
              <em style={{ fontFamily: 'Nimbus Roman No9 L' }}>e </em>
              🤓). Under “Hvorfor akkurat Variant?” ned kan du lese mer om hva
              Variant står for og tilbyr.
            </p>
            <div className={omJobbenStyle.imgWrapper}>
              <img
                src={norwayMap}
                alt="Vi ansetter 8 i Trondheim, 8 i Oslo og 3 i Bergen"
                className={omJobbenStyle.img}
              />
            </div>
          </div>
        </section>

        <SummerstudentsQuotes />
        <WhyVariant
          pages={[
            HandbookPage.INTENTIONS_AND_VALUES,
            HandbookPage.TRUST_AND_RESPONSIBILITY,
            HandbookPage.VARIANTDAY,
            HandbookPage.ENVIRONMENT_LIGHTHOUSE,
          ]}
          className={style.sectionLightPeach}
        />

        <AfterApplying
          applyType={ApplyType.SUMMER}
          className={style.sectionDarkPink}
        />

        <Apply applyType={ApplyType.SUMMER} />
      </div>
    </>
  );
};

export default Content;
