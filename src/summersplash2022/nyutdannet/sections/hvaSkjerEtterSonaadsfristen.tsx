import TimeLine from 'src/summersplash2022/img/tidslinje';
import style from 'src/summersplash2022/index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import DarkRedBlob from '../img/DarkRedBlob';
import Section6Blob from '../img/section6Blob';
import TimeLineBlack from '../img/tidslinjeSvart';

const AfterApplying = (props: { red: boolean }) => {
  const Even = require('src/summersplash2022/img/Even.png');

  if (props.red) {
    return (
      <section className={style2.section6} id="hvaskjerettersoknadsfristen">
        <h3 className={style.section5Heading}>
          Hva skjer etter søknadsfristen?
        </h3>
        <div className={style2.flexTimeline}>
          <div className={style2.section6Div}>
            <p className={style.section5ParagraphLeft}>
              Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
              unaturlig situasjon, og man blir ikke godt kjent med hverandre.
              Etter at vi shar vurdert alle søknadene inviterer vi utvalgte
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
          <div className={style.section5Div2}>
            <div className={style.timeLine}>
              <TimeLine />
            </div>

            <div className={style.søknadstips}>
              <h4 className={style.section5HeadingH4}>Søknadstips:</h4>
              <p className={style.section5Paragraph}>
                Vi setter pris på en søknad med CV, søknadsbrev og
                karakterutskrift. Det viktigste for oss er å få et helhetlig
                bilde. Både av deg som person, din eksisterende kompetanse og
                dine ambisjoner. Så hvem er du og hvorfor søker du sommerjobb i
                Variant? Vi trenger mennesker som bryr seg om å skape en bedre
                hverdag. Er det deg?
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={style2.section6} id="hvaskjerettersoknadsfristen">
      <h3 className={style.section5Heading}>Hva skjer etter søknadsfristen?</h3>
      <div className={style2.flexTimeline}>
        <div className={style2.section6Div}>
          <p className={style.section5ParagraphLeft}>
            Vi liker ikke tradisjonelle intervjuer. De plasserer søker i en
            unaturlig situasjon, og man blir ikke godt kjent med hverandre.
            Etter at vi shar vurdert alle søknadene inviterer vi utvalgte
            kandidater til en kaffeprat. Dette er en uformell samtale hvor målet
            er å bli bedre kjent med hverandre, med fokus på både det faglige og
            det personlige. Og nei – du er selvsagt ikke nødt til å drikke
            kaffe.
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
            <Section6Blob />
          </div>
        </div>
        <div className={style.section5Div2}>
          <div className={style.timeLine}>
            <TimeLineBlack />
          </div>

          <div className={style.søknadstips}>
            <h4 className={style.section5HeadingH4}>Søknadstips:</h4>
            <p className={style.section5Paragraph}>
              Vi setter pris på en søknad med CV, søknadsbrev og
              karakterutskrift. Det viktigste for oss er å få et helhetlig
              bilde. Både av deg som person, din eksisterende kompetanse og dine
              ambisjoner. Så hvem er du og hvorfor søker du sommerjobb i
              Variant? Vi trenger mennesker som bryr seg om å skape en bedre
              hverdag. Er det deg?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterApplying;
