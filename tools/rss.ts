import Parser, {Item} from "rss-parser";

export type FeedType = 'blog' | 'podcast' | 'youtube';

export type FeedInput = {
  title: string;
  url: string;
  type: FeedType;
}

export type FeedResult<T = Item> = {
    [key: string]: any;
} & Parser.Output<T>;

type Enclosure = {
  url: string;
  length?: string;
  type?: string;
}

type ParentFeedItem = {
  title?: string;
  link?: string;
  isoDate?: string;
}

export type YoutubeFeedItem = ParentFeedItem & {
  type: 'youtube';
  id?: string;
};

export type PodcastFeedItem = ParentFeedItem & {
  type: 'podcast';
  enclosure?: Enclosure;
  itunes?: {
      image?: string;
      author?: string;
      summary?: string;
      categories?: string[];
      keywords?: string[];
    };
};

export type BlogFeedItem = ParentFeedItem & {
  type: 'blog';
  creator?: string;
};

export type FeedItem = YoutubeFeedItem | BlogFeedItem | PodcastFeedItem

export async function getFeed<T = Item>({
  url,
  type,
}: FeedInput): Promise<{ type: FeedType; items: FeedItem[] }> {
  const parser = new Parser<{ [key: string]: any }, T>();
  let result = await parser.parseURL(url);
  const { items, ...feed } = result;
  
  return { type, items: items.map((i) => ({ type, ...i })) };
}