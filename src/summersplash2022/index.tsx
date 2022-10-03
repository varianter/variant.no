import Arrow from '@components/arrow';
import Head from 'next/head';
import Link from 'next/link';
import Content from './Content';
import style from './landingpage.module.css';
import img from './img/section1Blob.png';

const favicon = require('@variant/profile/lib/logo/favicon.png');

const Summersplash2022 = () => {
  return (
    <>
      <Head>
        <title>Søk sommerjobb i Variant</title>
        <link rel="icon" href={favicon} />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta
          property="og:title"
          content="Søk sommerjobb i Variant"
          key="og:title"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:url"
          content="https://www.variant.no/"
          key="og:url"
        />
        <meta
          property="og:image"
          content="https://www.variant.no/og-header-min.png"
          key="og:image"
        />
      </Head>

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
        <Content />
      </>
    </>
  );
};

export function JobLandingpage() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={img}
        alt="Varianter under felles variantdag"
      />

      <h2 className={style.infoBlock__title}>
        <Link href="/nyutdannet">
          <a className={style.infoBlock__link}>
            <span className={style.infoBlock__text}>
              Info om jobb for studenter
            </span>
            <Arrow className={style.infoBlock__arrow} color="standard__white" />
          </a>
        </Link>
      </h2>
    </div>
  );
}

export default Summersplash2022;
