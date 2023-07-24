import style from './index.module.css';
import { HandbookPage } from './utils/handBookPages';
import GreenBlob from './nyutdannet/img/greenBlob';
import Apply from './nyutdannet/sections/søkJobb';
import { ApplyType } from './utils/utils';
import AfterApplying from './nyutdannet/sections/hvaSkjerEtterSonaadsfristen';
import WhyVariant from './nyutdannet/sections/hvorforAkkurattVariant';
import LandingPage from './nyutdannet/sections/forside';

const summerstudentsQuotes = [
  {
    name: 'Emma',
    quote: `“Jeg er utrolig glad for å få være en del av variantgjengen i
    sommer! Det er gøy å se hvordan kjerneverdier som åpenhet og
    læreglede virkelig praktiseres i arbeidshverdagen, ikke bare
    på papiret. Det gjør at jeg føler meg veldig inkludert og
    lærer masse, samtidig som vi har det mye moro!\”`,
    picture: require('./img/emma.svg'),
  },
  {
    name: 'Mathias',
    quote: `“Sommeren i Variant ga meg en smakebit av hva det vil si å
    være konsulent. Med ekte kunder og reelle behov lærte jeg
    masse og fikk vist frem ferdighetene mine. Gjennom sosiale
    arrangementer og pulserende Slack-kanaler følte jeg meg
    inkludert allerede før dag én. Jevnlige sparringer ga faglig
    påfyll og støtte til teamet, og folkene her er rett og slett
    herlige 🤗”`,
    picture: require('./img/mathias.svg'),
  },
  {
    name: 'Swarny',
    quote: `“Sommeren hos Variant har vært helt fantastisk. Vi fikk jobbe
    med et megakult og aktuelt prosjekt med god oppfølging, både
    fra Variant og kunden. Selv om Variant er et konsulentselskap,
    har de et godt sosialt miljø hvor alle er inkluderende, ivrige
    og åpne. Jeg er superfornøyd med at
    jeg søkte sommerjobb hos Variant!!”`,
    picture: require('./img/swarny.svg'),
  },
];

const Content = () => {
  const norwayMap = require('./img/norway summer job.svg');

  return (
    <>
      <div className={style.scrollContainer} id="scrollContainer">
        <LandingPage
          applyType={ApplyType.SUMMER}
          className={style.sectionLightBeige}
        />
        <section
          className={`${style.aboutTheJobOrEmployeeSection} ${style.sectionDarkBlue}`}
          id="hvagarsommerjobbenutpa"
        >
          <h2>Hva går sommerjobben ut på?</h2>
          <div className={style.aboutTheJobOrEmployeeSectionFlex}>
            <div className={style.aboutTheJobOrEmployeeSectionTextAboveImg}>
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
                I 2024 tilbyr vi sommerjobb i både <strong>Trondheim</strong>,{' '}
                <strong>Oslo</strong> og <strong>Bergen</strong>, til
                henholdsvis ti, ti og tre studenter. Hvor du vil jobbe bestemmer
                du naturligvis selv. Sommerjobben varer i fire + to uker med tre
                uker ferie i mellomtiden.
              </p>
            </div>
            <p className={style.aboutTheJobOrEmployeeSectionTextBelowImg}>
              I Variant liker vi åpenhet. Det betyr at du selvsagt ikke trenger
              å lure på hvordan kontrakten din vil se ut for sommeren, den
              ligger nemlig åpent og tilgjengelig på våre nettsider. Timelønnen
              trenger du heller ikke å lure på, den er på 271,83kr (eller 100
              <em style={{ fontFamily: 'Nimbus Roman No9 L' }}>e </em>
              🤓). Under “Hvorfor akkurat Variant?” ned kan du lese mer om hva
              Variant står for og tilbyr.
            </p>
            <div className={style.aboutTheJobOrEmployeeSectionImgWrapper}>
              <img
                src={norwayMap}
                alt="Vi ansetter 10 i Trondheim, 10 i Oslo og 3 i Bergen"
                className={style.aboutTheJobOrEmployeeSectionImg}
              />
            </div>
          </div>
        </section>

        <section
          className={`${style.summerstudentQuotesSection} ${style.sectionDarkTeal}`}
          id="hvameneraretssommerstudenter"
        >
          <h2>Hva mener årets sommerstudenter?</h2>
          {summerstudentsQuotes.map((student) => (
            <div className={style.summerstudent} key={student.name}>
              <img
                src={student.picture}
                alt={`Bilde av ${student.name}`}
                className={style.summerstudentPicture}
              />
              <div>
                <p className={style.summerstudentQuote}>{student.quote}</p>
                <p className={style.summerstudentName}>- {student.name}</p>
              </div>
            </div>
          ))}

          <GreenBlob className={style.summerStudentQuotesSectionGreenBlobTop} />
          <GreenBlob
            className={style.summerStudentQuotesSectionGreenBlobMiddle}
          />
          <GreenBlob
            className={style.summerStudentQuotesSectionGreenBlobBottom}
          />
        </section>

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
