import { getListings, getListing, Listing } from 'src/jobs/utils/getListings';
import { GetStaticPaths, GetStaticProps } from 'next';
import { EmployeeItem } from 'src/employees/types';
import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';

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
  { listing: Listing & { contacts: EmployeeItem[] } },
  { listing: string }
> = async (context) => {
  // This will never be empty as that path is caught by 'index.tsx' file
  const fileName = `${context?.params?.listing}.md`;
  const listing = await getListing(fileName);
  const contactEmails = listing.contact_emails?.split(',').map((e) => e.trim());
  let contacts: EmployeeItem[] = [];
  if (contactEmails?.length) {
    contacts = await getContactsByEmails(contactEmails);
  }
  return {
    props: { listing: { ...listing, contacts } },
    revalidate: 60 * 60,
  };
};
