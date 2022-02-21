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
  return (
    <div className={`${style.card} ${style.podcast}`}>
      <div className={style.media}>
        {item.enclosure && <Player url={item.enclosure?.url} />}
      </div>
      <div className={style.text}>
        <a
          key={item.link}
          className="rss-link"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>{item.title}</h4>
        </a>
        <p>{item.itunes?.summary}</p>
        <div className={style.published}>{publishedDate}</div>
      </div>
    </div>
  );
}
