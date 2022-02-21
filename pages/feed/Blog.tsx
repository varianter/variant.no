import { BlogFeedItem } from '../../tools/rss';
import style from './feed.module.css';

export default function Blog({
  item,
  publishedDate,
}: {
  item: BlogFeedItem;
  publishedDate: string;
}) {
  return (
    <div className={style.card}>
      <div className={style.text}>
        <a
          key={item.link}
          className="rss-link"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>{item.title}</h4>
        </a>
        <div className={style.published}>
          Skrevet av {item.creator}, {publishedDate}
        </div>
      </div>
      {/* {item.type} {item.title} {publishedDate}{' '} */}
    </div>
  );
}
