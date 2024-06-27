import { useEffect, useState } from 'react';
import style from './clock.module.css';

const Clock = () => {
  const [timeUntilStartskudd, setTimeUntilStartskudd] =
    useState<ClockObject>(calculateTime());

  function calculateTime(): ClockObject {
    const startskuddDate = new Date('2024-08-04T13:00:00.00+02:00');
    const timeNow = new Date();
    const diffMs = startskuddDate.getTime() - timeNow.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHrs = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);
    return {
      milliseconds: diffMs,
      days: diffDays,
      hours: diffHrs,
      minutes: diffMins,
      seconds: diffSecs,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilStartskudd(calculateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.clock}>
      {timeUntilStartskudd.milliseconds <= 0 ? (
        <h3>Startskudd har startet! (og er helt RÅtt! 🎉)</h3>
      ) : (
        <div className={style.clock__time}>
          <div>
            <p>{timeUntilStartskudd.days}</p>
            <p>dager</p>
          </div>
          <div>
            <p>{timeUntilStartskudd.hours}</p>
            <p>timer</p>
          </div>
          <div>
            <p>{timeUntilStartskudd.minutes}</p>
            <p>minutter</p>
          </div>
          <div>
            <p>{timeUntilStartskudd.seconds}</p>
            <p>sekunder</p>
          </div>
        </div>
      )}
      {timeUntilStartskudd.milliseconds > 0 ?? <p>igjen!</p>}
    </div>
  );
};

export default Clock;

type ClockObject = {
  milliseconds: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
