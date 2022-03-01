import Layout from 'src/layout';
import { getFeed, FeedResult, FeedInput, FeedItem } from '../../tools/rss';
import Blog from './Blog';
import style from './feed.module.css';
import Podcast from './Podcast';
import YouTube from './YouTube';

/* 
  ?Färger baserat på vilken typ innehåll det är
  Hämta ut först paragraf och bild
  Göra så att alla är kort
  Lägga 3 blog, 1 video och 1 podcast på förstasidan.
*/

interface FeedProps {
  feeds: FeedResult[];
  items: FeedItem[]
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
  /* {
    title: 'YouTube',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCMBx54cKNj8i9R51IE4bfCg',
    type: 'youtube',
  }, */
];

const dateLocaleString = (date?: string) => {
  return date ? new Date(date).toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : '';
}

export default function RSSFeed({ feeds, items }: FeedProps) {
  return (
    <Layout>
      <div className={style.feed}>
        <div className={style.feed__head}>
          <div className={style.card}>
            <div className={style.text}>
              <h3>Våre ytringer</h3>
              <p>
                Du har funnet vår feed! Her har vi samlet de siste vi gjort av
                bloginnlegg, podcasts og videos
              </p>
            </div>
          </div>
        </div>
        {items.map((item) => {
          const publishedDate = dateLocaleString(item.isoDate);

          switch (item.type) {
            case 'youtube':
              return (
                <YouTube
                  key={item.title}
                  item={item}
                  publishedDate={publishedDate}
                />
              );
            case 'podcast':
              return (
                <Podcast
                  key={item.title}
                  item={item}
                  publishedDate={publishedDate}
                />
              );
            case 'blog':
              return (
                <Blog
                  key={item.title}
                  item={item}
                  publishedDate={publishedDate}
                />
              );
          }
        })}
      </div>
    </Layout>
  );
}


export async function getStaticProps() {
  const feeds = await Promise.all(feedsList.map((feed) => getFeed(feed)));
  const items = feeds.flatMap(({ items }) => items).sort((a,b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
  return {
    props: {
      feeds,
      items
    },
    revalidate: 1,
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: feeds.map((feed) => ({ params: { slug: feed.slug } })),
//     fallback: false,
//   };
// }

