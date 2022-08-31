import React from 'react';
import Layout from 'src/layout';
import Head from 'next/head';

import style from './index.module.css';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs';
import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile';
import { and } from 'src/utils/css';
import JobListingItem from './list-item';
import { OfficeSelector } from 'src/office-selector';
import PageTitle from '@components/page-title';

const JobsIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
  office,
}) => {
  return (
    <>
      <Layout>
        <Head>
          <meta
            property="og:url"
            content={'https://www.variant.no/jobs/'}
            key="og:url"
          />
          <meta
            property="og:title"
            content="Bli en variant! Se på ledige stillinger i Trondheim og Oslo."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Vi trenger mennesker som engasjerer seg for design og utvikling. Vi ønsker å samle mennesker som bryr seg og vil skape løsninger som tjener samfunnet vi lever i."
            key="og:description"
          />
          <meta
            name="description"
            content="Vi trenger mennesker som engasjerer seg for design og utvikling. Vi ønsker å samle mennesker som bryr seg og vil skape løsninger som tjener samfunnet vi lever i."
            key="description"
          />
          <meta
            property="og:image"
            content="https://www.variant.no/images/jobs_meta_image.png"
            key="og:image"
          />
          <title>Variant - Ledige stillinger</title>
        </Head>
        <section className={style.omVariant}>
          <PageTitle title="Bli en variant" />

          <article className={style.omVariant__wrapper}>
            <div className={style.omVariant__blob}>
              <BaseBlob
                seed="Variant"
                width={350}
                height={350}
                color={colors.colorPairs.secondary3.default.bg}
                imageProps={{
                  src: require('src/jobs/images/undraw_lynx.png'),
                }}
                alt="Dame som holder smarttelefon som viser kode"
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
                JavaScript eller Lisp-person. Figma- eller Framer X-person. Vi
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
          <h2 className={and(style.withSubTitle, 'fancy')}>
            Ledige stillinger
          </h2>

          <OfficeSelector
            currentOffice={office}
            defaultLink="/jobs"
            officeMap={{
              Alle: '/jobs',
              Bergen: '/jobs/office/bergen',
              Oslo: '/jobs/office/oslo',
              Trondheim: '/jobs/office/trondheim',
            }}
          />
          {listings.map((item) => (
            <JobListingItem
              item={item}
              key={`${item.name}_${item.title}_${item.location}`}
            />
          ))}
        </section>
        <section className={style.omVariant}>
          <h2>Variantdag - November 2019 </h2>
          <p>
            Første fredag hver måned har vi variantdag. I november 2019 lagde vi
            en liten film som viser litt av hva variantdager går ut på!
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
      </Layout>
    </>
  );
};

export default JobsIndex;
