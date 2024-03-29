import Parser, { Item } from 'rss-parser';

export type FeedType = 'youtube' | 'blog' | 'podcast';

export type FeedInput = {
  title?: string;
  url: string;
  type: FeedType;
};

export type FeedResult<T = Item> = {
  [key: string]: any;
} & Parser.Output<T>;

export type YoutubeFeedItem = Item & {
  type: FeedType;
  id?: string;
  'media:group'?: {
    'media:description': string[];
  };
};

export type PodcastFeedItem = Item & {
  type: FeedType;
  itunes?: {
    image?: string;
    author?: string;
    summary?: string;
    categories?: string[];
    keywords?: string[];
    duration?: string;
  };
};

export type BlogFeedItem = Item & {
  type: FeedType;
  creator?: string;
  'content:encoded'?: string;
};

export type FeedItem = YoutubeFeedItem | BlogFeedItem | PodcastFeedItem;

export async function getFeed({
  url,
  type,
}: FeedInput): Promise<{ type: FeedType; items: FeedItem[] }> {
  const parser = new Parser({
    customFields: {
      item: ['media:group'],
    },
  });
  const result = await parser.parseURL(url);
  const { items } = result;

  return {
    type,
    items: items.map((i) => ({
      type,
      ...i,
    })),
  };
}
