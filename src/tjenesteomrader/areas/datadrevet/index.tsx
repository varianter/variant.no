import BlobText from 'src/tjenesteomrader/components/blobText/blobText';
import EmojiList from 'src/tjenesteomrader/components/emojiList/emojiList';
import TwoRows from 'src/tjenesteomrader/components/twoRows/twoRows';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import { useMediaQuery } from 'react-responsive';
import style from 'src/tjenesteomrader/shared/index.module.css';
import BottomText from './bottomText/bottomText';
import Head from 'next/head';
import { allColors } from '@variant/profile/lib/colors';

// Arrows
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';

const Datadrevet = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  const blobColor = allColors.secondary2__shade2;
  return (
    <div>
      <Head>
        <title>Datadrevet produkt- og tjenesteutvikling</title>
      </Head>

      <div
        style={{
          color: allColors.standard__white,
          backgroundColor: allColors.secondary2__shade3,
        }}
      >
        <HeaderBackground
          headerColor={allColors.secondary2__shade4}
          headerText="Datadrevet produkt- og tjenesteutvikling"
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
          <img className={style.downArrow} src={down1} alt="down 1 arrow" />
          <TwoRows>
            <div>
              <EmojiList
                emoji={'💡'}
                listItem={'Etablere metadatakatalog/metadataløsning'}
                reversed={true}
              />
              <EmojiList
                emoji={'💡'}
                listItem={'Etablere API-katalog'}
                reversed={true}
              />
              <EmojiList
                emoji={'💡'}
                listItem={'Tilgjengelig-gjøring via API'}
                reversed={true}
              />
              <EmojiList
                emoji={'💡'}
                listItem={'Valg av teknologi'}
                reversed={true}
              />
            </div>
            <BlobText
              color={blobColor}
              text={['Tekniske kapabiliteter']}
              blobNr={1}
            />
          </TwoRows>
          {isMobile ? (
            <img className={style.sideArrow} src={down2} alt="down arrow 2" />
          ) : (
            <img className={style.sideArrow} src={left1} alt="left arrow 1" />
          )}
          <TwoRows>
            <BlobText
              color={blobColor}
              text={[' «Orden i eget hus»']}
              blobNr={2}
            />
            <div>
              <EmojiList
                emoji={'💡'}
                listItem={'Kartlegge kvalitet og planlegge'}
                reversed={false}
              />
              <EmojiList
                emoji={'💡'}
                listItem={'Definere ansvarlige'}
                reversed={false}
              />
              <EmojiList
                emoji={'💡'}
                listItem={'Identifisere datakilder'}
                reversed={false}
              />
            </div>
          </TwoRows>
          {isMobile ? (
            <img className={style.sideArrow} src={down3} alt="down arrow 3" />
          ) : (
            <img className={style.sideArrow} src={right1} alt="right arrow 1" />
          )}
          <TwoRows>
            <div>
              <EmojiList
                emoji={'💡'}
                listItem={'Forankring: Top down og bottom up'}
                reversed={true}
              />
              <EmojiList
                emoji={'💡'}
                listItem={'Kommunisere målbilde og prosess'}
                reversed={true}
              />
            </div>
            <BlobText color={blobColor} text={['Kartlegging']} blobNr={3} />
          </TwoRows>
          {isMobile ? (
            <img className={style.sideArrow} src={down4} alt="down arrow 4" />
          ) : (
            <img className={style.sideArrow} src={left2} alt="left arrow 2" />
          )}
          <TwoRows>
            <BlobText
              color={blobColor}
              text={['Forankring av ambisjoner og mål']}
              blobNr={4}
            />
          </TwoRows>
        </div>
      </div>
      <BottomText footerColor={allColors.secondary2__shade4} />
    </div>
  );
};

export default Datadrevet;
