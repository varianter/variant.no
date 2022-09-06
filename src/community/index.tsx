import Arrow from '@components/arrow';
import Head from 'next/head';
import Layout from 'src/layout';
import style from './community.module.css';
import DecorativeBoxes from '@components/decorative-boxes';
import Link from 'next/link';

const blobUrl = require('./contact-blob.svg');

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
        <div className={style['text-container']}>
          <p>
            Vi ønsker å bidra til åpen læreglede der hvor vi finnes. Derfor
            bistår vi communities i nær- og fjærnmiljøet med ulik type
            læreglede. Vårt mål er å bidra til en åpen og varm bransje, der folk
            hjelper hverandre og legger tilrette for{' '}
            <a
              href="https://blog.variant.no/aapen-og-delt-kompetansebygging-c229771eee93"
              rel="noopener noreferrer"
            >
              felles læring og kompetansebygging.
            </a>
          </p>
        </div>
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
              bety litt forskjellige ting for de ulike kontorene, men felles for
              alle er at de er åpne og tilgjengelige. Helt konkret betyr dette
              blant annet at lokalet er i nærheten av kollektivtransport og
              sykkelveier, og du kan bruke lokalet helt gratis. For mer
              informasjon om lokalene våres:
            </p>
            {/* TODO: Use once office subpages are ready */}
            {/* <Link href="/">
              <a className={style['main-content__item__text__link--decorated']}>
                Trondheim
              </a>
            </Link>
            <Link href="/">
              <a className={style['main-content__item__text__link--decorated']}>
                Oslo
              </a>
            </Link>
            <Link href="/">
              <a className={style['main-content__item__text__link--decorated']}>
                Bergen
              </a>
            </Link> */}
          </section>
          <DecorativeBoxes
            box1Properties={{
              position: 'top-rightish',
              color: 'secondary3',
            }}
            box2Properties={{
              position: 'bottom-leftish',
              color: 'secondary1__tint4',
            }}
          >
            {/* TODO: Replace with non-placeholder */}
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
            className={style['main-content__quote__link--decorated']}
          >
            Les bloggposten
          </a>
        </section>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Streaming</h3>
            <p>
              I våre lokaler har vi permanent riggede kabler for skjermer, lys
              og lyd tilrettelagt for opptak. Dermed kan det arrangeres åpne
              meetups eller andre arrangementer som kan streames.
            </p>
            <a
              href="https://www.youtube.com/channel/UCMBx54cKNj8i9R51IE4bfCg"
              rel="noopener noreferrer"
              className={style['main-content__item__text__link--decorated']}
            >
              Opptak fra tidligere arrangementer
            </a>
          </section>
          <DecorativeBoxes
            box1Properties={{
              position: 'middle-left',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary2__tint4',
            }}
          >
            <img
              src="/images/community/videokamera.png"
              alt="Videokamera som står på en stand og filmer en person"
            />
          </DecorativeBoxes>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Podcast</h3>
            <p>
              Vi har et helt eget, skikkelig kult podcastrom. Dette stiller vi
              til disposisjon til andre som kan trenge et podcastrom.
            </p>
            <a
              href="https://variantsnakk.transistor.fm/episodes"
              rel="noopener noreferrer"
              className={style['main-content__item__text__link--decorated']}
            >
              Våre podcaster
            </a>
          </section>
          <DecorativeBoxes
            box1Properties={{
              position: 'top-rightish',
              color: 'secondary3__tint2',
            }}
            box2Properties={{
              position: 'bottom-leftish',
              color: 'primary__tint3',
            }}
          >
            <img
              src="/images/community/podcast-simen.png"
              alt="Simen som sitter foran en mikrofon og spiller inn podcast"
            />
          </DecorativeBoxes>
        </article>

        <article
          className={`${style['main-content__item']} ${style['main-content__contact']}`}
        >
          <a href="#contact">
            <img src={blobUrl} alt="" />
            <div className={style['main-content__contact__text']}>
              <p>Noe vi kan bistå deg med? Ta kontakt!</p>
              <Arrow
                color="standard__white"
                className={style['main-content__contact__text__arrow']}
              />
            </div>
          </a>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Faglig påfyll</h3>
            <p>
              Vi kan også bidra med faglig innhold hvis du er på utkikk etter
              det. Vi kan også være en sparringspartner hvis du har innhold du
              ønsker å utvikle. Mange varianter er gode foredragsholdere,
              workshop-fasilitarorer og innleggsskrivere. Sjekk våre ansattsider
              for å se hva ulike varianter har bidratt med tidligere, opptak av
              tidligere foredrag eller bloggen vår for faglige innlegg.
            </p>
          </section>
          <DecorativeBoxes
            box1Properties={{
              position: 'top-middle',
              color: 'secondary2__tint4',
            }}
            box2Properties={{
              position: 'bottom-left',
              color: 'secondary3__tint1',
            }}
          >
            <img
              src="/images/community/jakob-presenterer.png"
              alt="Jakob som gestikulerer til et lysbilde under en presentasjon"
            />
          </DecorativeBoxes>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Organisering</h3>
            <p>
              Vi i Variant kan hjelpe deg som arrangør med alt det praktiske
              rundt et arrangement. Dette kan innbære mye forskjellig, men kan
              for eksempel være å bestille mat, finne andre lokaler hvis vårt
              ikke passer helt, eller planlegge ting og tang. Noe om fagkomitéen
              (?)
            </p>
          </section>
          <DecorativeBoxes
            box1Properties={{
              position: 'middle-left',
              color: 'secondary2__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'primary__tint3',
            }}
          >
            <img
              src="/images/community/hilde-ved-bord.png"
              alt="Hilde som prater med noen personer rundt et bord"
            />
          </DecorativeBoxes>
        </article>

        <article className={style['main-content__item']}>
          <section className={style['main-content__item__text']}>
            <h3>Spons</h3>
            <p>
              I tillegg til organisering kan vi bidra med pæng, hvis det skulle
              være behov for det. Dette kan for eksempel dekke mat eller andre
              utgifter en community vil møte på. Vi i Variant går også aktivt
              inn som samarbeidspartnere for å støtte opp om mangfold i
              tech-bransjen, som du kan lese mer om{' '}
              <Link href={'/mangfold'}>
                <a>her</a>
              </Link>
              .
            </p>
          </section>
          <DecorativeBoxes
            box1Properties={{
              position: 'top-middle',
              color: 'secondary1__tint4',
            }}
            box2Properties={{
              position: 'bottom-right',
              color: 'secondary2__tint4',
            }}
          >
            <img src="/images/diversity/ada.png" alt="Placeholder image" />
          </DecorativeBoxes>
        </article>
      </section>

      <section className={style['contact-section']}>
        <h2 className={style['contact-section__title']} id="contact">
          Ta Kontakt
        </h2>
        <div className={style['contact-section__flavor-text']}>
          <p>Fancy tittel 😎</p>
          <img
            src="images/curved_arrow.svg"
            className={style['contact-section__flavor-text__arrow']}
            alt="Pil som peker på der det står Chief Community Officer"
          />
        </div>
        <p className={style['contact-section__subtitle']}>
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
          imagePath="images/community/mikael-300px.png"
        />
        <ContactCard
          city="Oslo"
          name="Nikolai"
          pronoun="m"
          email="nikolai@variant.no"
          phone="971 50 015"
          imagePath="images/community/nikolai-300px.png"
        />
        <ContactCard
          city="Bergen"
          name="Andreas"
          pronoun="m"
          email="andreas@variant.no"
          phone="950 06 947"
          imagePath="images/community/andreas-300px.png"
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
  hasFlavorText?: boolean;
}

function ContactCard({
  city,
  name,
  pronoun,
  email,
  phone,
  imagePath,
  hasFlavorText = false,
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
