import Image from 'next/image';
import dynamic from 'next/dynamic';

import { PodcastFeedItem } from '../../tools/rss';
import style from './feed.module.css';

const Player = dynamic(() => import('./Player'), { ssr: false });

export default function Podcast({
  item,
  publishedDate,
}: {
  item: PodcastFeedItem;
  publishedDate: string;
}) {
  console.log(item.itunes?.image);
  return (
    <div className={`${style.card} ${style.podcast}`}>
      <div className={style.media}>
        <div className={style.podcast__cover}>
          <Image
            className={style.cover}
            src={item.itunes?.image}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className={style.text}>
        <div className={style.podcast__content}>
          {item.enclosure && (
            <Player url={item.enclosure?.url} withScrubber={true}>
              <h4 className={style.title}>{item.title}</h4>
            </Player>
          )}

          <p className={style.summary}>
            {item.itunes?.summary}{' '}
            <span style={{ opacity: 0.5 }}>— {publishedDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
