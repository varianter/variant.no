import DecorativeBoxes from '@components/decorative-boxes';
import Head from 'next/head';
import { decorativeBoxColorPairs } from './utils/decorative-box-colors';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { ButtonNextLink } from 'src/components/button';
import Layout from 'src/layout';
import List from 'src/rss/feed/List';
import style from './index.module.css';
import PageTitle from '@components/page-title';
import { Heading3 } from '@components/heading';
import Tjenesteomrader from 'src/tjenesteomrader';
import { EmployeeItem } from 'src/employees/types';
import { CaseJSON } from 'src/case/Case';
import { HighlightedItemsLists } from 'src/rss/service';
import Arrow from '@components/arrow';

export type HomeProps = {
  randomEmployee: EmployeeItem;
  randomCases: CaseJSON[];
  feeds: HighlightedItemsLists;
};

const Home = ({ randomEmployee, randomCases, feeds }: HomeProps) => {
  const cases = useMemo(() => {
    return randomCases.map((caseItem, index) => (
      <article
        className={style['two-column-section__item']}
        key={caseItem.heading}
      >
        <div className={style['two-column-section__item__content']}>
          <Heading3 styleLevel="4">{caseItem.heading}</Heading3>
          {caseItem.content.split(/\n\s*\n/gm).map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          <Link href={caseItem.href} title="Prosjektinfo">
            Les mer
          </Link>
        </div>
        <DecorativeBoxes
          box1Properties={{
            // color pairs follow a pattern defined by decorativeBoxColorPairs
            color:
              decorativeBoxColorPairs[
                index % decorativeBoxColorPairs.length
              ][0],
            position: index % 2 === 1 ? 'top-right' : 'top-leftish',
          }}
          box2Properties={{
            color:
              decorativeBoxColorPairs[
                index % decorativeBoxColorPairs.length
              ][1],
            position: index % 2 === 1 ? 'bottom-middle' : 'bottom-left',
          }}
        >
          <img
            src={caseItem.case_image}
            alt={caseItem.image_alt}
            loading="lazy"
            decoding="async"
          />
        </DecorativeBoxes>
      </article>
    ));
  }, [randomCases]);

  return (
    <Layout homepage>
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
      <section className={style.omVariant}>
        <PageTitle title="Raus, åpen og læreglad" jumbo element="h2" />

        <p className={style.omVariant__p1}>
          Tjenesteutvikling handler ikke om designskisser, kodelinjer eller
          infrastruktur, men om samarbeid og forståelse. Det bør være åpenhet,
          ærlighet og endringsvilje.
        </p>

        <Image
          className={style.omVariant_image1}
          src={require('./images/om-variant-1.png')}
          width={476}
          height={432}
          alt="Bilde av Kristin som sitter i en sofa"
          loading="lazy"
          decoding="async"
        />

        <Image
          className={style.omVariant_image2}
          src={require('./images/om-variant-2.png')}
          width={960}
          height={960}
          alt="Bilde av Tonje og Odd Morten som sitter forran gamle Digs"
          loading="lazy"
          decoding="async"
        />

        <div className={style.omVariant__us}>
          <h3>Der er vi!</h3>
          <p>
            En variant av et konsulentselskap som er raust, åpent og læreglad.
          </p>
        </div>
      </section>

      <section className={style.bergen}>
        <RefillLink />
      </section>

      <section className={style.join}>
        <h2 className={style.join_title}>Bli en Variant!</h2>

        <p>
          For å kunne lage gode løsninger trenger vi forskjellige mennesker med
          forskjellig perspektiv. Vi trenger flinke folk med engasjerte stemmer!
        </p>

        <p>Kanskje det er deg?</p>

        <div className={style.join_info}>
          <div>
            <p>
              Vi holder til i superfine lokaler i Trondheim, Oslo og Bergen. I
              tillegg har vi noen små, sjarmerende satelittkontor i Molde og
              Harstad.
            </p>
            <p>
              Der har vi en haug av{' '}
              <Link href="/ansatte" title="Ansattoversikt">
                flotte kolleger
              </Link>
              ,{' '}
              <a href="https://handbook.variant.no" title="Variant Håndbok">
                gode (og selvfølgelig åpne) vilkår
              </a>{' '}
              og{' '}
              <Link href="/kalkulator" title="Lønnskalkulator">
                god lønn
              </Link>
              . Ta gjerne en titt i{' '}
              <a href="https://handbook.variant.no" title="Variant Håndbok">
                håndboka
              </a>{' '}
              vår for mer informasjon om oss.
            </p>

            <p>
              Ikke minst jobber vi med mange{' '}
              <a href="#prosjekter" title="Prosjekteksempler">
                spennende prosjekter
              </a>
              !
            </p>
            <ButtonNextLink className={style.join_button} href="/jobs">
              Bli en variant
            </ButtonNextLink>
          </div>
          <img
            className={style.join_map}
            src={require('./images/blob-map.svg')}
            alt="Kart som viser hvor alle kontorene våre ligger"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className={style.services}>
        <img
          className={style.services_image1}
          src={require('./images/bli-en-variant.png')}
          alt="Bilde av gladfisen Jacob"
          loading="lazy"
          decoding="async"
        />
      </section>
      <section>
        <Tjenesteomrader />
      </section>

      <section className={style['two-column-section']}>
        <h2>Ting vi brenner for</h2>
        <p>
          I Variant er vi opptatt av å utvikle og bidra i samfunnet og miljøene
          rundt oss. Vår gjestfrihet er en selvfølge, og vi byr på både lokalene
          og fagkompetansen vår, i tillegg til at vi ønsker å bidra til et
          samfunn hvor mangfold og likestilling blir heiet frem.
        </p>
        <article
          className={`${style['two-column-section__item']} ${style['two-column-section__item--centered']}`}
        >
          <div className={style['two-column-section__item__content']}>
            <Heading3 styleLevel="4">Mangfold</Heading3>
            <p>
              Mangfold skaper inkluderende og fullgode løsninger, som gir verdi
              og nytte for absolutt alle. Vi i Variant samarbeider derfor med de
              som aktivt jobber for dette.
            </p>
            <Link href={'/mangfold'} title="Variant - Mangfold">
              Vårt engasjement i mangfold
            </Link>
          </div>
          <DecorativeBoxes
            box1Properties={{
              color: 'secondary2__tint4',
              position: 'top-rightish',
            }}
            box2Properties={{
              color: 'secondary1__tint4',
              position: 'bottom-leftish',
            }}
          >
            <img
              src="/images/tenk-sarah-marius.png"
              alt="Sarah og Marius som hjelper til med podcastlaging på TENK tech camp"
              loading="lazy"
              decoding="async"
            />
          </DecorativeBoxes>
        </article>

        <article
          className={`${style['two-column-section__item']} ${style['two-column-section__item--centered']}`}
        >
          <div className={style['two-column-section__item__content']}>
            <Heading3 styleLevel="4">Læreglede</Heading3>
            <p>
              Vi i Variant ønsker å bidra til{' '}
              <a
                href="https://www.variant.dev"
                rel="external noopner"
                className={`${style['inlineLink']}`}
              >
                aktive og levende læringsmiljøer
              </a>
              . Derfor bistår vi communities i nær- og fjernmiljøet med blant
              annet lokaler, utstyr, organisering og faglig sparring.
            </p>
            <Link href={'/community'} title="Variant - Læreglede">
              Hva vi kan bistå med
            </Link>
          </div>
          <DecorativeBoxes
            box1Properties={{
              color: 'secondary3__tint1',
              position: 'middle-left',
            }}
            box2Properties={{
              color: 'secondary2__tint4',
              position: 'bottom-right',
            }}
          >
            <img
              src="/images/lyttere-i-amfiet-500px.png"
              alt="personer i amfiet på Varianthuset lytter til en presentasjon"
              loading="lazy"
              decoding="async"
            />
          </DecorativeBoxes>
        </article>
      </section>

      <section className={style['two-column-section']}>
        <h2 id="prosjekter">Variantarbeid</h2>
        <p>
          Vi gjør research, utvikler konsepter, skriver kodelinjer, leder
          prosjekter og prosesser, og rådgir. Lista er lang, og vi bidrar med
          mye. Les gjerne mer om noen av prosjektene vi har jobbet i!
        </p>
        {cases}
      </section>

      <section className={style.feed}>
        <header className={style.feed__header}>
          <h2 id="feed">Meninger og sånn</h2>
          <p>Våre siste ytringer i form av blogginnlegg, podcasts og video.</p>
        </header>

        <div className={style.feed__content}>
          <List items={feeds.blog} />
          <List items={feeds.podcast} />
          <List items={feeds.youtube} />
        </div>

        <div className={style.feed__readMore}>
          <Link href="/feed">Se mer innhold</Link>
        </div>
      </section>

      <section className={style.employees}>
        {randomEmployee ? (
          <div className={style.employees__random}>
            {randomEmployee.imageUrl && (
              <div className={style.employees__random__image}>
                <Image
                  width={300}
                  height={300}
                  alt={`Bilde av ${randomEmployee.name}`}
                  src={randomEmployee.imageUrl}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            <p>Dette er {randomEmployee.name}. En av oss som jobber her.</p>

            <ButtonNextLink href="/ansatte" className={style.employees__button}>
              Se alle andre Varianter
            </ButtonNextLink>
          </div>
        ) : (
          <ButtonNextLink href="/ansatte">Se alle varianter</ButtonNextLink>
        )}
      </section>
    </Layout>
  );
};

function RefillLink() {
  return (
    <div className={style.infoBlock}>
      <div className={style.infoBlock__imageContainer}>
        <Image
          src={'/refill/header.png'}
          alt={'Refill'}
          width={300}
          height={300}
        />
      </div>
      <div className={style.infoBlock__content}>
        <h2 className={style.infoBlock__title}>
          <Link href="/refill" className={style.infoBlock__link}>
            <span className={style.infoBlock__text}>Refill stream</span>
            <Arrow className={style.infoBlock__arrow} color="standard__black" />
          </Link>
        </h2>

        <p>
          Vi inviterer til første iterasjon av Refill-konferansen. En
          tverrfaglig konferanse fylt til randen med læreglede.
        </p>

        <p>
          Konferansen streames fredag 7. juni klokken 14:00 i to parallelle
          tracks: utvikling og design.
        </p>
      </div>
    </div>
  );
}

export default Home;
