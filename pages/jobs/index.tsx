import { getFileListingData } from 'src/jobs/utils/getLisings';

export { default } from 'src/jobs';

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData();
    return {
      props: { listings },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        listings: [],
      },
    };
  }
};
