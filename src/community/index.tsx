import Arrow from '@components/arrow';
import Head from 'next/head';
import Layout from 'src/layout';
import style from './community.module.css';
import DecorativeBoxes from '@components/decorative-boxes';

function Diversity() {
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

      <header className={style.header}>
        {/* Switch with title component once it has been merged in */}
        <h1 className={style.header__title}>Læreglede</h1>
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
        <h2 className={style['main-content__title']}>
          Hva kan vi bistå deg med?
        </h2>
        <p className={style['main-content__subtitle']}>
          Sitter du på et arrangement, men mangler noe for å klare å realisere
          det? Kanskje vi kan hjelpe deg med dette!
        </p>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Lokaler</h3>
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
          <DecorativeBoxes
            box1Properties={{
              position: 'top-leftish',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary3',
            }}
          >
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </DecorativeBoxes>
        </article>

        <section className={style['main-content__quote']}>
          <blockquote className={style['main-content__quote__text']}>
            Arrangøren var på utkikk etter lokale for det første meetup den 24.
            mars om “ARM, Bicep, and beyond! 💪”. Jeg tilbød selvsagt å holde
            dette på Varianthuset, og vi gleder oss 🤩.
          </blockquote>
          <a
            href={
              'https://blog.variant.no/ny-azure-meetup-i-trondheim-med-f%C3%B8rste-m%C3%B8te-p%C3%A5-varianthuset-b44a64d917ee'
            }
            title="Ny Azure meetup i Trondheim med første møte på Varianthuset"
          >
            Les bloggposten
          </a>
        </section>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Streaming</h3>
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
          <DecorativeBoxes
            box1Properties={{
              position: 'top-leftish',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary3',
            }}
          >
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </DecorativeBoxes>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Podcast</h3>
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
          <DecorativeBoxes
            box1Properties={{
              position: 'top-leftish',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary3',
            }}
          >
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </DecorativeBoxes>
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
            <h3>Faglig påfyll</h3>
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
          <DecorativeBoxes
            box1Properties={{
              position: 'top-leftish',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary3',
            }}
          >
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </DecorativeBoxes>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Organisering</h3>
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
          <DecorativeBoxes
            box1Properties={{
              position: 'top-leftish',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary3',
            }}
          >
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </DecorativeBoxes>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Spons</h3>
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
          <DecorativeBoxes
            box1Properties={{
              position: 'top-leftish',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary3',
            }}
          >
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </DecorativeBoxes>
        </article>
      </section>

      <section className={style['contact-section']}>
        <h2>Ta Kontakt</h2>
        <div>Fancy tittel 😎</div>
        <img
          src="images/curved_arrow.svg"
          className={style['contact-section__decorative-arrow']}
          alt="Pil som peker på der det står Chief Community Officer"
        />
        <p>
          Våre CCO-er (Chief Community Officer) er alltid tilgjengelig for en
          uforpliktende prat om alt som har med faglig fellesskap i nær- og
          fjernmiljøet å gjøre.
        </p>
        <ContactCard
          city="Trondheim"
          name="Mikael"
          pronoun="m"
          email="mb@variant.no"
          phone="979 81 877"
          imagePath="images/mikael.png"
        />
        <ContactCard
          city="Trondheim"
          name="Mikael"
          pronoun="m"
          email="mb@variant.no"
          phone="979 81 877"
          imagePath="images/mikael.png"
        />
        <ContactCard
          city="Trondheim"
          name="Mikael"
          pronoun="m"
          email="mb@variant.no"
          phone="979 81 877"
          imagePath="images/mikael.png"
        />
      </section>
    </Layout>
  );
}

export default Diversity;

interface ContactCardProps {
  city: string;
  name: string;
  pronoun: 'm' | 'f';
  email: string;
  phone: string;
  imagePath: string;
}

function ContactCard({
  city,
  name,
  pronoun,
  email,
  phone,
  imagePath,
}: ContactCardProps) {
  return (
    <article className={style['contact-section__card']}>
      <div className={style['contact-section__card__info']}>
        <h3 className={style['contact-section__card__info__title']}>{city}</h3>
        <p className={style['contact-section__card__info__description']}>
          Dette er {name}. {pronoun === 'm' ? 'Han' : 'Hun'} jobber med å spre
          læreglede i {city}.
        </p>
        <a
          href={`mailto:${email}`}
          className={style['contact-section__card__info__email']}
        >
          📫 {email}
        </a>
        <a
          href={`tel:${phone.replaceAll(' ', '')}`}
          className={style['contact-section__card__info__phone']}
        >
          📞 {phone}
        </a>
      </div>
      <img
        src={imagePath}
        alt={`Portrett av ${name}`}
        className={style['contact-section__card__image']}
      />
    </article>
  );
}
