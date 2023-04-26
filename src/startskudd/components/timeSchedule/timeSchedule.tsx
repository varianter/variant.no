import style from './timeSchedule.module.css';

type TimeScheduleProps = {
  time: string;
  activity: string;
};

const TimeSchedule = ({ time, activity }: TimeScheduleProps) => {
  return (
    <div className={style.timeSchedule}>
      <div className={style.timeSchedule_left}>
        <p>{time}</p>
      </div>
      <div className={style.timeSchedule_right}>
        <p>{activity}</p>
      </div>
    </div>
  );
};

export default TimeSchedule;
