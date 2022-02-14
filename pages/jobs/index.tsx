import { GetStaticProps } from 'next';
import { getFileListingData, Listing } from 'src/jobs/utils/getListings';
import {
  Office,
  stringToDepartment as stringToOffice,
} from 'src/office-selector';

export { default } from 'src/jobs';

export const getStaticProps: GetStaticProps<{
  listings: Listing[];
  office?: Office;
}> = async (context) => {
  const office = stringToOffice(String(context.params?.office));
  const listings = await getFileListingData(office);
  return {
    props: office ? { listings, office } : { listings },
    revalidate: 60 * 60,
  };
};
