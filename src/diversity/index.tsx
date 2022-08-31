import { ButtonLink } from '@components/button';
import Head from 'next/head';
import SayHi from 'src/index/say-hi';
import Layout from 'src/layout';
import style from './diversity.module.css';

const Diversity = () => {
  return (
    <Layout title="Variant – Mangfold">
      <Head>
        <meta
          property="og:description"
          content="Vi i Variant samarbeider med de som aktivt jobber for å skape mangfold, fordi det gir verdi og nytte for absolutt alle."
        />
        <meta
          name="description"
          content="Vi i Variant samarbeider med de som aktivt jobber for å skape mangfold, fordi det gir verdi og nytte for absolutt alle.."
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
          Mangfold skaper inkluderende og fullgode løsninger, som gir verdi og
          nytte for absolutt alle. Vi i Variant samarbeider med de som aktivt
          jobber for dette, fordi vi mener at mangfold og perspektiv er viktig!
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
                Ada jobber for å øke kjønnsbalansen på ingeniør- og
                teknologistudiene ved NTNU. Formålet deres er å motivere kvinner
                til å fullføre studiene innenfor disse fagområdene.
              </p>
              <p>
                Dette er kjempeviktig for oss og IT-bransjen generelt på grunn
                av veldig lav kvinneandel i arbeidslivet. Dersom det
                uteksamineres flere kvinner innen teknologi, vil dette gagne
                både bransjen og samfunnet som helhet.
              </p>
              <p>
                Dette synes vi er skikkelig kult! Derfor har vi et samarbeid med
                ADA hvor vi har en mentorrolle, deltar på ulike aktiviteter og
                holder arrangementer.
              </p>
            </section>
            <img
              src="/images/diversity/ada.png"
              alt="To personer står på en scene på Adas 25-årsjubileum"
            />
          </article>

          <article className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>Hils på Sarah</h4>
              <p>
                Sarah er mangfoldsansvarlig i Variant og brenner for å få flere
                jenter inn i teknologibransjen. Hun har jobbet i Kodeklubben og
                Ada under studiene, vært involvert i kursing, studentarrangement
                og rekruttering i arbeidslivet og er også aktiv i TENK.
              </p>
            </section>
            <img
              src="/images/diversity/sarah.png"
              alt="Sarah som hjelper noen jenter på TENK tech camp"
            />
          </article>

          <article id="tenk" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>TENK Tech Camp</h4>
              <p>
                TENK Tech Camp er en gratis teknologicamp for jenter i alderen
                13-18 år. Formålet med campen er å motivere jenter til å velge
                teknologiutdanning. På campen får jentene inspirasjon i form av
                foredrag og workshops. Jentene får blant annet prøve seg på
                webutvikling, sensorprogrammering og rakettbygging.
              </p>
              <p>
                Med stor entusiasme har vi i Variant vært med som veiledere og
                mentorer i noen år nå. Vi har holdt workshop i webutvikling (med
                HTML, CSS og JavaScript), musikk-koding (med SonicPi) og hvordan
                lage sin egen Podcast.
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
                Vi samarbeider med ODA ved å stille med mentorer til ODAs
                mentorprogram. Vi deltar på diverse arrangement og heier alt vi
                kan på jobben ODA gjør med å fremme kvinner i tech!
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
