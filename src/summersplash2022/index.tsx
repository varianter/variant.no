import Head from 'next/head';
import Content from './Content';

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

export default Summersplash2022;
