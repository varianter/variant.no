import EmojiList from '../../components/emojiList/emojiList';
import HeaderBackground from '../../images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import TwoRows from '../../components/twoRows/twoRows';
import BlobText from '../../components/blobText/blobText';
import Head from 'next/head';
import { allColors, colorPairs } from '@variant/profile/lib/colors';

// Arrows
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import right2 from 'src/tjenesteomrader/images/arrows/right2.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';
import { useState } from 'react';

const DigitalTjeneste = () => {
  const blobColor = allColors.primary__shade2;
  const [isMenuVisible, setMenuVisible] = useState(false);
  const color = colorPairs.primary.shade![3];

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <Head>
        <title>Digital tjeneste- og produktutvikling</title>
      </Head>

      <div className={style.tjenesteomrade}>
        <HeaderBackground
          colorPair={color}
          headerText="Digital tjeneste- og produktutvikling"
          onVisibleChange={setMenuVisible}
        />

        <div className={style.tjenesteomrade__columns}>
          <TwoRows>
            <BlobText
              color={blobColor}
              text={['“Ja, det var en kjempegod idé, det lager vi!”']}
              blobNr={0}
            />
            <EmojiList
              listItems={[
                [
                  '💡',
                  'Ok, nå har du et klart bilde av hvordan løsningen skal være. La oss likevel ta et steg tilbake...',
                ],
              ]}
              inverted={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down1} alt="down arrow 1" />
          <img className={style.sideArrow} src={right1} alt="right arrow 1" />

          <TwoRows>
            <EmojiList
              listItems={[
                [
                  '🎯',
                  'Her er du inne på visjonen og misjonen til virksomheten, de overordnede målene og strategien for å nå de. Er det riktig å løse problemet basert på den konteksten de gir?',
                ],
              ]}
              inverted={true}
            />
            <BlobText
              color={blobColor}
              text={[
                'Hvem er målgruppen?',
                'Hvilke ulike bruker-grupper finnes innenfor målgruppen din?',
                'Hva er det du vil hjelpe brukeren med?',
                'Hva skjer når du hjelper brukeren med dette',
                'Hvilket utfall eller verdi oppnås, og hvem oppnår den?',
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
                'Hvorfor er det viktig å realisere akkurat denne idéen?',
                'Hva skjer om du ikke gjør det?',
                'Kom deg ut!',
              ]}
              blobNr={2}
            />
          </TwoRows>

          <img className={style.downArrow} src={down3} alt="down arrow 3" />
          <img className={style.sideArrow} src={right2} alt="right arrow 1" />

          <TwoRows>
            <EmojiList
              listItems={[
                ['🧑‍💻', 'Funksjonelle skisser & prototyper'],
                ['🤓', 'Tekniske eksperimenter'],
              ]}
              inverted={true}
            />
            <BlobText
              color={blobColor}
              text={[
                'Involvering i idéfasen',
                'Skissere løsning for å få feedback',
                ' Få ut en MVP til noen som er villig til å bruke den i hverdagen',
              ]}
              blobNr={3}
            />
          </TwoRows>

          <img className={style.downArrow} src={down4} alt="down arrow 4" />
          <img className={style.sideArrow} src={left2} alt="left arrow 2" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={['Måle og lære gjennom innsikt og data']}
              blobNr={4}
            />
            <EmojiList
              listItems={[
                [
                  '🧑‍🔬',
                  'Den viktigste læringen skjer når løsningen brukes som en naturlig del av hverdagen',
                ],
              ]}
              inverted={false}
            />
          </TwoRows>
        </div>
      </div>
    </div>
  );
};

export default DigitalTjeneste;
