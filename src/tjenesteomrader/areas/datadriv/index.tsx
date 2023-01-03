import BlobText from 'src/tjenesteomrader/components/blobText/blobText';
import EmojiList from 'src/tjenesteomrader/components/emojiList/emojiList';
import TwoRows from 'src/tjenesteomrader/components/twoRows/twoRows';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import Head from 'next/head';
import { allColors, colorPairs } from '@variant/profile/lib/colors';

// Arrows
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';
import { useState } from 'react';

const Datadriv = () => {
  const blobColor = allColors.secondary2__shade2;
  const [isMenuVisible, setMenuVisible] = useState(false);
  const color = colorPairs.secondary2.shade![3];
  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <Head>
        <title>Datadriv</title>
      </Head>

      <div
        style={{
          color: allColors.standard__white,
          backgroundColor: allColors.secondary2__shade3,
        }}
      >
        <HeaderBackground
          colorPair={color}
          headerText="Datadriv"
          onVisibleChange={setMenuVisible}
        />

        <div className={style.tjenesteomrade__columns}>
          <div className={style.threeRows}>
            <BlobText
              color={blobColor}
              text={['Kunnskap til å ta bedre beslutninger']}
              blobNr={0}
              threeBlobs={true}
            />
            <BlobText
              color={blobColor}
              text={['Utvikling av helt nye produkter og tjenester']}
              blobNr={1}
              threeBlobs={true}
            />
            <BlobText
              color={blobColor}
              text={['Ny funksjonalitet i eksisterende produkter']}
              blobNr={2}
              threeBlobs={true}
            />
          </div>

          <img className={style.specialArrow} src={down1} alt="down 1 arrow" />

          <TwoRows>
            <EmojiList
              listItems={[
                ['💡', 'Etablere metadatakatalog/metadataløsning'],
                ['💡', 'Etablere API-katalog'],
                ['💡', 'Tilgjengelig-gjøring via API'],
                ['💡', 'Valg av teknologi'],
              ]}
              inverted={true}
            />

            <BlobText
              color={blobColor}
              text={['Tekniske kapabiliteter']}
              blobNr={1}
            />
          </TwoRows>

          <img className={style.downArrow} src={down2} alt="down arrow 2" />
          <img className={style.sideArrow} src={left1} alt="left arrow 1" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={[' «Orden i eget hus»']}
              blobNr={2}
            />
            <EmojiList
              listItems={[
                ['💡', 'Kartlegge kvalitet og planlegge'],
                ['💡', 'Definere ansvarlige'],
                ['💡', 'Identifisere datakilder'],
              ]}
              inverted={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down3} alt="down arrow 3" />
          <img className={style.sideArrow} src={right1} alt="right arrow 1" />

          <TwoRows>
            <EmojiList
              listItems={[
                ['💡', 'Forankring: Top down og bottom up'],
                ['💡', 'Kommunisere målbilde og prosess'],
              ]}
              inverted={true}
            />
            <BlobText color={blobColor} text={['Kartlegging']} blobNr={3} />
          </TwoRows>

          <img className={style.downArrow} src={down4} alt="down arrow 4" />
          <img className={style.sideArrow} src={left2} alt="left arrow 2" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={['Forankring av ambisjoner og mål']}
              blobNr={4}
            />
          </TwoRows>
        </div>
      </div>
    </div>
  );
};

export default Datadriv;
