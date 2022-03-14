import { GetStaticProps } from 'next';
import { CaseJSON } from 'src/case/Case';
import { CaseList } from 'src/case/cases';
import {
  getHiglightedItems,
  HighlightedItemsLists
} from 'src/rss/service';
import { FeedInput } from 'src/rss/rss';
import { EmployeeItem } from 'src/employees/types';
import { getRandomEmployee } from 'src/employees/utils/getEmployeesList';

export { default } from 'src/index';

function shuffle<T>(array: Array<T>): Array<T> {
  return [...array].sort(() => Math.random() - 0.5);
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

export const getStaticProps: GetStaticProps<{
  randomEmployee: EmployeeItem;
  randomCases: CaseJSON[];
  feeds: HighlightedItemsLists;
}> = async () => {
  const randomEmployee = await getRandomEmployee();
  if (randomEmployee) {
    const randomCases = shuffle(CaseList).slice(0, 3);

    const feeds = await getHiglightedItems(feedsList);

    return {
      props: { randomEmployee, randomCases, feeds },
      revalidate: 7 * 24 * 60 * 60,
    };
  }
  // Trigger fallback on previous version
  throw new Error();
};
