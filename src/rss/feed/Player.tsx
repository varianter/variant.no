// https://gist.github.com/SgtPooki/477014cf16436384f10a68268f86255b
// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js


import React, { useState, useEffect, useRef } from 'react';
import style from './feed.module.css';

type States = 'INITIAL' | 'PAUSED' | 'PLAYING';

type Machine = {
  [key in States]: {
    next: States;
  };
};

const machine: Machine = {
  INITIAL: {
    next: 'PLAYING',
  },
  PLAYING: {
    next: 'PAUSED',
  },
  PAUSED: {
    next: 'PLAYING',
  },
};
function formatDuration(seconds: number) {
  const miliseconds = seconds * 1000;
  const date = new Date(miliseconds);
  const formatMinutes = date.getMinutes();
  const formatSeconds = date.getSeconds();

  return `${formatMinutes.toString().padStart(2, '0')}:${formatSeconds
    .toString()
    .padStart(2, '0')}`;
}
export default function AudioPlayer({
  url,
  withScrubber = true,
  children,
}: {
  url: string;
  withScrubber?: boolean;
  children?: React.ReactNode;
}) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  const [currentState, setCurrentState] = useState<States>('INITIAL');
  const [duration, setDuration] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    if (currentState === 'PLAYING') {
      audioElement.current?.play();
      startTimer();
    }

    if (currentState === 'PAUSED') {
      audioElement.current?.pause();
    }
    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [currentState]);

  useEffect(() => {
    audioElement.current?.addEventListener('loadedmetadata', (event) => {
      const {duration} = event.target as HTMLAudioElement;
      setDuration(duration);
    });
  }, []);

  const startTimer = () => {
      intervalRef.current = setInterval(() => {
        if(audioElement && audioElement.current) {
          const elapsed = (audioElement.current.currentTime / duration) * 100;
          setTrackProgress(elapsed);
        }
      }, 1000);
    
  };

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentState(machine[currentState].next);
  };

  const onScrub = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target as HTMLInputElement;
    setCurrentState('PAUSED');
    clearInterval(intervalRef.current as NodeJS.Timeout);

    if(audioElement.current){
      audioElement.current.currentTime = (duration / 100) * parseInt(value);
      setTrackProgress(parseInt(value));
    }
  };

  const onScrubEnd = (event: React.MouseEvent<HTMLInputElement>|React.KeyboardEvent<HTMLInputElement>) => {
    setCurrentState('PLAYING');
    //startTimer();
  };

  return (
    <div className={style.player}>
      <audio preload="metadata" ref={audioElement}>
        <source src={url} />
      </audio>

      <button
        onClick={buttonHandler}
        className={style.player__button}
        data-state={currentState}
      >
        <div className={style.player__play}></div>
      </button>
      <div className={style.player__content}>{children}</div>
      <div className={style.player__duration}>
        {currentState !== 'INITIAL' ? (<>
        <span>{formatDuration((duration / 100) * trackProgress)}</span>
        <span>/</span>
        </>) : ''}
        
        <span>{formatDuration(duration)}</span>
      </div>
      {withScrubber ? (
        <div className={style.player__scrubber}>
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max="100"
            className={style.player__progress}
            onChange={onScrub}
            style={{ backgroundSize: `${trackProgress}% 100%` }}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}