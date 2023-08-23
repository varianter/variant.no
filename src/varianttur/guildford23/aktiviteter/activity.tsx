import style from './aktiviteter.module.css';
import LinkIcon from '../components/common/linkIcon';
import { ActivityModel } from './activities';

const Activity = ({activity, imageFirst} : {activity: ActivityModel, imageFirst: boolean}) => {
  return (
    <div className={imageFirst ? style.activityContainer : style.reverseActivityContainer}>
      <img src={activity.imageUrl} alt={activity.title} />
      <div>
        <a href={activity.link} className={style.activityLink} target='_blank'>
          <h3>{activity.title}</h3>
          <LinkIcon />
        </a>
        {activity.info.map((infoLine, index) => <p key={index}>{infoLine}</p>)}
      </div>
    </div>
  );
};

export default Activity;