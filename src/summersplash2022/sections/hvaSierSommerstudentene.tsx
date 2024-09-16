import style from './hvaSierSommerstudente.module.css';
import sharedStyle from '../index.module.css';
import GreenBlob from '../img/greenBlob';

const summerstudentsQuotes = [
  {
    name: 'Solveig',
    quote: `“Sommeren hos Variant var som å bli tatt inn i varmen av en stor familie, som umiddelbart fikk meg til å føle meg hjemme. De faste ansatte delte raust av sin kunnskap, tid og støtte, noe som gjorde det lett å finne seg til rette. Sommerteamet vårt, bestående av to designere og to utviklere, jobbet i seks uker på et spennende prosjekt for en start-up. Det var kult å kunne bygge noe verdifullt på kort tid – og ikke minst at det gikk rett i produksjon etter sommeren! Og ja, tre uker med velfortjent fri midt i alt dette smakte også godt.”`,
    picture: require('../img/solveig-blob.png'),
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
    picture: require('../img/mathias.svg'),
  },
  {
    name: 'Max',
    quote: `“Denne sommeren ble faktist en av de beste somrene på flere år, mye takk vare Variant! Det var så fint å komme til jobb og bli mottatt med varme og arbeide sammen med et fint team på et ordentlig prosjekt. Variant var skikkelig god på å tilby oss sosiale aktiviteter utover arbeidet, uten press om at man må bli med på alt. Opplevelsen fikk meg til å føle at det kanskje ikke er så verst å bli ferdig som student tross alt”`,
    picture: require('../img/max-blob.png'),
  },
];

const SummerstudentsQuotes = () => {
  return (
    <>
      <section
        className={`${style.section} ${sharedStyle.sectionDarkTeal}`}
        id="hvameneraretssommerstudenter"
      >
        <h2>Hva mener tidligere sommerstudenter?</h2>
        {summerstudentsQuotes.map((student) => (
          <div className={style.summerstudent} key={student.name}>
            <img
              src={student.picture}
              alt={`Bilde av ${student.name}`}
              className={style.img}
            />
            <div>
              <p className={style.quote}>{student.quote}</p>
              <p className={style.name}>- {student.name}</p>
            </div>
          </div>
        ))}

        <GreenBlob className={style.greenBlobTop} />
        <GreenBlob className={style.greenBlobMiddle} />
        <GreenBlob className={style.greenBlobBottom} />
      </section>
    </>
  );
};

export default SummerstudentsQuotes;
