import { allColors, colorPairs } from '@variant/profile/lib/colors';
import Head from 'next/head';
import style from 'src/tjenesteomrader/shared/index.module.css';
import HeaderBackground from '../../images/headerBackground/headerBackground';

// Arrows
import { useState } from 'react';
import download from './download.svg';

const Strategi = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const color = colorPairs.secondary1.shade![3];

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <Head>
        <title>Strategi</title>
      </Head>

      <div
        style={{
          color: allColors.standard__white,
          backgroundColor: allColors.secondary1__shade3,
        }}
      >
        <HeaderBackground
          colorPair={color}
          headerText="Strategi"
          onVisibleChange={setMenuVisible}
        />
      </div>
    </div>
  );
};

import { ButtonLink } from '@components/button';
import { PropsWithChildren } from 'react';
import ThreeColumn from 'src/tjenesteomrader/components/three-column';

export type StrategyExtrasProps = PropsWithChildren<{}>;
export function StrategyExtras({}: StrategyExtrasProps) {
  return (
    <ThreeColumn>
      <div>
        <h3 className="fancy" id="strateginettverk">
          Strateginettverk
        </h3>

        <p>
          Variant arrangerer meetups med faglig program og mingling med andre
          strateger. Meld deg på nettverket ved å sende mail til
          strategiansvarlig{' '}
          <a href="mailto:mos@variant.no">
            Magnus Olderø Sæther (mos@variant.no)
          </a>
        </p>
      </div>

      <div>
        <h3 className="fancy">Strategisprint</h3>

        <p>
          Mange virksomheter sliter med jobbe helhetlig og strategisk med
          verdiskaping og kulturbygging. Variant har dette som ekspertisefelt,
          og tilbyr Strategi-sprint som en lavterskel starthjelp. Ta kontakt med
          oss om dette høres interessant ut for deg og din virksomhet.
        </p>
        <div className={style.buttonRow}>
          <ButtonLink href="mailto:mos@variant.no">Send forespørsel</ButtonLink>
        </div>
      </div>

      <div>
        <h3 className="fancy">Variants strategimetodikk</h3>

        <p>
          I strategisk arbeid er det få verktøy som kobler strategiske
          målsettinger med kulturbygging, aktiviteter og tiltak. Variant har
          utviklet modellen <strong>© Strategisløyfen og Fjellkartet</strong>{' '}
          for å løse dette behovet. Denne modellen er orientert rundt at
          arbeidet skal være samarbeidende og at resultatet (strategiproduktet)
          skal være visuelt og enkelt. Modellen er et levende rammeverk og egner
          seg godt i kontinuerlig strategiarbeid.
        </p>

        <p>
          Ta kontakt for å få råd og opplæring i hvordan denne modellen kan
          brukes effektivt. Last den ned her for å ta en titt:
        </p>

        <div className={style.buttonRow}>
          <ButtonLink
            href="/Variant_Fjellmodellen.pdf"
            download
            colorPair={colorPairs.secondary2}
            title="Last ned PDF-versjon av fjellkart"
          >
            PDF
            <img
              className={style.downloadIcon}
              src={download}
              alt=""
              role="none"
            />
          </ButtonLink>
          <ButtonLink
            href="/Variant_Fjellmodellen.png"
            download
            colorPair={colorPairs.secondary2}
            title="Last ned PNG-versjon av fjellkart"
          >
            PNG
            <img
              className={style.downloadIcon}
              src={download}
              alt=""
              role="none"
            />
          </ButtonLink>
        </div>

        <div className={style.buttonRow}>
          <ButtonLink href="https://blog.variant.no/en-introduksjon-til-strategisl%C3%B8yfen-en-ny-strategimodell-8643cb23a5e3">
            Lær mer om Strategisløyfen
          </ButtonLink>
        </div>
      </div>
    </ThreeColumn>
  );
}

export default Strategi;
