import Image from 'next/image';
import dynamic from 'next/dynamic';

import { PodcastItem } from '../index';
import style from './feed.module.css';

const Player = dynamic(() => import('./Player'), { ssr: false });

export default function Podcast({
  item
}: {
  item: PodcastItem;
}) {

  return (
    <div className={`${style.card} ${style.podcast}`}>
      <div className={style.media}>
        <div className={style.podcast__cover}>
          <Image
            className={style.cover}
            src={item.imageCoverUrl}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className={style.text}>
        <div className={style.podcast__content}>
          <Player url={item.media.url} withScrubber={true}>
            <h4 className={style.title}>{item.title}</h4>
          </Player>

          <p className={style.summary}>
            {item.description}{' '}
            <span style={{ opacity: 0.5 }}>— {item.publishDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
