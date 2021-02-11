import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getListings = async () => {
  const files = await fs.readdir(path.join(process.cwd(), '/src/jobs/pages'));
  return files.filter((a) => a.endsWith('.md'));
};

export const getListing = async (
  fileName: string,
  metadataListInput?: Offer[],
): Promise<Listing> => {
  const metadataList = metadataListInput ?? (await getValidityStatuses());
  const file = await fs.readFile(
    path.join(process.cwd(), 'src/jobs/pages', fileName),
  );
  const matterFile = matter(file);

  const matterData = matterFile.data as Listing;
  const metadata = findStatus(metadataList, matterData.slug);

  return {
    ...matterData,
    ...metadata,
    name: fileName.replace('.md', ''),
    content: matterFile.content,
  } as Listing;
};

export type Listing = {
  id: number;
  title: string;
  h1_title: string;
  name: string;
  content: string;
} & Offer;
export async function getFileListingData(): Promise<Listing[]> {
  const files = await getListings();
  const metadataList = await getValidityStatuses();
  const listings = await Promise.all(
    files.map(
      (fileName): Promise<Listing> => getListing(fileName, metadataList),
    ),
  );
  return listings
    .filter((a) => a.status === 'published')
    .sort((a, b) => Number(b.position ?? 0) - Number(a.position ?? 0));
}

type Offer = {
  status: string;
  slug: string;
  careers_apply_url: string;
  id: number;
  position: number;
  location: string;
  company_name: string;
};

type OfferResult = {
  offers: Array<Offer>;
};
const API_URL = 'https://variantas.recruitee.com/api/offers/';
async function getValidityStatuses(): Promise<Offer[]> {
  const result = await fetch(API_URL);
  if (!result.ok) {
    throw new Error('Could not fetch data from Recruitee');
  }
  const data = (await result.json()) as OfferResult;
  if (!data.offers) {
    return [];
  }
  return !data.offers ? [] : data.offers;
}

function findStatus(offers: Offer[], slug: string): Offer | undefined {
  return offers.find((i) => i.slug === slug);
}
