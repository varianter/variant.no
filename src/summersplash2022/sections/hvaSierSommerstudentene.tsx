import style from './hvaSierSommerstudente.module.css';
import sharedStyle from '../index.module.css';
import GreenBlob from '../img/greenBlob';

const summerstudentsQuotes = [
  {
    name: 'Emma',
    quote: `“Jeg er utrolig glad for å få være en del av variantgjengen i
      sommer! Det er gøy å se hvordan kjerneverdier som åpenhet og
      læreglede virkelig praktiseres i arbeidshverdagen, ikke bare
      på papiret. Det gjør at jeg føler meg veldig inkludert og
      lærer masse, samtidig som vi har det mye moro!\”`,
    picture: require('../img/emma.svg'),
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
    name: 'Swarny',
    quote: `“Sommeren hos Variant har vært helt fantastisk. Vi fikk jobbe
      med et megakult og aktuelt prosjekt med god oppfølging, både
      fra Variant og kunden. Selv om Variant er et konsulentselskap,
      har de et godt sosialt miljø hvor alle er inkluderende, ivrige
      og åpne. Jeg er superfornøyd med at
      jeg søkte sommerjobb hos Variant!!”`,
    picture: require('../img/swarny.svg'),
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
