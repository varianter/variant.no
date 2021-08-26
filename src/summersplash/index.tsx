// Based on existing Jobs page

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';

// @ts-ignore
import ScrollingColorBackground from 'react-scrolling-color-background';
import style from './index.module.css';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs';

import Layout from 'src/splashLayout';
import ContentComponent from './Content';

const SummerSplash: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const router = useRouter();
  const queryedPage = router.query.dynamicPath;

  if (queryedPage !== 'sommerjobb' && queryedPage !== 'nyutdannet') {
    return <DefaultErrorPage statusCode={404} />;
  }

  const [mode, setMode] = useState(
    router.query.dynamicPath === 'sommerjobb' ? 'internship' : 'job',
  );

  useEffect(() => {
    setMode(router.query.dynamicPath === 'sommerjobb' ? 'internship' : 'job');
  }, [router.query.dynamicPath]);

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

      <ScrollingColorBackground
        selector=".color-scroll-section[data-background-color]"
        colorDataAttribute="data-background-color"
        initialRgb="#FAD2E2"
      />

      <section className={style.modeTabs}>
        <Link href="/sommerjobb">
          <button className={style.leftTab}>
            <h4>Sommerjobb</h4>
          </button>
        </Link>
        <Link href="/nyutdannet">
          <button className={style.rightTab}>
            <h4>Fastjobb</h4>
          </button>
        </Link>
      </section>

      <ContentComponent mode={mode === 'job' ? 'job' : 'internship'} />
    </Layout>
  );
};

export default SummerSplash;
