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
        <div className={style.fulltimelinkSection}>
          <Link href="/jobs">
            <a className={style.otherJobsLink}>
              Fast stilling? <img src={require('./arrow.svg')} />
            </a>
          </Link>
        </div>

        <section className={style.mainTitleSection}>
          <span>Søk innen 3. oktober</span>
          <h1 className={style.job_title}>Sommerjobb 2022</h1>
          <h4>
            Både i Trondheim og Oslo!{' '}
            <span aria-label="konfetti-emoji">🎉</span>
          </h4>

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

        <div className={style.multiplePageBlobBottomRight}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={colors.colorPairs.secondary3.default.bg}
            imageProps={{ src: require('./images/sommerjobbere2020.jpg') }}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>
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

        <div className={style.multiplePageBlobTopRight}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={colors.colorPairs.secondary2.default.bg}
            imageProps={{ src: require('./images/sommerjobbere2020.jpg') }}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>

        <div className={style.multiplePageBlobBottomLeft}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={'#02AE9E'}
          />
        </div>
      </section>

      <section className={style.thirdSection}>
        <h2>Seksjon</h2>

        <div className={style.multiplePageBlobTopLeft}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={colors.colorPairs.secondary4.default.bg}
          />
        </div>

        <div className={style.multiplePageBlobBottomRight}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={'#F8F6EF'}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>
      </section>

      <section className={style.fourthSection}>
        <h2>Seksjon</h2>

        <div className={style.multiplePageBlobTopRight}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={'#736EBE'}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>

        <div className={style.multiplePageBlobBottomLeft}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={'#534DAC'}
          />
        </div>
      </section>

      <section className={style.fifthSection}>
        <h2>Seksjon</h2>

        <div className={style.multiplePageBlobTopLeft}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={'#FFC4BC'}
          />
        </div>

        <div className={style.multiplePageBlobBottomRight}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={colors.colorPairs.secondary2.default.bg}
            imageProps={{ src: require('public/images/marius.png') }}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>
      </section>

      <section className={style.sixtSection}>
        <section className={style.applicationInfo}>
          <p>Vi håper du søker, og ser frem til å bli bedre kjent med deg.</p>
          <p>
            Har du spørsmål om sommerjobbene eller Variant? Ta gjerne kontakt
            med meg.
          </p>
          <p>- Marius Krakeli, utvikler og rekrutteringsansvarlig i Variant</p>
          <p>
            <a href="mailto:mk@variant.no">mk@variant.no</a> |{' '}
            <a href="tel:41637572">41 63 75 72</a>
          </p>
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

        <div className={style.multiplePageBlobTopRight}>
          <BaseBlob
            seed="Variant"
            width={1000}
            height={1000}
            color={colors.colorPairs.secondary2.default.bg}
            imageProps={{ src: require('public/images/marius.png') }}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>
      </section>

      <div className={style.multiplePageBlobBottomLeft}>
        <BaseBlob
          seed="Variant"
          width={1000}
          height={1000}
          color={'#F5A4C4'}
          alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
        />
      </div>
    </>
  );
};

export default SummerSplash;
