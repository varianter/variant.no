import { getFileListingData } from 'src/jobs/utils/getListings';

export { default } from 'src/bergen';

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData();
    // .filter(
    //   (i) => i.location == 'trondheim',
    // );

    return {
      props: { listings },
      revalidate: 60 * 60,
    };
  } catch (e) {
    return {
      props: { listings: [] },
      revalidate: 60 * 60,
    };
  }
};
