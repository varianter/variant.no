import style from './timeSchedule.module.css';

type TimeScheduleProps = {
  time: string;
  activity: string;
  activityDescription?: string;
};

const TimeSchedule = ({
  time,
  activity,
  activityDescription,
}: TimeScheduleProps) => {
  return (
    <div className={style.timeSchedule}>
      <div className={style.timeSchedule_left}>
        <p>{time}</p>
      </div>
      <div className={style.timeSchedule_right}>
        <h5>{activity}</h5>
        <p>{activityDescription}</p>
      </div>
    </div>
  );
};

export default TimeSchedule;
