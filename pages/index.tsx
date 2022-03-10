import { GetStaticProps } from 'next';
import { handleImages } from 'src/utils/imageHandler';
import { Employee, massageEmployee } from 'src/employees';
import { getEmployeesUrl } from 'src/utils/api/getEmployees';
import { CaseJSON } from 'src/case/Case';
import { CaseList } from 'src/case/cases';
import { createFeedList, getHiglightedItems } from 'src/rss/service';
import { FeedInput } from 'src/rss/rss';

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
  randomEmployee: Employee;
  randomCases: CaseJSON[];
}> = async () => {
  const request = await fetch(getEmployeesUrl);
  
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employee =
      employeesJSON[Math.floor(Math.random() * employeesJSON.length)];
    const imageSlug = await handleImages(employee);
    const randomEmployee = { ...massageEmployee(employee), imageSlug };

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
