import {
  getInterviewFileNames,
  getInterviewObject,
  Interview,
} from 'src/kunde/utils/customerUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';

export { default } from 'src/kunde/interviews';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // TODO: Fix pls
    const paths = await getInterviewFileNames();
    return {
      paths: paths.map((interview) => ({
        params: {
          oppdrag: interview.split('/')[0],
          slug: interview.split('/')[1].replace('.md', ''),
        },
      })),
      fallback: false,
    };
  } catch (error) {
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps<
  { interview: Interview; oppdrag: string | undefined },
  { oppdrag: string; slug: string }
> = async (context) => {
  const fileName = `${context?.params?.oppdrag}/${context?.params?.slug}.md`;
  const interview = await getInterviewObject(fileName);
  const variant = await getContactsByEmails([interview.variantEmail]);
  interview.image = variant[0]?.imageUrl || '/interviews/placeholder_blob.png';
  return {
    props: { interview: { ...interview }, oppdrag: context?.params?.oppdrag },
    revalidate: 60 * 60,
  };
};
