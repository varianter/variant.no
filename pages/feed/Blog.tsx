
import { parse } from 'node-html-parser';
import Image from 'next/image';

import { BlogFeedItem } from '../../tools/rss';
import style from './feed.module.css';


const getIntroFromEncodedHtml = (encodedHtml: string) => {
  const article = parse(encodedHtml);
  const snippet = article.querySelector('p')?.textContent || '';
  const img = article.querySelector('img')?.getAttribute('src');
  return { snippet, img };
} 

const loader = ({ src, width }: {src: string, width: number}) => {
  return `${src}?w=${width}&h=${width}`;
};

export default function Blog({
  item,
  publishedDate,
}: {
  item: BlogFeedItem;
  publishedDate: string;
}) {
  const {img, snippet} = getIntroFromEncodedHtml(item['content:encoded']);

  return (
    <div className={style.card}>
      <div className={style.media}>
        {img && (
          <Image
            loader={loader}
            className={style.cover}
            src={img}
            width={500}
            height={500}
            alt=""
            layout="intrinsic"
          />
        )}
      </div>
      <div className={style.text}>
        <a
          key={item.link}
          className={style.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={style.title}>{item.title}</h4>
        </a>
        <div className={style.published}>
          Skrevet av <span className={style.author}>{item.creator}</span>,{' '}
          {publishedDate}
        </div>
        <p className={style.summary}>
          {snippet} <a href="#">Les hele artikeln</a>
        </p>
      </div>
      {/* {item.type} {item.title} {publishedDate}{' '} */}
    </div>
  );
}
