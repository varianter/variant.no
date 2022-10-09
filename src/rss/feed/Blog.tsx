import { BaseBlob } from '@variant/components/lib/blob';
import { and } from 'src/utils/css';
import { BlogItem } from '../index';
import style from './feed.module.css';
import { truncateOnSpace } from './utils';

export default function Blog({ item }: { item: BlogItem }) {
  return (
    <div className={and(style.card, style['card--blog'])}>
      <div className={style.media}>
        {item.imageCoverUrl && (
          <BaseBlob
            height={200}
            width={200}
            randomness={2}
            imageProps={{
              src: item.imageCoverUrl,
              alt: '',
              className: style.cover,
              loading: 'lazy',
              decoding: 'async',
            }}
          />
        )}
      </div>
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
            <span className={`${style.category} ${style['category--blog']}`}>
              Blogg
            </span>
          </div>
        </a>
        <div className={style.published}>
          Skrevet av {item.creator}, {item.publishDate}
        </div>
        <p className={style.summary}>
          {truncateOnSpace(item.description, 180)}
        </p>
        <div className={style.card__link}>
          <a href={item.url}>Les artikkel</a>
          <img
            src="/images/arrow.svg"
            alt="Pil mot høyre"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
