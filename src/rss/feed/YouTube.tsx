import { and } from 'src/utils/css';
import { YoutubeVideoItem } from '../index';
import style from './feed.module.css';

export default function YouTube({ item }: { item: YoutubeVideoItem }) {
  return (
    <div className={and(style.card, style['card--youtube'])}>
      <figure className={style.media}>
        <a href={item.url}>
          <div className={style.thumbnail}>
            <img
              className={style.thumbnail__image}
              src={item.imageCoverUrl}
              alt=""
            />
          </div>
        </a>
      </figure>
      <div className={style.text}>
        <a
          key={item.url}
          className={style.link}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={style.title}>
            {item.title}{' '}
            <span className={`${style.category} ${style['category--video']}`}>
              Video
            </span>
          </h4>
        </a>
        <p className={style.summary}>
          {item.description}{' '}
          <span style={{ opacity: 0.5 }}>— {item.publishDate}</span>
        </p>
      </div>
    </div>
  );
}
