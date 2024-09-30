import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import { getFileListingData } from 'src/jobs/utils/getListings';

export { default } from 'src/stavanger';

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData('stavanger');
    const employees = await getContactsByEmails([
      'omns@variant.no',
      'ah@variant.no',
      'mb@variant.no',
      'te@variant.no',
    ]);

    return {
      props: { listings, employees },
      revalidate: 60 * 60,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { listings: [], employees: [] },
      revalidate: 60 * 60,
    };
  }
};
