import { ButtonLink } from '@components/button';
import Head from 'next/head';
import SayHi from 'src/index/say-hi';
import Layout from 'src/layout';
import style from './diversity.module.css';
// TODO: Finalize content: Text, images, image alt text

const Diversity = () => {
  return (
    <Layout>
      <Head>
        <meta
          property="og:description"
          content="En variant av et konsulentselskap som er raust, åpent og læreglad. Vi bistår med utvikling, design, prosjektledelse, kursing og rådgiving."
        />
        <meta
          name="description"
          content="En variant av et konsulentselskap som er raust, åpent og læreglad. Vi bistår med utvikling, design, prosjektledelse, kursing og rådgiving."
        />
      </Head>
      <SayHi
        className={style.sayHi}
        href="https://twitter.com/intent/tweet?screen_name=variant_as"
        rel="noopener"
      />

      <header className={style.header}>
        <h2 className={style.header__title}>Mangfold</h2>
        <p>
          Vi synes at mangfold er viktig! <br />
          Vi samarbeider med de som aktivt jobber for dette. Mangfold skaper
          inkluderende og fullgode løsninger, som gir verdi og nytte for
          absolutt alle.
        </p>
      </header>

      {/* Usikkert om dette skal være med, kommenteres ut nå*/}
      {/* <nav className={style['nav-row']}>
        <a href="#ada">Ada</a>
        <a href="#tenk">TENK Tech Camp</a>
        <a href="#oda">ODA-Nettverket</a>
        <div className={style['nav-row__arrow-comment']}>
          <p>Klikk for å hoppe</p>
          <img alt="liten pil" src="/images/curved_arrow.svg" />
        </div>
      </nav> */}

      <div className={style['primary-container']}>
        <section className={style['project-category']}>
          <article id="ada" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>Ada</h4>
              <p>
                Ada jobber for å øke kjønnsbalansen i teknologi- og ingeniørfag
                for studenter. Dette er viktig for oss.
              </p>
              <p>
                Formålet deres er å å øke trivselen og motivere jenter til å
                fullføre studieløpet innenfor disse fagområdene.
              </p>
              <p>
                Dette synes vi er skikkelig kult! Derfor har vi et samarbeid med
                ADA hvor vi har en mentorrolle, deltar på ulike aktiviteter og
                holder arrangementer.
              </p>
            </section>
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </article>

          <article className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>Hils på Sarah</h4>
              <p>
                Sarah er en av Variantene som er engasjert i
                mangfolds(kampen/satsningen/arbeidet). Hun bidrar med kunnskap,
                erfaring og sprer læringsglede.
              </p>
            </section>
            <img src="/images/diversity/tenk.png" alt="Placeholder image" />
          </article>

          <article id="tenk" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>TENK Tech Camp</h4>
              <p>
                TENK Tech Camp arrangeres hvert år for jenter på ungdomsskolen
                og videregående. Campen går over to dager hvor jentene blant
                annet programmerer, lager podcast og raketter.
              </p>
              <p>
                Vi trenger flere jenter som søker på teknologifagene. Derfor
                støtter vi TENK med stor entusiasme. Vi deltar med veiledere og
                mentorer for å skape læreglede i ungdomsårene.
              </p>
            </section>
            <img
              src="/images/diversity/tenk.png"
              alt="Sarah med to andre arrangører av TENK Tech Camp"
            />
          </article>
        </section>

        <section className={style.contact}>
          <h4>Har du et initiativ vi kan samarbeide om?</h4>
          {/* TODO: Button should email someone (who?) */}
          <div className={style['contact__button__wrapper']}>
            <ButtonLink href="mailto:post@variant.no">Ta kontakt</ButtonLink>
          </div>
        </section>

        <section className={style['project-category']}>
          <article id="oda" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>ODA-nettverket</h4>
              <p>
                ODA-nettverket jobber aktivt for å skape mangfold innen
                teknologi. De jobber spesielt med kvinner i bransjen ved å
                motivere og inspirere med arrangementer, foredrag,
                mentorprogrammer og gode forbilder.
              </p>
              <p>
                Nettopp derfor er vi partnere med ODA! Vår rolle i samarbeidet
                med ODA er at vi stiller med mentorer, kunnskap og bidrar med
                arrangementer.
              </p>
            </section>
            <img
              src="/images/diversity/oda.png"
              alt="Linn og syv andre personer på et ODA-arrangement"
            />
          </article>

          <article className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>Hils på Linn</h4>
              <p>
                Linn er en av variantene som er engasjert i ODA-nettverket. Hun
                bidrar med kunnskap, erfaring og sprer læreglede som mentor og
                frivillig.
              </p>
            </section>
            <img
              src="/images/diversity/linn_oda.png"
              alt="En smilende Linn som har på seg en ODA-t-skjorte"
            />
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Diversity;
