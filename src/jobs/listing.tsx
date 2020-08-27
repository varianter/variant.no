import React from 'react';

import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs/[listing]';
import Layout from 'src/layout';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { ButtonLink } from 'src/components/button';
import style from './listings.module.css';

const Listing: NextPage<InferGetStaticPropsType<
  typeof getStaticProps
>> = React.memo(({ data, content }) => {
  return (
    <Layout>
      <Head>
        <title>
          {data.title} - {data.company}
        </title>
      </Head>
      <section className={style.jobArticle}>
        <h1>{data.h1_title}</h1>
        <div className={style.button__top}>
          <ButtonLink href={data.application_url}>Søk på stillingen</ButtonLink>
        </div>
        <ReactMarkdown
          source={content}
          className={style.rendered__markdown__wrapper}
        />
        <div className={style.button__bottom}>
          <ButtonLink href={data.application_url} mode="primary">
            Søk på stillingen
          </ButtonLink>
        </div>
      </section>
    </Layout>
  );
});

export default Listing;
