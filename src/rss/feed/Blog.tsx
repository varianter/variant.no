import { BaseBlob } from '@variant/components/lib/blob';

// import Image from 'next/image';
import { and } from 'src/utils/css';

import { BlogItem } from '../index';
import style from './feed.module.css';

// const loader = ({ src, width }: { src: string; width: number }) => {
//   return `${src}?w=${width}&h=${width}`;
// };

export default function Blog({ item }: { item: BlogItem }) {
  return (
    <div className={and(style.card, style['card--blog'])}>
      <div className={style.media}>
        {item.imageCoverUrl && (
          // TODO: Remove the version we end up deciding against
          /*<Image
            loader={loader}
            className={style.cover}
            src={item.imageCoverUrl}
            width={500}
            height={500}
            alt=""
            layout="intrinsic"
          />*/
          <BaseBlob
            height={200}
            width={200}
            imageProps={{
              src: item.imageCoverUrl,
              alt: '',
              className: style.cover,
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
        <p className={style.summary}>{item.description}</p>
        <div className={style.card__link}>
          <a href={item.url}>Les artikkel</a>
          <img src="/images/arrow.svg" alt="Pil mot høyre" />
        </div>
      </div>
    </div>
  );
}
