import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getListings = async () => {
  const files = await fs.readdir(path.join(process.cwd(), '/src/jobs/pages'));
  return files.filter((a) => a.endsWith('.md'));
};

export const getMatterFile = async (
  fileName: string,
): Promise<matter.GrayMatterFile<Buffer>> => {
  const file = await fs.readFile(
    path.join(process.cwd(), 'src/jobs/pages', fileName),
  );
  return matter(file);
};

type Listing = {
  title: string;
  h1_title: string;
  company: string;
  application_url: string;
  location: string;
  priority?: string;
  visible: string;
  name: string;
};
export const getFileListingData = async () => {
  const files = await getListings();
  const listings = await Promise.all(
    files.map(
      async (fileName): Promise<Listing> => {
        const matterFile = await getMatterFile(fileName);
        return {
          ...matterFile.data,
          name: fileName.replace('.md', ''),
        } as Listing;
      },
    ),
  );
  return listings
    .filter((a) => a.visible)
    .sort((a, b) => Number(b.priority ?? 0) - Number(a.priority ?? 0));
};
