// Based on existing Jobs page

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import style from './index.module.css';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs';
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

      <section className={style.firstSection}>
        <LogoBlob className={style.logoblob} href="/" />
        <Link href="/jobs">
          <a className={style.otherJobsLink}>
            Fast stilling? <img src={require('./arrow.svg')} />
          </a>
        </Link>

        <h1 className={style.omVariant__title}>Sommerjobb 2022</h1>
        <p>Søk innen 3. oktober</p>

        <article className={style.omVariant__wrapper}>
          <div className={style.omVariant__blob}>
            <BaseBlob
              seed="Variant"
              width={350}
              height={350}
              color={colors.colorPairs.secondary2.default.bg}
              imageProps={{ src: require('src/jobs/images/undraw_lynx.png') }}
              alt="Dame som holder smarttelefon som viser kode"
            />
          </div>
        </article>

        <section className={style.applyLinksContainer}>
          <Link href="/jobs/utvikler-trondheim">
            <a className={style.applyLink}>
              Søk som designer
              <span role="img" aria-label="blyant">
                ✏️
              </span>
            </a>
          </Link>

          <Link href="/jobs/utvikler-trondheim">
            <a className={style.applyLink}>
              Søk som utvikler
              <span role="img" aria-label="datamaskin">
                💻
              </span>
            </a>
          </Link>
        </section>
      </section>

      <section className={style.secondSection}>
        <h2>Seksjon</h2>
        <div>
          <p>
            Sjekk ut den{' '}
            <a href="https://handbook.variant.no" rel="noopeneer">
              åpne håndboken vår
            </a>{' '}
            om du vil se mer om hva vi står for og kan tilby.
          </p>
        </div>
      </section>

      <section className={style.thirdSection}>
        <h2>Seksjon</h2>
      </section>

      <section className={style.fourthSection}>
        <h2>Seksjon</h2>
      </section>

      <section className={style.fifthSection}>
        <section>
          <p>
            Vi håper du søker, og ser frem til å bli bedre kjent med deg. Har du
            spørsmål om sommerjobbene eller Variant? Ta gjerne kontakt med meg.
          </p>
          <p>- Marius Krakeli, utvikler og rekrutteringsansvarlig i Variant</p>
          <p>41 63 75 72 | mk@variant.no</p>

          <div className={style.omVariant__blob}>
            <BaseBlob
              seed="Variant"
              width={350}
              height={350}
              color={colors.colorPairs.secondary2.default.bg}
              imageProps={{ src: require('public/images/marius.png') }}
              alt="Bilde av Marius Krakeli"
            />
          </div>
        </section>

        <section className={style.applyLinksContainer}>
          <Link href="/jobs/utvikler-trondheim">
            <a className={style.applyLink}>
              Søk som designer
              <span role="img" aria-label="blyant">
                ✏️
              </span>
            </a>
          </Link>

          <Link href="/jobs/utvikler-trondheim">
            <a className={style.applyLink}>
              Søk som utvikler
              <span role="img" aria-label="datamaskin">
                💻
              </span>
            </a>
          </Link>
        </section>
      </section>
    </>
  );
};

export default SummerSplash;
