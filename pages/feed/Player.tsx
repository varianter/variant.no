// https://gist.github.com/SgtPooki/477014cf16436384f10a68268f86255b
// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js


import React, { useState, useEffect, useRef } from 'react';
import style from './feed.module.css';

/* interface machine {
  state: string;
  transitions: {
    [key: string]: any;
  };
  dispatch: (actionName: string) => void;
} */
/* 
const machine: machine = {
  state: 'INITIAL',
  transitions: {
    INITIAL: {
      click() {
        this.state = 'PLAYING';
      },
    },
    PLAYING: {
      click() {
        this.state = 'PAUSED';
      },
    },
    PAUSED: {
      click() {
        this.state = 'PLAYING';
      },
    },
  },
  dispatch(actionName: string) {
    const action = this.transitions[this.state][actionName];
    if (action) {
      action.call(this);
    } else {
      console.log('invalid action');
    }
  },
}; */

/* const useAudio = (url: string) => {

  const [audio] = useState<HTMLAudioElement>(new Audio(url));

  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
}; */

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

export default function AudioPlayer({url}: {url: string}){
  const audioElement = useRef<HTMLAudioElement>(null);
  const [currentState, setCurrentState] = useState<States>('INITIAL');

/*   useEffect( () => {
    if (!audio.current && currentState === 'LOADING') {
      audio.current = new Audio(url);
      setCurrentState(machine[currentState].next); // PLAYING
    }
  }, [currentState, url]); */

  useEffect(() => {
    if ( currentState === 'PLAYING') {
      audioElement.current?.play();
    }

    if ( currentState === 'PAUSED') {
      audioElement.current?.pause();
    }
  }, [currentState]);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentState(machine[currentState].next);
  };

  return (
    <div className={style.player} data-state={currentState}>
      <audio preload="metadata" ref={audioElement}>
        <source src={url} />
      </audio>
      <button onClick={buttonHandler} className={style.player__button}>
        <span>{currentState}</span>
      </button>
    </div>
  );
}