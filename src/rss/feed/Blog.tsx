import { BaseBlob } from '@variant/components/lib/blob';

import Image from 'next/image';
import { and } from 'src/utils/css';

import { BlogItem } from '../index';
import style from './feed.module.css';

const loader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}&h=${width}`;
};

export default function Blog({ item }: { item: BlogItem }) {
  return (
    <div className={and(style.card, style['card--blog'])}>
      <div className={style.media}>
        {item.imageCoverUrl && (
          // <Image
          //   loader={loader}
          //   className={style.cover}
          //   src={item.imageCoverUrl}
          //   width={500}
          //   height={500}
          //   alt=""
          //   layout="intrinsic"
          // />
          <BaseBlob
            height={500}
            width={500}
            imageProps={{ src: item.imageCoverUrl, alt: '' }}
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
          <h4 className={style.title}>
            {item.title}{' '}
            <span className={`${style.category} ${style['category--blog']}`}>
              Blogg
            </span>
          </h4>
        </a>
        <div className={style.published}>
          Skrevet av <span className={style.author}>{item.creator}</span>,{' '}
          {item.publishDate}
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
