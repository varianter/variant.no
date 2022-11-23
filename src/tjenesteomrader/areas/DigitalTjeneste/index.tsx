import EmojiList from '../../components/emojiList/emojiList';
import HeaderBackground from '../../images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import TwoRows from '../../components/twoRows/twoRows';
import BlobText from '../../components/blobText/blobText';
import BottomText from './bottomText/bottomText';
import { useMediaQuery } from 'react-responsive';

// Arrows
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import right2 from 'src/tjenesteomrader/images/arrows/right2.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';

const Tjenesteomrade = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  return (
    <div>
      <title>Digital tjeneste og produktutvikling</title>
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
          {isMobile ? (
            <img className={style.downArrow} src={down1} alt="down arrow 1" />
          ) : (
            <img
              className={style.sideArrowRight}
              src={right1}
              alt="down arrow 1"
            />
          )}
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
          {isMobile ? (
            <img className={style.downArrow} src={down2} alt="down arrow 1" />
          ) : (
            <img
              className={style.sideArrowRight}
              src={left1}
              alt="down arrow 1"
            />
          )}
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
          {isMobile ? (
            <img className={style.downArrow} src={down3} alt="down arrow 1" />
          ) : (
            <img
              className={style.sideArrowRight}
              src={right2}
              alt="down arrow 1"
            />
          )}
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
          {isMobile ? (
            <img className={style.downArrow} src={down4} alt="down arrow 1" />
          ) : (
            <img
              className={style.sideArrowRight}
              src={left2}
              alt="down arrow 1"
            />
          )}
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
      <BottomText footerColor={'#2F0516'} />
    </div>
  );
};

export default Tjenesteomrade;
