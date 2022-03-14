import {
  FeedItem,
  getFeed,
  BlogFeedItem,
  PodcastFeedItem,
  YoutubeFeedItem,
} from './rss';

import type { FeedInput } from './rss';

import { parse } from 'node-html-parser';



type ItemBase = {
  isoDate: string;
  publishDate: string;
  imageCoverUrl?: string;
};

export type PodcastItem = {
  type: 'podcast';
  media: {
    url: string;
  };
  description: string;
  title: string;
} & ItemBase;

export type YoutubeVideoItem = {
  type: 'youtube';
  title: string;
  description: string;
  url: string;
} & ItemBase;

export type BlogItem = {
  type: 'blog';
  title: string;
  description: string;
  url: string;
  creator: string;
} & ItemBase;

export type MediaItem = PodcastItem | YoutubeVideoItem | BlogItem;
export type MediaItems = MediaItem[];

export async function createFeedList(lists: FeedInput[]) {
  const result = await Promise.all(lists.map(getFeed));
  return result.map(({ items, type }) => ({type, items: items.map(mapDataToType)}));
}

export async function chronologicalFeedList(lists: FeedInput[]){
    const list = await createFeedList(lists);
    return list.flatMap(({items}) => items).sort(sortByDate);
}

function sortByDate(a: MediaItem, b: MediaItem) {
  return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
}

export type HighlightedItemsLists = {
  youtube: MediaItems;
  blog: MediaItems;
  podcast: MediaItems;
};

export async function getHiglightedItems(
  lists: FeedInput[],
): Promise<HighlightedItemsLists> {
  const list = await createFeedList(lists);

  const youtube = list
    .filter(({ type }) => type === 'youtube')
    .flatMap(({ items }) => [...items])
    .sort(sortByDate)
    .slice(0, 1);

  const blog = list
    .filter(({ type }) => type === 'blog')
    .flatMap(({ items }) => [...items])
    .sort(sortByDate)
    .slice(0, 3);

  const podcast = list
    .filter(({ type }) => type === 'podcast')
    .flatMap(({ items }) => [...items])
    .sort(sortByDate)
    .slice(0, 1);


  return { youtube, blog, podcast };
}

function mapDataToType(data: FeedItem) {
  switch (data.type) {
    case 'blog':
      return mapFeedToBlog(data);
    case 'youtube':
      return mapFeedToYoutube(data);
    case 'podcast':
      return mapFeedToPodcast(data);
  }
}

function mapFeedToBlog(item: BlogFeedItem): BlogItem {
  return {
    type: 'blog',
    title: item.title || '',
    url: item.link || '',
    isoDate: item.isoDate || '',
    publishDate: dateLocaleString(item.isoDate),
    imageCoverUrl:
      item['content:encoded'] && parseAndGetFirstImage(item['content:encoded']),
    description: item['content:encoded'] && parseAndGetFirstParagraph(item['content:encoded']) || '',
    creator: item.creator || '',
  };
}

function mapFeedToPodcast(item: PodcastFeedItem): PodcastItem {
  return {
    type: 'podcast',
    title: item.title || '',
    isoDate: item.isoDate || '',
    publishDate: dateLocaleString(item.isoDate),
    imageCoverUrl: item.itunes?.image || '',
    media: {
      url: item.enclosure?.url || '',
    },
    description: item.itunes?.summary || '',
  };
}

function mapFeedToYoutube(item: YoutubeFeedItem): YoutubeVideoItem {
  return {
    type: 'youtube',
    title: item.title || '',
    isoDate: item.isoDate || '',
    url: item.link || '',
    description: '',
    imageCoverUrl: item.link && getFullsizeThumbnailFromYouTube(item.link),
    publishDate: dateLocaleString(item.isoDate),
  };
}

const dateLocaleString = (date?: string) => {
  return date
    ? new Date(date).toLocaleDateString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';
};

const parseAndGetFirstParagraph = (encodedHtml: string) => {
  const article = parse(encodedHtml);
  const firstParagraph = article.querySelector('p')?.textContent || '';
  return firstParagraph || '';
};

const parseAndGetFirstImage = (encodedHtml: string) => {
  const article = parse(encodedHtml);
  const firstImage = article.querySelector('img')?.getAttribute('src');
  return firstImage || '';
};

const getFullsizeThumbnailFromYouTube = (url: string) => {
  if (!url) return;
  const id = new URL(url).searchParams.get('v');
  return `https://img.youtube.com/vi/${id}/0.jpg`;
};
