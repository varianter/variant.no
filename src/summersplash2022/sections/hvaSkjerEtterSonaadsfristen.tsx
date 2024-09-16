import style from './hvaSkjerEtterSoknadsfristen.module.css';
import DarkRedBlob from '../img/mørkerødBlob';
import DarkBeigeBlob from '../img/darkBeigeBlob';
import { ApplyType } from 'src/summersplash2022/utils/utils';

const AfterApplying = ({
  applyType,
  className,
}: {
  applyType: ApplyType;
  className: string;
}) => {
  const Even = require('src/summersplash2022/img/Even.png');
  const timelineImage =
    applyType === ApplyType.GRADUATE
      ? require('../img/graduate timeline.svg')
      : require('../img/summerjob_timeline_2025.svg');

  const timelineDescription =
    applyType == ApplyType.GRADUATE
      ? `Søknadsfrist: 1.oktober, Kaffeprat: 2.-3.oktober, tilbud om sommerjobb: 4.oktober
  sosiale og faglige arrangementer: november-juni, første arbeidsperiode: 9.juni - 4.juli (4 uker), ferie
  7.juli - 25. juli (3 uker), andre arbeidsperiode : 28.juli - 8.august (2 uker)`
      : '';

  const isApplyGraduate: boolean = applyType == ApplyType.GRADUATE;

  return (
    <section
      className={`${style.section} ${className}`}
      id="hvaskjerettersoknadsfristen"
    >
      <h2>Hva skjer etter søknadsfristen?</h2>
      <div className={style.flex}>
        <div className={style.about}>
          <p>
            Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
            unaturlig situasjon, og man blir ikke godt kjent med hverandre.
            Etter at vi har vurdert alle søknadene inviterer vi utvalgte
            kandidater til en kaffeprat. Dette er en uformell samtale hvor målet
            er å bli bedre kjent med hverandre, med fokus på både det faglige og
            det personlige. Og nei – du er selvsagt ikke nødt til å drikke
            kaffe.
          </p>
          {isApplyGraduate && (
            <p>
              Noen dager etter kaffepraten vil aktuelle kandidater inviteres til
              en sammarbeidscase hvor man vil jobbe sammen med 2 andre
              varianter. Man vil få oppgaven på forhånd, men man skal ikke gjøre
              noen store forbredelser.
            </p>
          )}
          <p>
            Dersom du får jobbtilbud og takker ja, inkluderes du straks i
            Variant. Du får tilgang til vår Slack, og mulighet til å delta på
            faglige og sosiale arrangementer. Dette inkluderer blant annet
            spill- og fagkvelder, nyttårskalas og variantdager, som er fine
            muligheter til å bli bedre kjent før{' '}
            {isApplyGraduate ? 'man starter' : 'sommerjobben starter i juni'}.
          </p>
        </div>

        <div
          className={`${style.imgDiv} ${
            isApplyGraduate ? '' : style.imgDivSummerjob
          }`}
        >
          <img src={Even} className={style.EvenPicture} alt="Even" />
          <div className={style.imgBlob}>
            {isApplyGraduate && <DarkBeigeBlob />}
            {!isApplyGraduate && <DarkRedBlob />}
          </div>
        </div>

        <div className={style.timeline}>
          <img src={timelineImage} alt={timelineDescription} />
        </div>

        <div className={style.applicationTips}>
          <h4>Søknadstips:</h4>
          <p>
            Vi setter pris på en søknad med CV, søknadsbrev og karakterutskrift.
            Det viktigste for oss er å få et helhetlig bilde. Både av deg som
            person, din eksisterende kompetanse og dine ambisjoner. Så hvem er
            du og hvorfor søker du {isApplyGraduate ? 'jobb' : 'sommerjobb'} i
            Variant? Vi trenger mennesker som bryr seg om å skape en bedre
            hverdag. Er det deg?
          </p>
          <div className={style.textBlob}>
            {isApplyGraduate && <DarkBeigeBlob />}
            {!isApplyGraduate && <DarkRedBlob />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterApplying;
