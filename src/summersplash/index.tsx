// Based on existing Jobs page

import React from 'react';
import Head from 'next/head';

import style from './index.module.css';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs';
import { ButtonNextLink } from 'src/components/button';
import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile';
import LogoBlob from './logo-blob';

const SummerSplash: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return (
    <>
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
        <title>Variant - Din neste sommerjobb?</title>
      </Head>
      <LogoBlob className={style.logoblob} href="/" />

      <section className={style.firstSection}>
        <h1 className={style.omVariant__title}>Sommerjobb 2022</h1>
        <p>Søk innen 12. oktober</p>
        <article className={style.omVariant__wrapper}>
          <div className={style.omVaria0nt__blob}>
            <BaseBlob
              seed="Variant"
              width={350}
              height={350}
              color={colors.colorPairs.secondary2.default.bg}
              imageProps={{ src: require('src/jobs/images/undraw_lynx.png') }}
              alt="Dame som holder smarttelefon som viser kode"
            />
          </div>
          <div>
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

      <section className={style.secondSection}>
        <h2>Seksjon</h2>
      </section>

      <section className={style.thirdSection}>
        <h2>Seksjon</h2>
      </section>

      <section className={style.fourthSection}>
        <h2>Seksjon</h2>
      </section>

      <section className={style.fifthSection}>
        <h2>Seksjon</h2>
      </section>
    </>
  );
};

export default SummerSplash;
