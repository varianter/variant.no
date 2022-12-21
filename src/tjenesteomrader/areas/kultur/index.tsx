import { allColors, colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import BottomText from './bottomText/bottomText';
import style from 'src/tjenesteomrader/shared/index.module.css';
import { useState } from 'react';

const Kultur = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const color = colorPairs.primary.tint![1];

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <HeaderBackground
        headerText={'Kultur'}
        colorPair={color}
        whiteMode={false}
        onVisibleChange={setMenuVisible}
      />
      <BottomText footerColor={allColors.primary__tint2} />
    </div>
  );
};

export default Kultur;
