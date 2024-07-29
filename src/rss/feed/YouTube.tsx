import { BaseBlob } from '@variant/components/lib/blob';
import { and } from 'src/utils/css';
import { YoutubeVideoItem } from '../index';
import style from './feed.module.css';
import { truncateOnSpace } from './utils';

export default function YouTube({ item }: { item: YoutubeVideoItem }) {
  return (
    <a
      className={and(style.card, style['card--youtube'])}
      href={item.url}
      target="_blank"
    >
      <figure className={style.media}>
        <BaseBlob
          height={200}
          width={200}
          randomness={2}
          imageProps={{
            src: '/logo-512.png',
            alt: '',
            className: style.cover,
            loading: 'lazy',
            decoding: 'async',
          }}
        />
      </figure>
      <div className={style.text}>
        <div className={style.link}>
          <div className={style.card__title__container}>
            <h3 className={style.title}>{item.title} </h3>
            <span className={`${style.category} ${style['category--video']}`}>
              Video
            </span>
          </div>
        </div>
        <div className={style.published}>Publisert {item.publishDate}</div>
        <p className={style.summary}>
          {truncateOnSpace(item.description, 180)}
        </p>
        <div className={style.card__link}>
          Se video
          <img
            src="/images/arrow.svg"
            alt="Pil mot høyre"
            loading="lazy"
            decoding="async"
            aria-hidden
          />
        </div>
      </div>
    </a>
  );
}
