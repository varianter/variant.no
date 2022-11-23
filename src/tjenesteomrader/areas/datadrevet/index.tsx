import BlobText from 'src/tjenesteomrader/components/blobText/blobText';
import EmojiList from 'src/tjenesteomrader/components/emojiList/emojiList';
import TwoRows from 'src/tjenesteomrader/components/twoRows/twoRows';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';

import style from 'src/tjenesteomrader/shared/index.module.css';
import BottomText from './bottomText/bottomText';

const Datadrevet = () => {
  return (
    <div>
      <title>Datadrevet</title>
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
            />
            <BlobText
              color={'#028377'}
              text={['Utvikling av helt nye produkter og tjenester']}
              blobNr={1}
            />
            <BlobText
              color={'#028377'}
              text={['Ny funksjonalitet i eksisterende produkter']}
              blobNr={2}
            />
          </div>

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
