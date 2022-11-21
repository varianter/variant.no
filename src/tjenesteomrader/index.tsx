import EmojiList from './components/emojiList/emojiList';
import HeaderBackground from './images/headerBackground/headerBackground';

import style from './index.module.css';
import TwoRows from './components/twoRows/twoRows';
import BlobText from './components/blobText/blobText';
import BottomText from './components/bottomText/bottomText';

const Tjenesteomrade = () => {
  return (
    <div>
      <div className={style.tjenesteomrade}>
        <HeaderBackground
          headerColor={'#2F0516'}
          headerText={'Digital tjeneste- og produktutvikling'}
        />

        <div className={style.tjenesteomrade__columns}>
          <TwoRows>
            <BlobText
              color={'#8B0F40'}
              text={['“Ja, det var en kjempegod idé, det lager vi!”']}
              blobNr={0}
            />
            <EmojiList
              emoji={'💡'}
              listItem={
                'Ok, nå har du et klart bilde av hvordan løsningen skal være. La oss likevel ta et steg tilbake...'
              }
              reversed={false}
            />
          </TwoRows>
          <TwoRows>
            <EmojiList
              emoji={'🎯'}
              listItem={
                'Her er du inne på visjonen og misjonen til virksomheten, de overordnede målene og strategien for å nå de. Er det riktig å løse problemet basert på den konteksten de gir?'
              }
              reversed={true}
            />
            <BlobText
              color={'#8B0F40'}
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
          <TwoRows>
            <BlobText
              color={'#8B0F40'}
              text={[
                'Hvorfor er det viktig å realisere akkurat denne idéen?',
                'Hva skjer om du ikke gjør det?',
                'Kom deg ut!',
              ]}
              blobNr={2}
            />
          </TwoRows>
          <TwoRows>
            <div>
              <EmojiList
                emoji={'🧑‍💻'}
                listItem={'Funksjonelle skisser & prototyper'}
                reversed={true}
              />
              <EmojiList
                emoji={'🤓'}
                listItem={'Tekniske eksperimenter'}
                reversed={true}
              />
            </div>
            <BlobText
              color={'#8B0F40'}
              text={[
                'Involvering i idéfasen',
                'Skissere løsning for å få feedback',
                ' Få ut en MVP til noen som er villig til å bruke den i hverdagen',
              ]}
              blobNr={3}
            />
          </TwoRows>
          <TwoRows>
            <BlobText
              color={'#8B0F40'}
              text={['Måle og lære gjennom innsikt og data']}
              blobNr={4}
            />
            <EmojiList
              emoji={'🧑‍🔬'}
              listItem={
                'Den viktigste læringen skjer når løsningen brukes som en naturlig del av hverdagen'
              }
              reversed={false}
            />
          </TwoRows>
        </div>
      </div>
      <BottomText />
    </div>
  );
};

export default Tjenesteomrade;
