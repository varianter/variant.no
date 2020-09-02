import React, { useMemo } from 'react';

import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs/[listing]';
import Layout from 'src/layout';
import Head from 'next/head';
import MarkdownIt from 'markdown-it';
import { ButtonLink } from 'src/components/button';
import style from './listings.module.css';
import { useReducedMotion } from 'framer-motion';

const Listing: NextPage<InferGetStaticPropsType<
  typeof getStaticProps
>> = React.memo(({ data, content }) => {
  const reducedMotion = useReducedMotion();
  const innerHtml = useMemo(() => {
    const md = new MarkdownIt({
      linkify: true,
      html: true,
      typographer: true,
    });
    return { __html: md.render(content) };
  }, [content]);
  return (
    <Layout>
      <Head>
        <title>
          {data.title} - {data.company}
        </title>
      </Head>
      <section className={style.jobArticle}>
        <div className={style.titleWrapper}>
          <h1
            className={style.jobArticle__title}
            data-no-animation={reducedMotion}
          >
            {data.h1_title}
          </h1>
          <div className={style.button__top}>
            <ButtonLink href={data.application_url}>
              Søk på stillingen
            </ButtonLink>
          </div>
        </div>
        <article
          className={style.rendered__markdown__wrapper}
          dangerouslySetInnerHTML={innerHtml}
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
