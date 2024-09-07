import { BaseBlob } from '@variant/components/lib/blob';
import dynamic from 'next/dynamic';
import DOMPurify from 'isomorphic-dompurify';
import { and } from 'src/utils/css';
import { PodcastItem } from '../index';
import style from './feed.module.css';

const Player = dynamic(() => import('./Player'), { ssr: false });

export default function Podcast({ item }: { item: PodcastItem }) {
  const cleanDescription = DOMPurify.sanitize(item.description);

  return (
    <div className={and(style.card, style['card--podcast'])}>
      <div className={style.media}>
        {item.imageCoverUrl && <BaseBlob
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
        />}
      </div>
      <div className={style.text}>
        <div className={style.podcast__content}>
          <Player
            duration={item.duration}
            url={item.media.url}
            withScrubber={true}
          >
            <div className={style.card__title__container}>
              <h3 className={style.title}>{item.title} </h3>
              <span
                className={`${style.category} ${style['category--podcast']}`}
              >
                Podcast
              </span>
            </div>
          </Player>
          <div className={style.published}>Publisert {item.publishDate}</div>
          <div dangerouslySetInnerHTML={{ __html: cleanDescription }} />
        </div>
      </div>
    </div>
  );
}
