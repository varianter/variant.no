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
  imageUrl: string;
};

export type Interview = {
  name: string;
  content: string;
} & InterviewMetadata;

export const assignments = ['svv', 'sikt', 'fram'] as const;
export type AssignmentName = typeof assignments[number];

export type AssignmentMetaData = {
  meta_title: string;
  meta_description: string;
  meta_customer: string;
  meta_lead: string;
  meta_locations: Array<string>;
  meta_project_text_position_left: boolean;
  meta_projects: Array<Project>;
  meta_contribution_digital_productdevelopment: string;
  meta_contribution_data_driven: string;
  meta_contribution_strategy: string;
  meta_contribution_culture_first: string;
  meta_quote: string;
};

type Project = {
  project_image: ProjectImage;
  project_title: string;
  project_text: string;
};

type ProjectImage = {
  image_src: string;
  boxProperties1: BoxProps;
  boxProperties2: BoxProps;
};

type BoxProps = {
  color: string;
  vertical: VerticalPosition;
  horizontal: HorizontalPosition;
};

type VerticalPosition = 'top' | 'topish' | 'middle' | 'bottomish' | 'bottom';
type HorizontalPosition = 'left' | 'leftish' | 'middle' | 'rightish' | 'right';

export type Assignment = {
  name: AssignmentName;
  content: string;
} & AssignmentMetaData;

const baseDirectory = path.join(process.cwd(), '/src/kunde/');
const interviewsDirectory = path.join(baseDirectory, '/interviews/pages');
const assignmentsDirectory = path.join(baseDirectory, '/assignments/pages');

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
  assignmentName: AssignmentName,
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

const getMatterFile = async (directory: string, filename: string) => {
  const file = await fs.readFile(path.join(directory, filename));
  return matter(file);
};

export const getInterviewObject = async (
  filename: string,
): Promise<Interview> => {
  const matterFile = await getMatterFile(interviewsDirectory, filename);
  const matterData = matterFile.data as InterviewMetadata;
  return {
    ...matterData,
    location: matterFile.data.location.split(','),
    name: filename.replace('.md', ''),
    content: matterFile.content,
  } as Interview;
};

export const getAssignmentObject = async (
  assignmentName: AssignmentName,
): Promise<Assignment> => {
  const matterFile = await getMatterFile(
    assignmentsDirectory,
    assignmentName + '.md',
  );
  const matterData = matterFile.data as AssignmentMetaData;
  return {
    ...matterData,
    name: assignmentName,
    content: matterFile.content,
  };
};
