import React from 'react';
import Layout from 'src/layout';
import AnimatingBackground from 'src/background';
import Head from 'next/head';

import style from './index.module.css';
import { useReducedMotionEffect } from 'src/utils/hooks';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs';
import { ButtonNextLink } from 'src/components/button';
import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile';

const JobsIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
}) => {
  const reducedMotion = useReducedMotionEffect();
  return (
    <>
      <Layout>
        <Head>
          <meta
            property="og:description"
            content="En ny variant av et konsulentselskap som er raust, åpent og modig. Vi bistår med utvikling, design, salg, kursing og rådgiving."
          />
          <meta
            name="description"
            content="En ny variant av et konsulentselskap som er raust, åpent og modig. Vi bistår med utvikling, design, salg, kursing og rådgiving."
          />
          <title>Variant - Ledige stillinger</title>
        </Head>
        <section className={style.omVariant}>
          <h2
            className={style.omVariant__title}
            data-no-animation={reducedMotion}
          >
            Hva står vi for?
          </h2>
          <article className={style.omVariant__wrapper}>
            <div className={style.omVariant__blob}>
              {/* TODO FIX WROK-AROUND when 2.0.7 is published  */}
              <BaseBlob
                seed="Variant"
                width={350}
                height={350}
                color={colors.colorPairs.secondary3.default.bg}
                imageProps={{ src: require('src/jobs/images/undraw_lynx.png') }}
                alt="Lady supporting a phone showing code"
              />
            </div>
            <div>
              <p>
                For å kunne lage gode løsninger trenger vi forskjellige
                mennesker med forskjellig perspektiv. Vi trenger flinke folk med
                engasjerte stemmer. Det betyr deg.
              </p>
              <p>
                Vi vil skape en arbeidsplass som jobber for de ansatte. Vi
                ønsker å samle mennesker som bryr seg og sammen skape løsninger
                som tjener samfunnet. Vi trenger mennesker som engasjerer seg
                for både design og utvikling.
              </p>
              <p>
                For oss er det ikke viktig om du er en Java- eller F#-,
                JavaScript eller Lisp-person. Sketch- eller Framer X-person. Vi
                ønsker ærlige, motiverte, hyggelige og delevillige personer.
                Personer som ønsker å påvirke hverdagen.
              </p>
              <p>
                Sjekk ut den{' '}
                <a href="https://handbook.variant.no" rel="noopeneer">
                  åpne håndboken vår
                </a>{' '}
                om du vil se mer om hva vi står for og kan tilby.
              </p>
            </div>
          </article>
        </section>
        <section className={style.job__listing}>
          <h2 className={style.withSubTitle}>Bli en Variant</h2>
          <h5>Ledige stillinger</h5>
          {listings.map(({ name, title, location }: any) => (
            <section
              className={style.job__listing__container}
              key={`${name}_${title}`}
            >
              <div>
                <h4>{title}</h4>
                <span>{location}</span>
              </div>
              <ButtonNextLink href="/jobs/[lising]" as={`jobs/${name}`}>
                Se på stillingen
              </ButtonNextLink>
            </section>
          ))}
        </section>
        <section>
          <h2>Variantdag - November 2019 </h2>
          <p>
            Første fredag hver måned har vi variantdag. I november i fjor lagde
            vi en liten film som viser litt av hva variantdager går ut på
          </p>
          <div className={style.aspect__ratio}>
            <iframe
              className={style.jobs__video__iframe}
              width="1280"
              height="720"
              src="https://www.youtube-nocookie.com/embed/goRgDptKt-A"
              allowFullScreen={true}
              frameBorder="0"
            ></iframe>
          </div>
        </section>
        <AnimatingBackground />
      </Layout>
    </>
  );
};

export default JobsIndex;
