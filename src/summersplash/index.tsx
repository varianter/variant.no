// Based on existing Jobs page

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';

// @ts-ignore
import ScrollingColorBackground from 'react-scrolling-color-background';
import style from './index.module.css';
import { and } from 'src/utils/css';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs';

import Layout from 'src/splashLayout';
import ContentComponent from './Content';

const SummerSplash: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const router = useRouter();
  const queryedPage = router.query.dynamicPath;

  const [mode, setMode] = useState(
    router.query.dynamicPath === 'sommerjobb' ? 'internship' : 'job',
  );

  useEffect(() => {
    setMode(router.query.dynamicPath === 'sommerjobb' ? 'internship' : 'job');
  }, [router.query.dynamicPath]);

  if (queryedPage !== 'sommerjobb' && queryedPage !== 'nyutdannet') {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <Layout mode={mode}>
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
        {mode === 'internship' && (
          <title>Variant - Din neste sommerjobb?</title>
        )}
        {mode === 'job' && <title>Variant - Din neste jobb?</title>}
      </Head>

      {mode === 'job' && (
        <ScrollingColorBackground
          selector=".color-scroll-section[data-background-color]"
          colorDataAttribute="data-background-color"
          initialRgb={'#028377'}
        />
      )}

      {mode === 'internship' && (
        <ScrollingColorBackground
          selector=".color-scroll-section[data-background-color]"
          colorDataAttribute="data-background-color"
          initialRgb={'#FAD2E2'}
        />
      )}

      <section className={style.modeTabs}>
        <Link href="/sommerjobb">
          <button
            className={
              mode === 'job'
                ? style.leftTab
                : and(style.leftTab, style.activeTab)
            }
          >
            {mode === 'internship' ? (
              <span className={style.selectedTabText}>Sommerjobb</span>
            ) : (
              <span className={style.inactiveTabText}>Sommerjobb</span>
            )}
          </button>
        </Link>
        <Link href="/nyutdannet">
          <button
            className={
              mode === 'job'
                ? and(style.rightTab, style.activeTab)
                : style.rightTab
            }
          >
            {mode === 'job' ? (
              <span
                style={{ color: 'white' }}
                className={style.selectedTabText}
              >
                Nyutdannet
              </span>
            ) : (
              <span
                style={{ color: 'white' }}
                className={style.inactiveTabText}
              >
                Nyutdannet
              </span>
            )}
          </button>
        </Link>
      </section>

      <ContentComponent mode={mode === 'job' ? 'job' : 'internship'} />
    </Layout>
  );
};

export default SummerSplash;
