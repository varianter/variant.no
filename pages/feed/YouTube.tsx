import { YoutubeFeedItem } from '../../tools/rss';
import style from './feed.module.css';


// We're not getting an image from the RSS feed
// Using the id we can grab the image directly
// The tube doth provide.
const getFullsizeThumbnailFromYouTube = (url: string) => {
  if(!url) return;

  const id = new URL(url).searchParams.get('v');
  return <img className={style.thumbnail__image} src={`https://img.youtube.com/vi/${id}/0.jpg`}/>
}
export default function YouTube({
  item,
  publishedDate,
}: {
  item: YoutubeFeedItem;
  publishedDate: string;
}) {
  const thumbnail = getFullsizeThumbnailFromYouTube(item.link); 

  return (
    <div className={style.card}>
      <figure className={style.media}>
        <div className={style.thumbnail}>{thumbnail}</div>
      </figure>
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
          Publisert {publishedDate}
        </div>
      </div>
    </div>
  );
}