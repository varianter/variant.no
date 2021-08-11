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
import { and } from 'src/utils/css';

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
          <img
            className={style.arrow}
            aria-label="Pil som forklarer at Variant i 2022 tilbyr sommerjobb både i Trondheim og Oslo"
            src={require('./images/pil.svg')}
          />
          <h4>
            Både i Trondheim og Oslo!{' '}
            <span aria-label="konfetti-emoji">🎉</span>
          </h4>
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
        <h2>Hva går en sommerjobb i Variant ut på?</h2>

        <p>
          En sommerjobb i Variant passer for deg som har lyst å anvende læring
          fra studiene i praksis.
        </p>

        <p>
          Hos oss vil du jobbe i et tverrfaglig team sammen med andre utviklere
          og designere der målet er å løse et reellt oppdrag for en av våre
          kunder.
        </p>

        <p>
          Du trenger ikke å være spesialist for å få sommerjobb hos oss, men du
          bør ha et ønske om å lære mens du er her. Gjennom sommeren vil
          sommerstudentene få god oppfølging fra erfarne konsulenter som vil at
          du skal lykkes, og for å sikre dette har sommerstudentene våre ferie i
          fellesferien.
        </p>

        <p>
          Variant har sentrale lokaler i{' '}
          <a
            target="blank"
            rel="noopener"
            href="https://www.google.com/maps/place/Varianthuset/@63.4328051,10.397323,17z/data=!3m1!4b1!4m5!3m4!1s0x466d312df4ea1347:0xf63e949e041942ee!8m2!3d63.4328051!4d10.3995117"
          >
            Varianthuset i Trondheim sentrum
          </a>{' '}
          og{' '}
          <a
            target="blank"
            rel="noopener"
            href="https://www.google.com/maps/place/Spaces+-+Spaces+Oslo+Kvadraturen/@59.9096596,10.7460537,18z/data=!4m5!3m4!1s0x46416e89a671fbe3:0x278831a2eb8f70ea!8m2!3d59.9097229!4d10.7467068"
          >
            Kvadraturen i Oslo.
          </a>
        </p>

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
        <h2>En Variant av verdier</h2>

        <p>
          Selv om det siste året har vært helt spesielt så gleder vi oss masse
          til å ta imot dere i sommer og gi dere gode og trygge rammer for både
          læreglede, utvikling og en smak av livet i Variant.
        </p>

        <p>
          Til tross for en litt uforutsigbar periode så har vi satt opp en plan
          for både hvordan vi ønsker å ivareta dere faglig, men også for å bli
          bedre kjent med hverandre.
        </p>

        <div className="handbookAd">
          <h4>Sjekk ut håndboka vår?</h4>

          <img
            className={style.rotate90cw}
            aria-label="Pil til Variant sin håndbok"
            src={require('./images/pil.svg')}
          />

          <a href="https://handbook.variant.no/" target="blank">
            <BaseBlob
              seed="Variant"
              width={200}
              height={200}
              color={colors.colorPairs.secondary4.default.bg}
            />
          </a>
        </div>

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
        <h2>Hva skjer etter søknadsfristen?</h2>

        <article>
          <div className={style.timelineContainer}>
            <div className={style.timelineEvent}>
              <h4>Søknadsfrist</h4>
              <h5>3. oktober</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Kaffeprat med utvalgte kandidater</h4>
              <h5>6. - 7. oktober</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Tilbud om sommerjobb</h4>
              <h5>8. oktober</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Mulighet for å delta på alle sosiale arrangementer</h4>
              <h5>november - juni</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Første arbeidsperiode</h4>
              <h5>13. juni - 8. juli (4 uker)</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Fellesferie</h4>
              <h5>11. - 29. juli (3 uker)</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Andre arbeidsperiode</h4>
              <h5>1. - 12. august (2 uker)</h5>
            </div>

            <div className={style.timelineEvent}>
              <h4>Tilbud om fast ansettelse?</h4>
            </div>
          </div>
        </article>

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
        <h2>Hva skal du sende inn?</h2>

        <p>
          Selv om det siste året har vært helt spesielt så gleder vi oss masse
          til å ta imot dere i sommer og gi dere gode og trygge rammer for både
          læreglede, utvikling og en smak av livet i Variant.
        </p>

        <p>
          Til tross for en litt uforutsigbar periode så har vi satt opp en plan
          for både hvordan vi ønsker å ivareta dere faglig, men også for å bli
          bedre kjent med hverandre.
        </p>

        <p>Ikke nøl med å spør oss om dere lurer på noe!</p>

        <div className="applyArrow">
          <h4>Du kan søke på neste side!</h4>
          <img
            className={and(style.arrow, style.upsideDown)}
            aria-label="Pil som viser at du kan søke lenger nede på siden"
            src={require('./images/pil.svg')}
          />
        </div>

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

        <img
          className={style.finalBlob}
          src={require('./images/bunnblob.png')}
        />
      </section>
    </>
  );
};

export default SummerSplash;
