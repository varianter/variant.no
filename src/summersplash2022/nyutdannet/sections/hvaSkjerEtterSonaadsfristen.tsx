import style from 'src/summersplash2022/index.module.css';
import DarkRedBlob from '../img/mørkerødBlob';
import Section6Blob from '../img/section6Blob';
import { ApplyType } from 'src/summersplash2022/utils/utils';

const AfterApplying = ({ applyType }: { applyType: ApplyType }) => {
  const Even = require('src/summersplash2022/img/Even.png');
  const timelineImage =
    applyType === ApplyType.GRADUATE
      ? require('../img/graduate timeline.svg')
      : require('../../img/timeline.svg');

  const timelineDescription =
    applyType == ApplyType.GRADUATE
      ? `Søknadsfrist: 1.oktober, Kaffeprat: 4.-5.oktober, tilbud om sommerjobb: 6.oktober
  sosiale og faglige arrangementer: november-juni, første arbeidsperiode: 10.juni - 5.juli (4 uker), ferie
  8.juli - 26 juli (3 uker), andre arbeidsperiode : 29.juli - 9.august (2 uker)`
      : '';

  const isApplyGraduate: boolean = applyType == ApplyType.GRADUATE;

  return (
    <section className={style.section6} id="hvaskjerettersoknadsfristen">
      <h3 className={style.heading}>Hva skjer etter søknadsfristen?</h3>
      <div className={style.section6Flex}>
        <div className={style.section6About}>
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

        <div className={style.section6Even}>
          <img src={Even} className={style.EvenPicture} alt="Even" />
          <div className={style.section6PictureBlob}>
            {isApplyGraduate && <Section6Blob />}
            {!isApplyGraduate && <DarkRedBlob />}
          </div>
        </div>

        <div className={style.section6Timeline}>
          <img src={timelineImage} alt={timelineDescription} />
        </div>

        <div className={style.section6ApplicationTips}>
          <div className={style.section6Blob}>
            {isApplyGraduate && <Section6Blob />}
            {!isApplyGraduate && <DarkRedBlob />}
          </div>
          <h4 className={style.section5HeadingH4}>Søknadstips:</h4>
          <p>
            Vi setter pris på en søknad med CV, søknadsbrev og karakterutskrift.
            Det viktigste for oss er å få et helhetlig bilde. Både av deg som
            person, din eksisterende kompetanse og dine ambisjoner. Så hvem er
            du og hvorfor søker du {isApplyGraduate ? 'jobb' : 'sommerjobb'} i
            Variant? Vi trenger mennesker som bryr seg om å skape en bedre
            hverdag. Er det deg?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AfterApplying;
