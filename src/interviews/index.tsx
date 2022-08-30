import React, { useMemo } from 'react';
import { getStaticProps } from 'pages/intervju/[project].tsx/[interview]';
import { Interview } from './utils/interviewHandlers';
import MarkdownIt from 'markdown-it';
import { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Layout from 'src/layout';
import style from './index.module.css';
import Link from 'next/link';
import SayHi from 'src/index/say-hi';

const createHtmlFromMetadata = (interview: Interview) => {
  let locationsHtml = '';
  interview.location.forEach((location: string) => {
    locationsHtml += `<span>${location}</span>`;
  });
  let html =
    '<div class="variant">' +
    '<div class="imageContainer">' +
    '<figure>' +
    '<div class="img__decorationBox"></div>' +
    '<div class="img__decorationBox"></div>' +
    `<img src="${interview.image}" alt="${interview.imageAltText}"/>` +
    '</figure>' +
    '</div>' +
    '<div>' +
    `<div class="variant__location"><p>Lokasjon</p>${locationsHtml}</div>` +
    '</div>' +
    '</div>';

  return html;
};

const Interview: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  React.memo(({ interview }) => {
    const innerHtml = useMemo(() => {
      const md = new MarkdownIt({
        linkify: true,
        html: true,
        typographer: true,
      });
      let html = md.render(interview.content);

      const htmlFromMetadata = createHtmlFromMetadata(interview);

      return {
        __html: html.replace('variant_info_placeholder', htmlFromMetadata),
      };
    }, [interview]);

    return (
      <Layout title={`${interview.meta_title}`}>
        <Head>
          <meta
            property="og:url"
            content={`https://www.variant.no/intervju/${interview.name}`}
            key="og:url"
          />
          {interview.meta_title && (
            <meta
              property="og:title"
              content={interview.meta_title}
              key="og:title"
            />
          )}
          {interview.meta_description && (
            <>
              <meta
                name="description"
                content={interview.meta_description}
                key="description"
              />
              <meta
                property="og:description"
                content={interview.meta_description}
                key="og:description"
              />
            </>
          )}
        </Head>

        <SayHi
          className={style.sayhi}
          href="/jobs"
          rel="noopener"
          text="Bli en variant!"
        />

        <nav className={style.nav}>
          <Link href={`/prosjekter/${interview.projectSlug}`}>
            {interview.project}
          </Link>
          <span className={style.nav__arrow}>&gt;</span>
          <span className={style.nav__subject}>{interview.variant}</span>
        </nav>

        <section className={style.interview}>
          <article
            className={style.rendered__markdown__wrapper}
            dangerouslySetInnerHTML={innerHtml}
          ></article>
        </section>
      </Layout>
    );
  });

export default Interview;
