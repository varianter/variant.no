import BlobText from '../components/blobText/blobText';
import BottomText from '../components/bottomText/bottomText';
import EmojiList from '../components/emojiList/emojiList';
import TwoRows from '../components/twoRows/twoRows';
import HeaderBackground from '../images/headerBackground/headerBackground';
import style from '../shared/index.module.css';

const Strategi = () => {
  return (
    <div>
      <div style={{ color: 'white', backgroundColor: '#1A1837' }}>
        <HeaderBackground
          headerColor={'#0D0C1B'}
          headerText={'Strategi-utvikling'}
        />

        <div className={style.tjenesteomrade__columns}>
          <TwoRows>
            <BlobText
              color={'#282552'}
              text={[
                'Først tenker du at det er selvsagt. At mer eller mindre dagligdagse sysler, slik som ',
              ]}
              blobNr={0}
            />
            <div>
              <EmojiList
                emoji={'🛣'}
                listItem={'retningsvalg og beslutninger'}
                reversed={false}
              />
              <EmojiList
                emoji={'📈'}
                listItem={'forretnings- og leveranseplaner'}
                reversed={false}
              />
              <EmojiList
                emoji={'🤝'}
                listItem={' ansettelser eller organisasjons-endringer'}
                reversed={false}
              />
            </div>
          </TwoRows>
          <TwoRows>
            <div></div>
            <BlobText
              color={'#282552'}
              text={[
                '…ikke er tilfeldige eller personavhengige – men velbegrunnede, samkjørte og strategisk forankrete aktiviteter.',
              ]}
              blobNr={1}
            />
          </TwoRows>
          <TwoRows>
            <BlobText
              color={'#282552'}
              text={[
                'Du tar det for gitt at hele organisasjonen på tvers av team og miljøer jobber mot…',
              ]}
              blobNr={2}
            />
            <EmojiList
              emoji={'🏔'}
              listItem={'et felles overordnet målbilde'}
              reversed={false}
            />
          </TwoRows>
          <TwoRows>
            <div>
              <EmojiList emoji={'❤️'} listItem={'kundeverdi'} reversed={true} />
              <EmojiList
                emoji={'💰'}
                listItem={'og forretningsverdi'}
                reversed={true}
              />
            </div>
            <BlobText
              color={'#282552'}
              text={[
                '…og at de flinke folkene løser oppgaver som realiserer både…',
              ]}
              blobNr={3}
            />
          </TwoRows>
          <TwoRows>
            <BlobText
              color={'#282552'}
              text={[
                '…samtidig med at den fjelltoppen som er peilet ut som mål, kommer stadig nærmere…',
              ]}
              blobNr={4}
            />
          </TwoRows>
        </div>
      </div>
      <BottomText footerColor={'#0D0C1B'} />
    </div>
  );
};

export default Strategi;
