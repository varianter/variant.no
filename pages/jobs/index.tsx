import { getFileListingData } from 'src/jobs/utils/getListings';

export { default } from 'src/jobs';

export const getStaticProps = async () => {
  const listings = await getFileListingData();
  return {
    props: { listings },
    revalidate: 60 * 60,
  };
};
