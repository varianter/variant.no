import style from './tips.module.css';
import TipsBlob from './tipsBlob';
import BackArrowIcon from '../components/common/backArrowIcon';
import { tips } from './tips';
import Tip from './tip';
import Footer from '../components/footer/footer';

export default function Tips() {
  return (
    <div className={style.container}>
      <div id='tips' className={style.topContainer}>
        <div className={style.blobContainer}>
          <TipsBlob />
        </div>
        <a href='/varianttur/guildford23' className={style.backLink}>
          <BackArrowIcon />
          <span>Tilbake</span>
        </a>
        <div className={style.headerContainer}>
          <h2>Lørdagstips</h2>
          <p>Noen tips til hva du eller dere kan bruke fritiden på 🧘 🛍️ 🎨 🚣</p>
        </div>
      </div>
      {tips.map((tip, index) => <Tip tip={tip} imageFirst={index % 2 !== 0} />)}
      <Footer topHref='#tips' isPrimary={false} />
    </div>
  );
};