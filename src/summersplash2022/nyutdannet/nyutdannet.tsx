import LandingPage from './sections/forside';
import AfterApplying from './sections/hvaSkjerEtterSonaadsfristen';
import WhoAreWeSeeking from './sections/hvemSokerVi';
import FirstYear from './sections/hvordanSerFørsteÅretUt';
import WhyVariant from './sections/hvorforAkkurattVariant';
import Payment from './sections/lonn';
import Apply from './sections/søkJobb';
import Head from 'next/head';
import favicon from '@variant/profile/lib/logo/favicon.png';
import { HandbookPage } from '../utils/handBookPages';
import style from 'src/summersplash2022/index.module.css';
import { ApplyType } from '../utils/utils';

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
        <LandingPage
          applyType={ApplyType.GRADUATE}
          className={style.sectionDarkBlue}
        />
        <WhoAreWeSeeking className={style.sectionLightBeige} />
        <WhyVariant
          pages={[
            HandbookPage.INTENTIONS_AND_VALUES,
            HandbookPage.WORK,
            HandbookPage.SOCIAL,
            HandbookPage.PERKS,
          ]}
          className={style.sectionDarkTeal}
        />
        <Payment />
        <FirstYear />
        <AfterApplying
          applyType={ApplyType.GRADUATE}
          className={style.sectionLightBeige}
        />

        <Apply applyType={ApplyType.GRADUATE} />
      </div>
    </>
  );
};

export default Nyutdannet;
