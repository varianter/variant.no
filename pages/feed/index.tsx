import Layout from 'src/layout';
import {MediaItem, chronologicalFeedList } from 'src/rss/service';
import { FeedInput } from 'src/rss/rss';
import style from './feed.module.css';

import List from 'src/rss/feed/List';

interface FeedProps {
  items: MediaItem[];
}


export default function RSSFeed({ items }: FeedProps) {
  return (
    <Layout>
      <div className={style.feed}>
        <div className={style.feed__head}>
            <div className={style.text}>
              <h3>Våre ytringer</h3>
              <p>
                Du har funnet vår feed! Her har vi samlet de siste vi gjort av
                bloginnlegg, podcasts og videos
              </p>
            </div>
        </div>
      </div>
      <List items={items}/>
    </Layout>
  );
}


const feedsList: FeedInput[] = [
  { title: 'Medium', url: 'https://blog.variant.no/feed', type: 'blog' },
  {
    title: 'Variantsnakk',
    url: 'https://feeds.transistor.fm/variantsnakk',
    type: 'podcast',
  },
  {
    title: 'Interne Podcasts',
    url: 'https://podcast.variant.no/feed.xml',
    type: 'podcast',
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCMBx54cKNj8i9R51IE4bfCg',
    type: 'youtube',
  },
];

export async function getStaticProps() {
  const items = await chronologicalFeedList(feedsList);

  return {
    props: {
      items
    },
    revalidate: 1,
  };
}
