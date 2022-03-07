import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import { getFileListingData } from 'src/jobs/utils/getListings';

export { default } from 'src/bergen';

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData('bergen');
    const employees = await getContactsByEmails([
      'ah@variant.no',
      'andreas@variant.no',
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
