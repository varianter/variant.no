
import { parse } from 'node-html-parser';
import Image from 'next/image';

import { BlogItem } from '../index';
import style from './feed.module.css';


/* const getIntroFromEncodedHtml = (encodedHtml: string) => {
  const article = parse(encodedHtml);
  const snippet = article.querySelector('p')?.textContent || '';
  const img = article.querySelector('img')?.getAttribute('src');
  return { snippet, img };
}  */

const loader = ({ src, width }: {src: string, width: number}) => {
  return `${src}?w=${width}&h=${width}`;
};

export default function Blog({
  item,
  publishedDate,
}: {
  item: BlogItem;
  publishedDate: string;
}) {
  //const {img, snippet} = getIntroFromEncodedHtml(item['content:encoded']);

  return (
    <div className={style.card}>
      <div className={style.media}>
        {item.imageCoverUrl && (
           <Image
            loader={loader}
            className={style.cover}
            src={item.imageCoverUrl}
            width={500}
            height={500}
            alt=""
            layout="intrinsic"
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
          <h4 className={style.title}>{item.title}</h4>
        </a>
        <div className={style.published}>
          Skrevet av <span className={style.author}>{item.creator}</span>,{' '}
          {publishedDate}
        </div>
        <p className={style.summary}>
          {item.description} <a href={item.url}>Les hele artikeln</a>
        </p>
      </div>
    </div>
  );
}
