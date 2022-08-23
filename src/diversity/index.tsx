import { ButtonNextLink } from '@components/button';
import Head from 'next/head';
import SayHi from 'src/index/say-hi';
import Layout from 'src/layout';
import style from './diversity.module.css';

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
          Vi synes at mangfold er viktig.
          <br /> Mangfold i teknologi betyr også kjønnsbalanse. <br />
          Derfor samarbeider vi med de som jobber med dette. <br />
          Det gir verdi og nytte for de, oss og deg.
        </p>
      </header>

      {/* Usikkert om dette skal være med, kommenteres ut nå*/}
      {/* <nav className={style['nav-row']}>
        <a href="#ada">Ada</a>
        <a href="#tenk">TENK Tech Camp</a>
        <a href="#oda">ODA-Nettverket</a>
        <div className={style['nav-row__arrow-comment']}>
          <p>Klikk for å hoppe</p>
          <img src="/images/curved_arrow.svg" />
        </div>
      </nav> */}

      <div className={style['primary-container']}>
        <section className={style['project-category']}>
          <article id="ada" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h3>Ada</h3>
              <p>
                Ada jobber for å bidra til kjønnsbalanse i teknologi- og
                ingeniørfag for studenter. De har tett tilknytning til
                næringslivet - deriblant oss.
              </p>
              <p>
                Formålet deres er å å øke trivselen og motivere jenter til å
                fullføre studieløpet innenfor disse fagområdene.
              </p>
              <p> Dette synes vi er skikkelig kult!</p>
              <p>
                Derfor har vi et samarbeid med ADA hvor vi har en mentorrolle,
                deltar på studentarrangementer og arrangerer eventer.
              </p>
            </section>
            <img src="/images/diversity/tenk.png" alt="Placeholder image" />
          </article>

          <article className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>Hils på Sarah</h4>
              <p>
                Sarah er en av Variantene som er engasjert i
                mangfolds(kampen/satsningen/arbeidet). Hun bidrar med kunnskap,
                erfaring og sprer læringsglede.
              </p>
              <q>Sitat Sarah</q>
            </section>
            <img src="/images/diversity/tenk.png" alt="Placeholder image" />
          </article>

          <article id="tenk" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h3>TENK Tech Camp</h3>
              <p>
                Jenteprosjektet ADA jobber for å bidra til kjønnsbalanse i
                teknologi- og ingeniørfag for studenter. De har tett tilknytning
                til næringslivet - deriblant oss.
              </p>
              <p>
                Formålet deres er å å øke trivselen og motivere jenter til å
                fullføre studieløpet innenfor disse fagområdene.
              </p>
              <p>Dette synes vi er skikkelig kult!</p>
              <p>
                Derfor har vi et samarbeid med ADA hvor vi har en mentorrolle,
                stiller lokalene våre til disposisjon og arrangerer eventer.
              </p>
            </section>
            <img
              src="/images/diversity/tenk.png"
              alt="Sarah med to andre arrangører av TENK Tech Camp"
            />
          </article>
        </section>

        <section className={style.contact}>
          <h3>Samarbeid?</h3>
          <h3>Kontakt?</h3>
          {/* Button should lead to contact page once it exists */}
          <ButtonNextLink href="" className={style['contact__button']}>
            Ta kontakt
          </ButtonNextLink>
        </section>

        <section className={style['project-category']}>
          <article id="oda" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h3>ODA-nettverket</h3>
              <p>
                ODA-nettverket jobber aktivt for å skape mangfold i tech. De har
                spesielt fokus på kvinner i bransjen ved å motivere og inspirere
                med events, foredrag, mentorprogrammer og gode forbilder.
              </p>
              <p>Nettopp derfor er vi partnere med ODA!</p>
              <p>
                Vår rolle i samarbeidet med ODA er at vi stiller med mentorer,
                kunnskap, lokaler og bidrar til å arrangere eventer.
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
                Linn er en av Variantene som er mentor hos ODA. Hun bidrar med
                kunnskap, erfaring og spre læreglede.
              </p>
              <q>Sitat fra Linn</q>
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
