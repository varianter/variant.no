import LandingPage from './sections/forside';
import AfterApplying, { ApplyType } from './sections/hvaSkjerEtterSonaadsfristen';
import WhoAreWeSeeking from './sections/hvemSokerVi';
import FirstYear from './sections/hvordanSerFørsteÅretUt';
import WhyVariant from './sections/hvorforAkkurattVariant';
import Payment from './sections/lonn';
import Apply from './sections/søkJobb';
import style from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import Head from 'next/head';
import favicon from '@variant/profile/lib/logo/favicon.png';

const Nyutdannet = () => {
  return (
    <>
      <Head>
        <title>Søk fastjobb i Variant</title>
        <link rel="icon" href={favicon} />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta
          property="og:title"
          content="Søk fastjobb i Variant"
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

      <div className={style.scrollContainer}>
        <LandingPage />
        <WhoAreWeSeeking />
        <WhyVariant />
        <Payment />
        <FirstYear />
        <AfterApplying red={false} applyType={ApplyType.GRADUATE} />
        <Apply />
      </div>
    </>
  );
};

export default Nyutdannet;
