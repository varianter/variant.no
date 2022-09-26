import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import { getFileListingData } from 'src/jobs/utils/getListings';

export { default } from 'src/stockholm';

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData('stockholm');
    const employees = await getContactsByEmails([
      'oms@variant.no',
      'ah@variant.no',
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
