import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type InterviewMetadata = {
  meta_title: string;
  meta_description: string;
  project: string;
  variant: string;
  location: string[];
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

export const assignments = ['svv', 'sikt'] as const;
export type Assignment = typeof assignments[number];

const interviewsDirectory = path.join(
  process.cwd(),
  '/src/kunde/interviews/pages',
);

export const getInterviewFileNames = async () => {
  let files: string[] = [];

  for (let assignment of assignments) {
    const assignmentFiles = await getInterviewFileNamesByAssigment(assignment);
    files = [...files, ...assignmentFiles];
  }

  return files;
};

export const getInterviewFileNamesByAssigment = async (
  assignmentName: string,
) => {
  let files = await fs.readdir(`${interviewsDirectory}/${assignmentName}`);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      return `${assignmentName}/${f}`;
    });
};

export const getInterviewsByAssignment = async (
  assignmentName: Assignment,
): Promise<Interview[]> => {
  const files = await getInterviewFileNamesByAssigment(assignmentName);

  const unresolvedPromises = files.map((filename) =>
    getInterviewObject(filename),
  );

  return Promise.all(unresolvedPromises)
    .then((interviews) => {
      return interviews;
    })
    .catch((e) => {
      console.error(e);
      return [];
    });
};

const getMatterFile = async (filename: string) => {
  const file = await fs.readFile(path.join(interviewsDirectory, filename));
  return matter(file);
};

export const getInterviewObject = async (
  filename: string,
): Promise<Interview> => {
  const matterFile = await getMatterFile(filename);
  const matterData = matterFile.data as InterviewMetadata;
  return {
    ...matterData,
    location: matterFile.data.location.split(','),
    name: filename.replace('.md', ''),
    content: matterFile.content,
  } as Interview;
};
