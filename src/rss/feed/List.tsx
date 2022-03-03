import Blog from 'src/rss/feed/Blog';
import Podcast from 'src/rss/feed/Podcast';
import YouTube from 'src/rss/feed/YouTube';

const dateLocaleString = (date?: string) => {
  return date
    ? new Date(date).toLocaleDateString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';
};

export default function List({ items }) {
  return items.map((item) => {
    const publishedDate = dateLocaleString(item.isoDate);
    switch (item.type) {
      case 'youtube':
        return (
          <YouTube key={item.title} item={item} publishedDate={publishedDate} />
        );
      case 'podcast':
        return (
          <Podcast key={item.title} item={item} publishedDate={publishedDate} />
        );
      case 'blog':
        return (
          <Blog key={item.title} item={item} publishedDate={publishedDate} />
        );
    }
  });
}
