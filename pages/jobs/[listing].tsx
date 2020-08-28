import { getListings, getMatterFile } from 'src/jobs/utils/getLisings';
import { GetStaticPaths, GetStaticProps } from 'next';

export { default } from 'src/jobs/listing/listing';

type JobListing = {
  data: { [key: string]: string };
  content: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = await getListings();
    return {
      paths: paths.map((listing) => ({
        params: { listing: listing.replace('.md', '') },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps<
  JobListing,
  { listing: string }
> = async (context) => {
  // This will never be empty as that path is caught by 'index.tsx' file
  const fileName = `${context?.params?.listing}.md`;
  const { data, content } = await getMatterFile(fileName);

  //Parse DAta
  return { props: { data, content } };
};
