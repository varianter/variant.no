import {
  getProjects,
  getProject,
  Project,
  getInterviewsByProject,
} from 'src/projects/utils/projectHandlers';
import { Interview } from 'src/interviews/utils/interviewHandlers';

import { GetStaticPaths, GetStaticProps } from 'next';
import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';

export { default } from 'src/projects';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = await getProjects();
    return {
      paths: paths.map((project) => ({
        params: { project: project.replace('.md', '') },
      })),
      fallback: false,
    };
  } catch (error) {
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps<
  { project: Project },
  { project: string },
  { interviews: Interview[] }
> = async (context) => {
  const fileName = `${context?.params?.project}.md`;
  const project = await getProject(fileName);
  const interviews = await getInterviewsByProject(project.name);
  for (let i = 0; i < interviews.length; i++) {
    const interview = interviews[i];
    const variant = await getContactsByEmails([interview.variantEmail]);
    interview.image =
      variant[0]?.imageUrl || '/interviews/placeholder_blob.png';
  }
  return {
    props: { project: { ...project }, interviews: interviews },
    revalidate: 60 * 60,
  };
};
