import Layout from 'src/layout';
import { getFeed, FeedResult, FeedInput, FeedItem } from '../../tools/rss';
import Blog from './Blog';
import style from './feed.module.css';
import Podcast from './Podcast';
import YouTube from './YouTube';



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
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCMBx54cKNj8i9R51IE4bfCg',
    type: 'youtube',
  },
];

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
          const publishedDate = item.isoDate
            ? new Date(item.isoDate).toLocaleDateString('nb-NO')
            : '';

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
        {/* {feeds.map(({ items, type }) =>
          items.map((item) => {
            const publishedDate = item.isoDate
              ? new Date(item.isoDate).toLocaleDateString('nb-NO')
              : '';
            return (
              <div className={style.card} key={item.title}>
                {item.id ? (
                  <img
                    src={`https://img.youtube.com/vi/${
                      item.id.split(':').reverse()[0]
                    }/0.jpg`}
                  />
                ) : (
                  ''
                )}

                <a
                  key={item.link}
                  className="rss-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{item.title}</h4>
                </a>
                <div>
                  Skrevet av {item.creator}, {publishedDate}
                </div>
              </div>
            );
          }),
        )} */}
      </div>
    </Layout>
  );
}


export async function getStaticProps() {
  const feeds = await Promise.all(feedsList.map((feed) => getFeed(feed)));
  //const feedsWithType = feeds.map( ({items, type}) => items.map(item => ({...item, type})) )
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

