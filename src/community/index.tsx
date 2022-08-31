import Arrow from '@components/arrow';
import Head from 'next/head';
import SayHi from 'src/index/say-hi';
import Layout from 'src/layout';
import style from './community.module.css';

const Diversity = () => {
  return (
    <Layout title="Variant – Tilrettelegging for læreglede i nærmiljøet">
      <Head>
        <meta
          property="og:description"
          content="Vi ønsker å legge til rette for læreglede i fagmiljøene, uansett hvem og hva."
        />
        <meta
          name="description"
          content="Vi ønsker å legge til rette for læreglede i fagmiljøene, uansett hvem og hva."
        />
      </Head>
      <SayHi
        className={style.sayHi}
        href="https://twitter.com/intent/tweet?screen_name=variant_as"
        rel="noopener"
      />

      <header className={style.header}>
        <h2 className={style.header__title}>Læreglede</h2>
        <p>
          Vi ønsker å legge tilrette for læreglede i fagmiljøene, uansett hvem
          og hva.
        </p>
        <p>
          Derfor stiller vi oss selv og ressursene våre til disposisjon for å
          bistå communities i nær- og fjernmiljøet. Vårt mål er å bidra til en
          åpen og varm bransje, der folk hjelper hverandre og legger tilrette
          for felles læring.
        </p>
        <img
          src="images/community/lyttere-i-amfiet.png"
          alt="personer i amfiet på Varianthuset lytter til en presentasjon"
        ></img>
      </header>

      <section className={style['main-content']}>
        <h3 className={style['main-content__title']}>
          Hva kan vi bistå deg med?
        </h3>
        <p className={style['main-content__subtitle']}>
          Sitter du på et arrangement, men mangler noe for å klare å realisere
          det? Kanskje vi kan hjelpe deg med dette!
        </p>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h4>Lokaler</h4>
            <p>
              Åpen læreglede er viktig for oss i Variant. Derfor velger vi
              alltid (kontor)lokaler som legger til rette for dette. Dette kan
              bety litt forskjellige ting for de ulike kontorene (i de ulike
              byene), men felles for alle er at de er åpne og tilgjengelige.
              Helt konkret betyr dette blant annet at lokalet er i nærheten av
              kollektivtransport og sykkelveier, og du kan bruke lokalet helt
              gratis. For mer informasjon om lokalene våres:
            </p>
          </section>
          <img src="/images/diversity/ada.png" alt="Placeholder image" />
        </article>

        <section className={style['main-content__quote']}>
          <blockquote className={style['main-content__quote__text']}>
            Arrangøren var på utkikk etter lokale for det første meetup den 24.
            mars om “ARM, Bicep, and beyond! 💪”. Jeg tilbød selvsagt å holde
            dette på Varianthuset, og vi gleder oss 🤩
          </blockquote>
        </section>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h4>Streaming</h4>
            <p>
              Åpen læreglede er viktig for oss i Variant. Derfor velger vi
              alltid (kontor)lokaler som legger til rette for dette. Dette kan
              bety litt forskjellige ting for de ulike kontorene (i de ulike
              byene), men felles for alle er at de er åpne og tilgjengelige.
              Helt konkret betyr dette blant annet at lokalet er i nærheten av
              kollektivtransport og sykkelveier, og du kan bruke lokalet helt
              gratis. For mer informasjon om lokalene våres:
            </p>
          </section>
          <img src="/images/diversity/ada.png" alt="Placeholder image" />
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h4>Podcast</h4>
            <p>
              Åpen læreglede er viktig for oss i Variant. Derfor velger vi
              alltid (kontor)lokaler som legger til rette for dette. Dette kan
              bety litt forskjellige ting for de ulike kontorene (i de ulike
              byene), men felles for alle er at de er åpne og tilgjengelige.
              Helt konkret betyr dette blant annet at lokalet er i nærheten av
              kollektivtransport og sykkelveier, og du kan bruke lokalet helt
              gratis. For mer informasjon om lokalene våres:
            </p>
          </section>
          <img src="/images/diversity/ada.png" alt="Placeholder image" />
        </article>

        {/* kontaktblob */}
        <article
          className={`${style['main-content__item']} ${style['main-content__contact']}`}
        >
          <div className={style['main-content__contact__blob']}>
            <p>
              Noe vi kan bistå <u>deg</u> med? Ta kontakt!
            </p>
            <Arrow />
          </div>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h4>Faglig påfyll</h4>
            <p>
              Åpen læreglede er viktig for oss i Variant. Derfor velger vi
              alltid (kontor)lokaler som legger til rette for dette. Dette kan
              bety litt forskjellige ting for de ulike kontorene (i de ulike
              byene), men felles for alle er at de er åpne og tilgjengelige.
              Helt konkret betyr dette blant annet at lokalet er i nærheten av
              kollektivtransport og sykkelveier, og du kan bruke lokalet helt
              gratis. For mer informasjon om lokalene våres:
            </p>
          </section>
          <img src="/images/diversity/ada.png" alt="Placeholder image" />
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h4>Organisering</h4>
            <p>
              Åpen læreglede er viktig for oss i Variant. Derfor velger vi
              alltid (kontor)lokaler som legger til rette for dette. Dette kan
              bety litt forskjellige ting for de ulike kontorene (i de ulike
              byene), men felles for alle er at de er åpne og tilgjengelige.
              Helt konkret betyr dette blant annet at lokalet er i nærheten av
              kollektivtransport og sykkelveier, og du kan bruke lokalet helt
              gratis. For mer informasjon om lokalene våres:
            </p>
          </section>
          <img src="/images/diversity/ada.png" alt="Placeholder image" />
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h4>Spons</h4>
            <p>
              Åpen læreglede er viktig for oss i Variant. Derfor velger vi
              alltid (kontor)lokaler som legger til rette for dette. Dette kan
              bety litt forskjellige ting for de ulike kontorene (i de ulike
              byene), men felles for alle er at de er åpne og tilgjengelige.
              Helt konkret betyr dette blant annet at lokalet er i nærheten av
              kollektivtransport og sykkelveier, og du kan bruke lokalet helt
              gratis. For mer informasjon om lokalene våres:
            </p>
          </section>
          <img src="/images/diversity/ada.png" alt="Placeholder image" />
        </article>
      </section>
      <section className={style['contact-section']}></section>
    </Layout>
  );
};

export default Diversity;
