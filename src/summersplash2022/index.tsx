import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, InferGetStaticPropsType } from 'next';
import DefaultErrorPage from 'next/error';
import { getStaticProps } from 'pages';
import Content from './Content';
import { rqdp } from './utils/utils';

const Summersplash2022: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const router = useRouter();

  const queryedPage = rqdp(router);

  const [mode, setMode] = useState(
    rqdp(router) === 'sommerjobb' ? 'internship' : 'job',
  );

  useEffect(() => {
    setMode(rqdp(router) === 'sommerjobb' ? 'internship' : 'job');
  }, [rqdp(router)]);

  if (queryedPage === undefined) {
    return null;
  }
  if (queryedPage != 'sommerjobb' && queryedPage != 'nyutdannet') {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={'https://www.variant.no/jobs/'}
          key="og:image"
        />
      </Head>

      {mode === 'intership'}
      {/* 
      <section>
        <Link href="/sommerjobb">
          <a>sommerjobb</a>
        </Link>
        <Link href="/nyutdannet">
          <a>nyutdannet</a>
        </Link>
      </section> */}
      <>
        <Content selected={mode === 'job' ? 'job' : 'internship'} />
      </>
    </>
  );
};

export default Summersplash2022;
