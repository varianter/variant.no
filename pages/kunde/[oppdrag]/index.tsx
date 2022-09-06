import { GetStaticPaths, GetStaticProps } from 'next';
import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import {
  Assignment,
  AssignmentName,
  assignments,
  getAssignmentObject,
  getInterviewsByAssignment,
  Interview,
} from 'src/kunde/utils/customerUtils';

export { default } from 'src/kunde/svv';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = assignments.map((assignment) => {
    return {
      params: {
        oppdrag: assignment,
      },
    };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  {
    assignment: Assignment;
    interviews: Interview[];
  },
  { oppdrag: AssignmentName }
> = async (context) => {
  const assignment = await getAssignmentObject(context?.params!.oppdrag);

  const interviews = await getInterviewsByAssignment(context?.params!.oppdrag);
  for (let i = 0; i < interviews.length; i++) {
    const interview = interviews[i];
    const variant = await getContactsByEmails([interview.variantEmail]);
    interview.image =
      variant[0]?.imageUrl || '/interviews/placeholder_blob.png';
  }

  return {
    props: {
      assignment: assignment,
      interviews: interviews,
    },
    revalidate: 60 * 60,
  };
};
