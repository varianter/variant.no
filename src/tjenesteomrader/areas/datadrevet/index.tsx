import BlobText from 'src/tjenesteomrader/components/blobText/blobText';
import EmojiList from 'src/tjenesteomrader/components/emojiList/emojiList';
import TwoRows from 'src/tjenesteomrader/components/twoRows/twoRows';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import { useMediaQuery } from 'react-responsive';

// Arrows
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';

import style from 'src/tjenesteomrader/shared/index.module.css';
import BottomText from './bottomText/bottomText';
import { useEffect } from 'react';

const Datadrevet = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  useEffect(() => {
    document.title = 'Datadrevet';
  }, []);

  return (
    <div>
      <div style={{ color: 'white', backgroundColor: '#01574F' }}>
        <HeaderBackground
          headerColor={'#012C28'}
          headerText={'Datadrevet produkt- og tjenesteutvikling'}
        />

        <div className={style.tjenesteomrade__columns}>
          <div className={style.threeRows}>
            <BlobText
              color={'#028377'}
              text={['Kunnskap til å ta bedre beslutninger']}
              blobNr={0}
              threeBlobs={true}
            />
            <BlobText
              color={'#028377'}
              text={['Utvikling av helt nye produkter og tjenester']}
              blobNr={1}
              threeBlobs={true}
            />
            <BlobText
              color={'#028377'}
              text={['Ny funksjonalitet i eksisterende produkter']}
              blobNr={2}
              threeBlobs={true}
            />
          </div>
          <img className={style.downArrow} src={down1} alt="donw 1 arrow" />
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
              color={'#028377'}
              text={['Tekniske kapabiliteter']}
              blobNr={1}
            />
          </TwoRows>
          {isMobile ? (
            <img
              className={style.sideArrowRight}
              src={down2}
              alt="left arrow 1"
            />
          ) : (
            <img
              className={style.sideArrowRight}
              src={left1}
              alt="down arrow 1"
            />
          )}
          <TwoRows>
            <BlobText
              color={'#028377'}
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
            <img
              className={style.sideArrowRight}
              src={down3}
              alt="left arrow 1"
            />
          ) : (
            <img
              className={style.sideArrowRight}
              src={right1}
              alt="down arrow 1"
            />
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
            <BlobText color={'#028377'} text={['Kartlegging']} blobNr={3} />
          </TwoRows>
          {isMobile ? (
            <img
              className={style.sideArrowRight}
              src={down4}
              alt="left arrow 1"
            />
          ) : (
            <img
              className={style.sideArrowRight}
              src={left2}
              alt="down arrow 1"
            />
          )}
          <TwoRows>
            <BlobText
              color={'#028377'}
              text={['Forankring av ambisjoner og mål']}
              blobNr={4}
            />
          </TwoRows>
        </div>
      </div>
      <BottomText footerColor={'#012C28'} />
    </div>
  );
};

export default Datadrevet;
