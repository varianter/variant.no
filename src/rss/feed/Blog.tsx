import { BaseBlob } from '@variant/components/lib/blob';
import { and } from 'src/utils/css';
import { BlogItem } from '../index';
import style from './feed.module.css';
import { truncateOnSpace } from './utils';

export default function Blog({ item }: { item: BlogItem }) {
  return (
    <a
      className={and(style.card, style['card--blog'])}
      href={item.url}
      target="_blank"
    >
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
        <div className={style.link}>
          <div className={style.card__title__container}>
            <h3 className={style.title}>{item.title} </h3>
            <span className={`${style.category} ${style['category--blog']}`}>
              Blogg
            </span>
          </div>
        </div>
        <div className={style.published}>
          Skrevet av {item.creator}, {item.publishDate}
        </div>
        <p className={style.summary}>
          {truncateOnSpace(item.description, 180)}
        </p>
        <div className={style.card__link}>
          Les artikkel
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
