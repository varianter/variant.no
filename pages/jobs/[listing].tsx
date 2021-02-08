import { getListings, getListing, Listing } from 'src/jobs/utils/getListings';
import { GetStaticPaths, GetStaticProps } from 'next';

export { default } from 'src/jobs/listing/listing';

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
  { listing: Listing },
  { listing: string }
> = async (context) => {
  // This will never be empty as that path is caught by 'index.tsx' file
  const fileName = `${context?.params?.listing}.md`;
  const listing = await getListing(fileName);
  return { props: { listing }, revalidate: 24 * 60 * 60 };
};
