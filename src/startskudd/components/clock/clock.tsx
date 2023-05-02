import { useEffect, useState } from 'react';
import style from './clock.module.css';

const Clock = () => {
  const [timeUntilStartskudd, setTimeUntilStartskudd] = useState<ClockObject>(
    calculateTime(),
  );

  function calculateTime(): ClockObject {
    const startskuddDate = new Date('August 5, 2023');
    const timeNow = new Date();
    const diffMs = startskuddDate.getTime() - timeNow.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHrs = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);
    return {
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
      <p>{timeUntilStartskudd.days} dager</p>
      <p>{timeUntilStartskudd.hours} timer</p>
      <p>{timeUntilStartskudd.minutes} minutter</p>
      <p>{timeUntilStartskudd.seconds} sekunder</p>
    </div>
  );
};

export default Clock;

type ClockObject = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
