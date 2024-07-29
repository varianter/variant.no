import style from './aktiviteter.module.css';
import ActivityBlob from './activityBlob';
import BackArrowIcon from '../components/common/backArrowIcon';
import { activities } from './activities';
import Activity from './activity';
import Footer from '../components/footer/footer';

export default function Aktiviteter() {
  return (
    <div className={style.container}>
      <div id="activities" className={style.topContainer}>
        <div className={style.blobContainer}>
          <ActivityBlob />
        </div>
        <a href="/varianttur/guildford23" className={style.backLink}>
          <BackArrowIcon />
          <span>Tilbake</span>
        </a>
        <div className={style.headerContainer}>
          <h2>Aktiviteter</h2>
          <p>
            På lørdag skal vi på aktiviteter vi meldte oss på tidligere i år 🏰
            🎢 🍷 🍸 🌆
          </p>
        </div>
      </div>
      {activities.map((activity, index) => (
        <Activity
          key={index}
          activity={activity}
          imageFirst={index % 2 !== 0}
        />
      ))}
      <Footer topHref="#activities" isPrimary={false} />
    </div>
  );
}
