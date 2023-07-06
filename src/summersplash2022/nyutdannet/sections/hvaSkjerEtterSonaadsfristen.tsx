import style from 'src/summersplash2022/index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import DarkRedBlob from '../img/mørkerødBlob';
import Section6Blob from '../img/section6Blob';

export enum ApplyType {
  GRADUATE,
  SUMMER,
}

const AfterApplying = (props: { red: boolean; applyType: ApplyType }) => {
  const Even = require('src/summersplash2022/img/Even.png');
  let TimeLine;
  if (props.applyType === ApplyType.GRADUATE) {
    TimeLine = require('../img/graduate timeline.svg');
  } else {
    TimeLine = require('../../img/timeline.svg');
  }

  if (props.red) {
    return (
      <section className={style2.section6} id="hvaskjerettersoknadsfristen">
        <h2 className={style.heading}>Hva skjer etter søknadsfristen?</h2>
        <div className={style.flexTimeline}>
          <div className={style2.section6Div}>
            <p className={style.section5ParagraphLeft}>
              Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
              unaturlig situasjon, og man blir ikke godt kjent med hverandre.
              Etter at vi har vurdert alle søknadene inviterer vi utvalgte
              kandidater til en kaffeprat. Dette er en uformell samtale hvor
              målet er å bli bedre kjent med hverandre, med fokus på både det
              faglige og det personlige. Og nei – du er selvsagt ikke nødt til å
              drikke kaffe.
            </p>
            <p className={style.section5ParagraphLeft}>
              Dersom du får jobbtilbud og takker ja, inkluderes du straks i
              Variant. Du får tilgang til vår Slack, og mulighet til å delta på
              faglige og sosiale arrangementer. Dette inkluderer blant annet
              spill- og fagkvelder, nyttårskalas og variantdager, som er fine
              muligheter til å bli bedre kjent før sommerjobben starter i juni.
            </p>
            <div className={style.Even}>
              <img src={Even} className={style.EvenPicture} alt="Even" />
            </div>
            <div className={style2.section6Blob}>
              <DarkRedBlob />
            </div>
          </div>

          <div className={style.timeLine}>
            <img
              src={TimeLine}
              alt="Søknadsfrist: 1.oktober, Kaffeprat: 4.-5.oktober, tilbud om sommerjobb: 6.oktober
              sosiale og faglige arrangementer: november-juni, første arbeidsperiode: 10.juni - 5.juli (4 uker), ferie
              8.juli - 26 juli (3 uker), andre arbeidsperiode : 29.juli - 9.august (2 uker)   "
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className={style.søknadstips}>
          <h4 className={style.section5HeadingH4}>Søknadstips:</h4>
          <p className={style.section5Paragraph}>
            Vi setter pris på en søknad med CV, søknadsbrev, karakterutskrift og
            gjerne også portifolio og/eller GitHub profil. Det viktigste for oss
            er å få et helhetlig bilde. Både av deg som person, din eksisterende
            kompetanse og dine ambisjoner. Så hvem er du og hvorfor søker du
            sommerjobb i Variant? Vi trenger mennesker som bryr seg om å skape
            en bedre hverdag. Er det deg?
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className={style2.section6} id="hvaskjerettersoknadsfristen">
        <h3 className={style.heading}>Hva skjer etter søknadsfristen?</h3>
        <div className={style.flexTimeline}>
          <div className={style2.section6Div}>
            <p className={style.section5ParagraphLeft}>
              Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
              unaturlig situasjon, og man blir ikke godt kjent med hverandre.
              Etter at vi har vurdert alle søknadene inviterer vi utvalgte
              kandidater til en kaffeprat. Dette er en uformell samtale hvor
              målet er å bli bedre kjent med hverandre, med fokus på både det
              faglige og det personlige. Og nei – du er selvsagt ikke nødt til å
              drikke kaffe.
            </p>

            <p className={style.section5ParagraphLeft}>
              Noen dager etter kaffepraten vil aktuelle kandidater inviteres til
              en sammarbeidscase hvor man vil jobbe sammen med 2 andre
              varianter. Man vil få oppgaven på forhånd, men man skal ikke gjøre
              noen store forbredelser.
            </p>
            <p className={style.section5ParagraphLeft}>
              Dersom du får jobbtilbud og takker ja, inkluderes du straks i
              Variant. Du får tilgang til vår Slack, og mulighet til å delta på
              faglige og sosiale arrangementer. Dette inkluderer blant annet
              spill- og fagkvelder, nyttårskalas og variantdager, som er fine
              muligheter til å bli bedre kjent før man starter.
            </p>
          </div>
          <div className="timelineBlack">
            <img
              src={TimeLine}
              alt="tidslinje"
              style={{ zIndex: 1, marginTop: '50px' }}
            />
          </div>
        </div>

        <div>
          <h4 className={style.section5HeadingH4}>Søknadstips:</h4>
          <p className={style.section5Paragraph}>
            Vi setter pris på en søknad med CV, søknadsbrev og karakterutskrift.
            Det viktigste for oss er å få et helhetlig bilde. Både av deg som
            person, din eksisterende kompetanse og dine ambisjoner. Så hvem er
            du og hvorfor søker du sommerjobb i Variant? Vi trenger mennesker
            som bryr seg om å skape en bedre hverdag. Er det deg?
          </p>
        </div>
        <div className={style2.section6Blob}>
          <Section6Blob />
        </div>
      </section>
    );
  }
};

export default AfterApplying;
