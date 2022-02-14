import { GetStaticPaths } from 'next';
import { offices } from 'src/office-selector';

export { default } from 'src/jobs';
export { getStaticProps } from '..';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    return {
      paths: offices?.map((office) => ({ params: { office } })) ?? [],
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: true };
  }
};
