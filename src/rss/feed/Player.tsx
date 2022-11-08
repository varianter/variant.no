// https://gist.github.com/SgtPooki/477014cf16436384f10a68268f86255b
// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js

import React, { useEffect, useRef, useState } from 'react';
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
  duration,
}: {
  url: string;
  withScrubber?: boolean;
  children?: React.ReactNode;
  duration: number;
}) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [currentState, setCurrentState] = useState<States>('INITIAL');
  const [previousState, setPreviousState] = useState<States>('INITIAL');
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    let intervalTimer: NodeJS.Timer | null = null;
    if (currentState === 'PLAYING') {
      audioElement.current?.play();

      intervalTimer = setInterval(() => {
        if (audioElement?.current) {
          const elapsed = (audioElement.current.currentTime / duration) * 100;
          setTrackProgress(elapsed);
        }
      }, 1000);
    }

    if (currentState === 'PAUSED') {
      audioElement.current?.pause();
    }

    return () => {
      clearInterval(intervalTimer!);
    };
  }, [currentState, duration]);

  const buttonHandler = () => {
    setCurrentState(machine[currentState].next);
    setPreviousState(machine[currentState].next);
  };

  const onScrub = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    // INFO: This is needed to avoid flickering playback when scrubbing
    // due to React firing onChange during change and not as native onChange
    // when actually done with change
    setCurrentState('PAUSED');

    if (audioElement.current) {
      audioElement.current.currentTime = (duration / 100) * parseInt(value);
      setTrackProgress(parseInt(value));
    }
  };

  const onScrubEnd = () => {
    // INFO: Reset play/pause state when scrubbing are actually done
    setCurrentState(previousState);
  };

  const formattedPosition = formatDuration((duration / 100) * trackProgress);
  const formattedDuration = formatDuration(duration);

  return (
    <div className={style.player}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio preload="none" ref={audioElement}>
        <source src={url} />
      </audio>

      <button
        onClick={buttonHandler}
        aria-label={currentState === 'PLAYING' ? "Pause" : "Play"}
        aria-pressed={currentState === 'PLAYING'}
        className={style.player__button}
        data-state={currentState}
      >
        <div className={style.player__play}></div>
      </button>
      <div className={style.player__content}>{children}</div>

      {withScrubber ? (
        <div className={style.player__scrubber}>
          <div className={style.player__duration}>
            <span>{formattedPosition}</span>
            <span>/</span>
            <span>{formattedDuration}</span>
          </div>
          <input
            type="range"
            aria-label={`Posisjon i lydsporet ${formattedPosition} av ${formattedDuration}`}
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
