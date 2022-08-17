import { BaseBlob } from '@variant/components/lib/blob';
import { and } from 'src/utils/css';
import { YoutubeVideoItem } from '../index';
import style from './feed.module.css';
import { truncateOnSpace } from './utils';

export default function YouTube({ item }: { item: YoutubeVideoItem }) {
  return (
    <div className={and(style.card, style['card--youtube'])}>
      <figure className={style.media}>
        <BaseBlob
          height={200}
          width={200}
          randomness={2}
          imageProps={{
            src: '/logo-512.png',
            alt: '',
            className: style.cover,
          }}
        />
      </figure>
      <div className={style.text}>
        <a
          key={item.url}
          className={style.link}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={style.card__title__container}>
            <h3 className={style.title}>{item.title} </h3>
            <span className={`${style.category} ${style['category--video']}`}>
              Video
            </span>
          </div>
        </a>
        <div className={style.published}>Publisert {item.publishDate}</div>
        <p className={style.summary}>
          {truncateOnSpace(item.description, 180)}
        </p>
      </div>
    </div>
  );
}
