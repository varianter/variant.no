import { allColors } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import BottomText from './bottomText/bottomText';

const Kultur = () => {
  return (
    <div>
      <HeaderBackground
        headerColor={allColors.secondary3__shade4}
        headerText={'Kultur'}
      />
      <BottomText footerColor={allColors.secondary3__shade4} />
    </div>
  );
};

export default Kultur;
