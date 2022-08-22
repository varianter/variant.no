import { GetStaticProps } from 'next';
import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import { Interview } from 'src/interviews/utils/interviewHandlers';
import { getInterviewsByProject } from 'src/projects/utils/projectHandlers';

export { default } from 'src/projects/pages/svv';

export const getStaticProps: GetStaticProps<{
  interviews: Interview[];
}> = async () => {
  const interviews = await getInterviewsByProject('svv');
  for (let i = 0; i < interviews.length; i++) {
    const interview = interviews[i];
    const variant = await getContactsByEmails([interview.variantEmail]);
    interview.image =
      variant[0]?.imageUrl || '/interviews/placeholder_blob.png';
  }
  return {
    props: {
      interviews: interviews,
    },
    revalidate: 60 * 60,
  };
};
