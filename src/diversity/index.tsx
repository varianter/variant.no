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
          Vi synes at mangfold er viktig. Mangfold i teknologi betyr også
          kjønnsbalanse. Derfor samarbeider vi med de som jobber med dette. Det
          gir verdi og nytte for de, oss og deg.
        </p>
      </header>
      <nav>
        <a href="#ada">Ada</a>
        <a href="#tenk">TENK Tech Camp</a>
        <a href="#oda">ODA-Nettverket</a>
        <div>
          <p>Klikk for å hoppe</p>
          <div>*pil*</div>
        </div>
      </nav>

      <div className={style['primary-container']}>
        <section className={style['project-category']}>
          <article id="ada" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>Ada</h4>
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
              <p>"Sitat Sarah"</p>
            </section>
            <img src="/images/diversity/tenk.png" alt="Placeholder image" />
          </article>

          <article id="tenk" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>TENK Tech Camp</h4>
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
            <img src="/images/diversity/tenk.png" alt="Placeholder image" />
          </article>
        </section>

        <section>
          <h4>Samarbeid?</h4>
          <h4>Kontakt?</h4>
          <button>Ta kontakt</button>
        </section>

        <section className={style['project-category']}>
          <article id="oda" className={style['project-article']}>
            <section className={style['project-article__text']}>
              <h4>Ada</h4>
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
              <p>"Sitat Sarah"</p>
            </section>
            <img src="/images/diversity/tenk.png" alt="Placeholder image" />
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Diversity;
