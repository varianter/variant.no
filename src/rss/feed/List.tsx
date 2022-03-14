import type { MediaItems } from '../service';
import Blog from 'src/rss/feed/Blog';
import Podcast from 'src/rss/feed/Podcast';
import YouTube from 'src/rss/feed/YouTube';

const mediaComponentPicker = (items: MediaItems) =>
  items.map((item) => {
    switch (item.type) {
      case 'youtube':
        return <YouTube key={item.title} item={item} />;
      case 'podcast':
        return <Podcast key={item.title} item={item} />;
      case 'blog':
        return <Blog key={item.title} item={item} />;
    }
  });

export default function List({ items }: {items: MediaItems}) {
  return <>{mediaComponentPicker(items)}</>;
}
