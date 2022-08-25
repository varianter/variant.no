import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Office } from 'src/office-selector';

export const getListings = async () => {
  const files = await fs.readdir(path.join(process.cwd(), '/src/jobs/pages'));
  return files.filter((a) => a.endsWith('.md'));
};

export const getListing = async (
  fileName: string,
  metadataListInput?: Offer[],
  department?: Office,
): Promise<Listing> => {
  const metadataList =
    metadataListInput ?? (await getValidityStatuses(department));
  const file = await fs.readFile(
    path.join(process.cwd(), 'src/jobs/pages', fileName),
  );
  const matterFile = matter(file);

  const matterData = matterFile.data as ListingMetadata;
  const metadata = findStatus(metadataList, matterData.slug);

  return {
    ...matterData,
    ...metadata,
    name: fileName.replace('.md', ''),
    content: matterFile.content,
  } as Listing;
};

type ListingMetadata = {
  title: string;
  h1_title: string;
  slug: string;
  contact_emails?: string;
  meta_title?: string;
  meta_description?: string;
  meta_image?: string;
};

export type Listing = {
  id: number;
  name: string;
  content: string;
} & ListingMetadata &
  Offer;
export async function getFileListingData(
  department?: Office,
): Promise<Listing[]> {
  const files = await getListings();
  const metadataList = await getValidityStatuses(department);
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
async function getValidityStatuses(department?: Office): Promise<Offer[]> {
  let url = department
    ? `${API_URL}?department=${officeToDepartment(department)}`
    : API_URL;
  const result = await fetch(url);
  if (!result.ok) {
    throw new Error('Could not fetch data from Recruitee');
  }
  const data = (await result.json()) as OfferResult;

  if (!data.offers) {
    throw new Error('Could not fetch data from Recruitee');
  }

  for (let offer of data.offers) {
    if (!offer.careers_apply_url) {
      throw new Error('Could not fetch data from Recruitee');
    }
  }
  return data.offers;
}

// Loose coupling between internal types and departments in Recruitee
function officeToDepartment(department: Office) {
  switch (department) {
    case 'bergen':
      return 'Bergen';
    case 'oslo':
      return 'Oslo';
    case 'trondheim':
      return 'Trondheim';
  }
}

function findStatus(offers: Offer[], slug: string): Offer | undefined {
  return offers.find((i) => i.slug === slug);
}
