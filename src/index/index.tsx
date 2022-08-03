import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getStaticProps } from 'pages/index';
import React, { useMemo } from 'react';
import { BergenInfoBlock } from 'src/bergen';
import { ButtonNextLink } from 'src/components/button';
import Layout from 'src/layout';
import List from 'src/rss/feed/List';
import style from './index.module.css';
import SayHi from './say-hi';

const Home = ({
  randomEmployee,
  randomCases,
  feeds,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const cases = useMemo(() => {
    return randomCases.map((caseItem) => (
      <article className={style.cases__case} key={caseItem.heading}>
        <div className={style.cases__caseContent}>
          <h4>{caseItem.heading}</h4>
          {caseItem.content.split(/\n\s*\n/gm).map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          <Link href={'/'}>
            <a title="Prosjektinfo">Les mer</a>
          </Link>
        </div>
        <figure>
          <img src={caseItem.case_image} alt={caseItem.image_alt} />
        </figure>
      </article>
    ));
  }, [randomCases]);

  return (
    <Layout crazy>
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
      <section className={style.omVariant}>
        <h2 className={style.omVariant__title}>Raus, åpen og læreglad</h2>
        <p className={style.omVariant__p1}>
          IT handler ikke om designskisser, linjer av kode eller infrastruktur,
          men om samarbeid og forståelse. IT bør være åpenhet, ærlighet og
          endringsvilje.
        </p>

        <img
          className={style.omVariant_image1}
          src={require('./images/om-variant-1.png')}
          alt="Bilde av Kristin som sitter i en sofa"
        />

        <img
          className={style.omVariant_image2}
          src={require('./images/om-variant-2.png')}
          alt="Bilde av Tonje og Odd Morten som sitter forran gamle Digs"
        />

        <div className={style.omVariant__us}>
          <h3>Der er vi!</h3>
          <p>
            En variant av et konsulentselskap som er raust, åpent og læreglad.
          </p>
        </div>
      </section>

      <section className={style.bergen}>
        <BergenInfoBlock />
      </section>

      <section className={style.join}>
        <h2>Bli en variant!</h2>
        <p>
          For å kunne lage gode løsninger trenger vi forskjellige mennesker med
          forskjellig perspektiv. Vi trenger flinke folk med engasjerte stemmer.
        </p>

        <p>
          <strong>Det betyr deg.</strong>
        </p>
        <ButtonNextLink href="/jobs">Bli en variant</ButtonNextLink>

        <p>
          Vi har mange{' '}
          <Link href="/ansatte">
            <a title="Ansattoversikt">flotte kolleger</a>
          </Link>
          , et{' '}
          <a
            href="https://www.google.com/maps/place/Varianthuset/@63.4328051,10.397323,17z/data=!3m1!4b1!4m5!3m4!1s0x466d312df4ea1347:0xf63e949e041942ee!8m2!3d63.4328051!4d10.3995117"
            rel="noopener"
            target="_blank"
            title="Kart til Varianthuset"
          >
            fint hus
          </a>
          ,{' '}
          <a href="https://handbook.variant.no" title="Variant Håndbok">
            gode (og åpne) vilkår
          </a>{' '}
          og{' '}
          <Link href="/kalkulator">
            <a title="Lønnskalkulator">god lønn</a>
          </Link>
          . Ikke minst har vi mange{' '}
          <a href="#prosjekter" title="Prosjekteksempler">
            spennende prosjekter
          </a>
          .
        </p>
      </section>

      <section className={style.services}>
        <img
          className={style.services_image1}
          src={require('./images/bli-en-variant.png')}
          alt="Bilde av gladfisen Jacob"
        />

        <article>
          <h3>Design</h3>

          <p>
            Et begrep som betyr mye og som kan utgjøre like mye for et produkt
            eller prosjekt. Om det er brukeropplevelse-, grafisk- eller
            tjeneste-design, vil vi kunne bidra.
          </p>
        </article>

        <article>
          <h3>Utvikling</h3>

          <p>
            Enten du trenger en eller flere utviklere kan vi hjelpe med
            engasjerte og kunnskapsrike mennesker. Vi leverer assistanse til
            skysetting, utvikling av nye systemer og produkter og ekspertise på
            tradisjonell systemutvikling. Ta kontakt for å høre mer om hvordan
            vi kan hjelpe.
          </p>
        </article>

        <article>
          <h3>Prosjektledelse</h3>

          <p>
            Prosjektledelse handler om å legge sammen brikkene i riktig
            rekkefølge og skape et bra resultat. Det blir ikke likt hver gang,
            og det er det som er så spennende. Prosjektledelse er å bidra til et
            engasjerende og fruktbart samarbeid i et tverrfaglig team, og til å
            skape fremdrift i riktig retning. Prosjektledelse er læreglede i
            praksis, og vi deler raust vår erfaring og våre perspektiv i dine
            prosjekter.
          </p>
        </article>

        <article>
          <h3>Kursing og rådgivning</h3>

          <p>
            Utvikling er et felt i konstant endring, og det kan kreve mye å
            følge med på det som skjer. Men det trenger ikke være slik.
            Erfaringer er også noe som kan overføres og deles. Vi bistår med å
            gjøre grupper, enkeltpersoner og prosjekt mer oppdatert, mer
            effektive og flinkere. Vi tilbyr både ferdige kursopplegg og
            presentasjoner samt skreddersydde opplegg for din organisasjon.
          </p>
        </article>
      </section>

      <section className={style.feed}>
        <header className={style.feed__header}>
          <h2 id="feed">Meninger og sånn</h2>
          <p>Det siste fra oss i form av bloggposter, podcasts og video</p>
        </header>

        <img
          className={style.feed__image1}
          role="none"
          src={require('./images/blob-ytringer.svg')}
        />

        <div className={style.feed__content}>
          <List items={feeds.blog} />
          <List items={feeds.podcast} />
          <List items={feeds.youtube} />
        </div>

        <div className={style.feed__readMore}>
          <Link href="/feed">
            <a>Se mer innhold</a>
          </Link>
        </div>
      </section>

      <section className={style.employees}>
        {randomEmployee ? (
          <div className={style.employees__random}>
            <div className={style.employees__random__image}>
              <Image
                width={300}
                height={300}
                alt={`Bilde av ${randomEmployee.name}`}
                src={randomEmployee.imageUrl}
                loading="lazy"
              />
            </div>

            <p>Dette er {randomEmployee.name}. En av oss som jobber her.</p>

            <ButtonNextLink href="/ansatte" className={style.employees__button}>
              Se alle andre Varianter
            </ButtonNextLink>
          </div>
        ) : (
          <ButtonNextLink href="/ansatte">Se alle varianter</ButtonNextLink>
        )}
      </section>

      <section className={style.cases}>
        <h2 id="prosjekter">Variantarbeid</h2>
        <p>
          Vi gjør research, utvikler konsepter, skriver kodelinjer, leder
          prosjekter og prosesser, og rådgir. Lista er lang, og vi bidrar med
          mye. Les gjerne mer om noen av prosjektene vi har jobbet i!
        </p>
        {cases}
      </section>
    </Layout>
  );
};

export default Home;
