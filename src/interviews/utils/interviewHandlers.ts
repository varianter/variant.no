import { promises as fs } from 'fs';
import matter from 'gray-matter';

import path from 'path';

export type InterviewMetadata = {
  meta_title: string;
  meta_description: string;
  project: string;
  projectSlug: string;
  variant: string;
  location: string[];
  durationFrom: string;
  durationTill: string;
  image: string;
  imageAltText: string;
  variantEmail: string;
  variantTitle: string;
  quote: string;
};

export type Interview = {
  name: string;
  content: string;
} & InterviewMetadata;

export const getInterviews = async () => {
  const files = await fs.readdir(
    path.join(process.cwd(), '/src/interviews/pages'),
  );
  return files.filter((a) => a.endsWith('.md'));
};

export const getInterview = async (filename: string): Promise<Interview> => {
  const file = await fs.readFile(
    path.join(process.cwd(), 'src/interviews/pages', filename),
  );
  const matterFile = matter(file);
  const locations = matterFile.data.location.split(',');
  const matterData = { ...(matterFile.data as InterviewMetadata) };
  matterData.location = locations;
  return {
    ...matterData,
    name: filename.replace('.md', ''),
    content: matterFile.content,
  } as Interview;
};
