import { allColors } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import BottomText from './bottomText/bottomText';
import style from 'src/tjenesteomrader/shared/index.module.css';
import { useState } from 'react';

const Kultur = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <HeaderBackground
        headerColor={allColors.secondary3__shade2}
        headerText={'Kultur'}
        onVisibleChange={setMenuVisible}
      />
      <BottomText footerColor={allColors.secondary3__shade2} />
    </div>
  );
};

export default Kultur;
