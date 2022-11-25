import BlobText from '../../components/blobText/blobText';
import EmojiList from '../../components/emojiList/emojiList';
import TwoRows from '../../components/twoRows/twoRows';
import HeaderBackground from '../../images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import BottomText from './bottomText/bottomText';
import { allColors } from '@variant/profile/lib/colors';
import Head from 'next/head';

// Arrows
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import right2 from 'src/tjenesteomrader/images/arrows/right2.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';

const Strategi = () => {
  const blobColor = allColors.secondary1__shade2;
  return (
    <div>
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
          headerColor={allColors.secondary1__shade4}
          headerText="Strategi-utvikling"
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
              emoji={'🏔'}
              listItem={'et felles overordnet målbilde'}
              reversed={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down3} alt="down arrow 3" />
          <img className={style.sideArrow} src={right2} alt="right arrow 2" />

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
      <BottomText footerColor={allColors.secondary1__shade4} />
    </div>
  );
};

export default Strategi;
