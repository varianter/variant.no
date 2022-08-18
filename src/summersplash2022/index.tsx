// Based on the page from 2022

// NOTE: There are comments in the file that needs to be deleted. They are
// here only for explanation understandment for the writers.

// Library
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, InferGetStaticPropsType } from 'next';
import DefaultErrorPage from 'next/error';

// Local
import { getStaticProps } from 'pages';
// import {JobOrInternship} from './utils/utils'
import Layout from 'src/layout';
import Content from './Content';
import Link from 'next/link';
import { rqdp } from './utils/utils';

const Summersplash2022: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  // When a file is added the(a) 'pages' directory it's automatically available
  // as a route.
  const router = useRouter();

  const queryedPage = rqdp(router);

  // New useState called 'mode'.
  // useState gives us two things: a variable to hold the state 'mode' and a
  // function to change the state with 'setMode'
  // A useState is a hook that helps us manage states in function based components
  // A hook is something that lets us use states and other React features without writing a class
  const [mode, setMode] = useState(
    rqdp(router) === 'sommerjobb' ? 'internship' : 'job',
  );

  // useEffects are where we put the 'side effecs', and that means: "when
  // a components variables or state changes based on some outside thing"
  // useEffect takes two agruments, the last one is an array to decide when
  // the hook should run. If it should only run once, send in an empty array,
  // here it uses the '[router.query.dynmaicPath]' (see it's in an array)
  // ? Cause setMode don't need parameters the parentheses are empty, and the
  // fatarrow just means that we don't need to use the function keyword.
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
