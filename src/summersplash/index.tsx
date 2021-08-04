// Based on existing Jobs page

import React from 'react';
import Layout from 'src/layout';
import Head from 'next/head';

import style from './index.module.css';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs';
import { ButtonNextLink } from 'src/components/button';
import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile';

const SummerSplash: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
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
        <section className={style.omVariant}>
          <h2 className={style.omVariant__title}>Sommerjobb 2022</h2>
          <p>Søk innen 12. oktober</p>
          <article className={style.omVariant__wrapper}>
            <div className={style.omVariant__blob}>
              <BaseBlob
                seed="Variant"
                width={350}
                height={350}
                color={colors.colorPairs.secondary3.default.bg}
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
    </>
  );
};

export default SummerSplash;
