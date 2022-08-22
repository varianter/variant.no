import { promises as fs } from 'fs';
import matter from 'gray-matter';
import {
  InterviewMetadata,
  Interview,
} from 'src/interviews/utils/interviewHandlers';
import path from 'path';

export const projects = ['svv'] as const;
export type Project = typeof projects[number];

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

const createInterviewObject = async (filename: string): Promise<Interview> => {
  const file = await fs.readFile(
    path.join(process.cwd(), 'src/interviews/pages/', filename),
  );
  const matterFile = matter(file);
  const matterData = matterFile.data as InterviewMetadata;
  return {
    ...matterData,
    name: filename.replace('.md', ''),
    content: matterFile.content,
  } as Interview;
};

export const getInterviewsByProject = async (
  projectName: Project,
): Promise<Interview[]> => {
  let files = await fs.readdir(
    path.join(process.cwd(), `src/interviews/pages/`),
  );
  files = files.filter((a) => a.endsWith('.md'));
  files = files.filter((a) => a.includes(projectName));

  const unresolvedPromises = files.map((filename) =>
    createInterviewObject(filename),
  );
  const interviews = await Promise.all(unresolvedPromises);
  return interviews;
};
