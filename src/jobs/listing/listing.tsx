import React, { useMemo } from 'react';

import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/jobs/[listing]';
import Layout from 'src/layout';
import Head from 'next/head';
import Image from 'next/image';
import MarkdownIt from 'markdown-it';
import { ButtonLink } from 'src/components/button';
import style from './listings.module.css';
import { Employee } from 'src/employees';
import { and } from 'src/utils/css';

const Listing: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = React.memo(({ listing }) => {
  const innerHtml = useMemo(() => {
    const md = new MarkdownIt({
      linkify: true,
      html: true,
      typographer: true,
    });
    return { __html: md.render(listing.content) };
  }, [listing.content]);

  return (
    <Layout>
      <Head>
        <title>
          {listing.title} - {listing.company_name}
        </title>
      </Head>
      <section className={style.jobArticle}>
        <div className={style.titleWrapper}>
          <h2 className={style.jobArticle__title}>{listing.h1_title}</h2>
          <div className={style.button__top}>
            <ButtonLink href={listing.careers_apply_url}>
              Søk på stillingen
            </ButtonLink>
          </div>
        </div>
        <div>
          <article
            className={style.rendered__markdown__wrapper}
            dangerouslySetInnerHTML={innerHtml}
          />
          {!!listing.contacts.length && (
            <div className={style.contacts__layout}>
              {listing.contacts.map((c) => (
                <ContactTile key={c.email} contact={c} />
              ))}
            </div>
          )}
        </div>
        <div className={style.button__bottom}>
          <ButtonLink href={listing.careers_apply_url} mode="primary">
            Søk på stillingen
          </ButtonLink>
        </div>
      </section>
      <>
        <svg height={0} width={0}>
          <defs>
            <path
              id="blob1"
              d="M205,355.2864986526615C248.7150970150467,350.80041339631816,282.01344382004675,322.4100717494572,312.29985923253014,290.56878236877077C348.03453998052447,252.9995192147581,394.76852528571646,214.67590934522775,387.5869487338381,163.3257204426926C380.014635332008,109.18165878655554,329.5087091111076,72.21709159678429,278.8776946654294,51.59138629779804C232.2092175370184,32.57991148257735,179.52865730619052,36.161082904203,135.4703774818946,60.62025114555632C94.41409617922676,83.41284531289631,73.8609713625924,126.9431683679426,61.52886001189853,172.25364853440013C48.297933884731954,220.86654204635448,34.925451154935786,276.1921460800724,66.00646251044944,315.8436473745453C97.26527953212276,355.7219836816004,154.59524114834886,360.459083433981,205,355.286498652661"
            />
            <path
              id="blob2"
              d="M225,392.6338598816929C284.9764927827312,391.55164306860047,350.25887890965123,401.1392634694311,392.64696961471276,358.6939969945104C439.6504937650968,311.6270714822181,459.10169838294456,239.74644281597477,441.83183448619616,175.50954873848067C425.19500811560096,113.62729768294105,370.9499690960947,67.7278685811003,309.51949094996144,49.493468615003124C257.5764576183983,34.075225524546966,207.75912938146752,64.73765226263988,161.02677160651086,92.15822243311086C120.76704396969669,115.78092711292703,88.16026359278979,146.5268705982898,70.50442838577555,189.73739395687718C47.10626747132736,247.00156565350048,12.11520036810903,315.66792180435,49.59087833421807,364.88410669569697C87.32143609615235,414.4350209858756,162.7294163076919,393.7574713085401,225,392.6338598816929"
            />
            <clipPath id="blobClip1" clipPathUnits="objectBoundingBox">
              <use
                xlinkHref="#blob1"
                href="#blob1"
                transform="scale(0.0024) translate(.5, .5)"
              />
            </clipPath>
            <clipPath id="blobClip2" clipPathUnits="objectBoundingBox">
              <use
                xlinkHref="#blob2"
                href="#blob2"
                transform="scale(0.002) translate(-0, -0)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    </Layout>
  );
});

export const ContactTile: React.FC<{ contact: Employee }> = ({
  contact: { fullName, name, email, phone, imageSlug },
}) => {
  return (
    <div className={style.contact}>
      <Image
        width={300}
        height={300}
        alt={`Bilde av ${name}`}
        src={`/employees/${imageSlug}.png`}
        loading="lazy"
      />

      <h4 className={and(style.contact__name, 'fancy')}>{fullName}</h4>
      <a href={`mailto:${email}`} className={style.contact__type}>
        📬 {email}
      </a>
      <a
        href={`tel:+47${phone.replace(/\s*/g, '')}`}
        className={style.contact__type}
      >
        📞 {phone}
      </a>
    </div>
  );
};

export default Listing;
