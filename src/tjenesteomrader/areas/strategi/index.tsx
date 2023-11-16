import { allColors, colorPairs } from '@variant/profile/lib/colors';
import Head from 'next/head';
import style from 'src/tjenesteomrader/shared/index.module.css';
import BlobText from '../../components/blobText/blobText';
import EmojiList from '../../components/emojiList/emojiList';
import TwoRows from '../../components/twoRows/twoRows';
import HeaderBackground from '../../images/headerBackground/headerBackground';

// Arrows
import { useState } from 'react';
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import right2 from 'src/tjenesteomrader/images/arrows/right2.svg';
import download from './download.svg';

const Strategi = () => {
  const blobColor = allColors.secondary1__shade2;
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

        <div className={style.tjenesteomrade__columns}>
          <TwoRows>
            <BlobText
              color={blobColor}
              text={[
                'Først tenker du at det er selvsagt. At mer eller mindre dagligdagse sysler, slik som ',
              ]}
              blobNr={0}
            />

            <EmojiList
              listItems={[
                ['🛣', 'retningsvalg og beslutninger'],
                ['📈', 'forretnings- og leveranseplaner'],
                ['🤝', 'ansettelser eller organisasjons-endringer'],
              ]}
              inverted={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down1} alt="down arrow 1" />
          <img className={style.sideArrow} src={right1} alt="right arrow 1" />

          <TwoRows>
            <div></div>
            <BlobText
              color={blobColor}
              text={[
                '…ikke er tilfeldige eller personavhengige – men velbegrunnede, samkjørte og strategisk forankrete aktiviteter.',
              ]}
              blobNr={1}
            />
          </TwoRows>

          <img className={style.downArrow} src={down2} alt="down arrow 2" />
          <img className={style.sideArrow} src={left1} alt="left arrow 1" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={[
                'Du tar det for gitt at hele organisasjonen på tvers av team og miljøer jobber mot…',
              ]}
              blobNr={2}
            />
            <EmojiList
              listItems={[['🏔', 'et felles overordnet målbilde']]}
              inverted={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down3} alt="down arrow 3" />
          <img className={style.sideArrow} src={right2} alt="right arrow 2" />

          <TwoRows>
            <EmojiList
              listItems={[
                ['❤️', 'kundeverdi'],
                ['💰', 'og forretningsverdi'],
              ]}
              inverted={true}
            />

            <BlobText
              color={blobColor}
              text={[
                '…og at de flinke folkene løser oppgaver som realiserer både…',
              ]}
              blobNr={3}
            />
          </TwoRows>

          <img className={style.downArrow} src={down4} alt="down arrow 4" />
          <img className={style.sideArrow} src={left2} alt="left arrow 2" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={[
                '…samtidig med at den fjelltoppen som er peilet ut som mål, kommer stadig nærmere…',
              ]}
              blobNr={4}
            />
          </TwoRows>
        </div>
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

        <p>
          <strong>
            Neste meetup: 12. januar 2024, kl. 18. Hvor: Varianthuset i
            Trondheim
          </strong>
        </p>

        <div className={style.buttonRow}>
          <ButtonLink href="mailto:mos@variant.no">Meld deg på</ButtonLink>
        </div>
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
        <h3 className="fancy">Designressurser</h3>

        <p>
          I strategisk arbeid er det få verktøy som kobler strategiske
          målsettinger med kulturbygging, aktiviteter og tiltak. Variant har
          utviklet modellen{' '}
          <strong>© Strategic Mountain Map / Fjellmodellen</strong> for å løse
          dette behovet. Denne modellen er orientert rundt at arbeidet skal være
          samarbeidende og at resultatet (strategiproduktet) skal være visuelt
          og enkelt. Modellen er et levende rammeverk og egner seg godt i
          kontinuerlig strategiarbeid.
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
      </div>
    </ThreeColumn>
  );
}

export default Strategi;
