import {
  getInterviews,
  getInterview,
  Interview,
} from 'src/interviews/utils/interviewHandlers';
import { GetStaticPaths, GetStaticProps } from 'next';

export { default } from 'src/interviews';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = await getInterviews();
    return {
      paths: paths.map((interview) => ({
        params: { interview: interview.replace('.md', '') },
      })),
      fallback: false,
    };
  } catch (error) {
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps<
  { interview: Interview },
  { interview: string }
> = async (context) => {
  const fileName = `${context?.params?.interview}.md`;
  const interview = await getInterview(fileName);
  return {
    props: { interview: { ...interview } },
    revalidate: 60 * 60,
  };
};
