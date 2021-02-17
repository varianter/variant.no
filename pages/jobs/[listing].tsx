import { getListings, getListing, Listing } from 'src/jobs/utils/getListings';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Employee, massageEmployee } from 'src/employees';
import { getEmployeesUrl } from 'src/utils/api/getEmployees';
import { EmployeeJSON } from 'src/utils/typings/Employee';
import { handleImages } from 'src/utils/imageHandler';

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
  { listing: Listing & { contacts: Employee[] } },
  { listing: string }
> = async (context) => {
  // This will never be empty as that path is caught by 'index.tsx' file
  const fileName = `${context?.params?.listing}.md`;
  const listing = await getListing(fileName);
  const contactEmails = listing.contact_emails?.split(',').map((e) => e.trim());
  let contacts: Employee[] = [];
  if (contactEmails?.length) {
    contacts = await getContactsByEmails(contactEmails);
  }
  return {
    props: { listing: { ...listing, contacts } },
    revalidate: 60 * 60,
  };
};

async function getContactsByEmails(emails: string[]): Promise<Employee[]> {
  const request = await fetch(getEmployeesUrl);
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employees = await Promise.all<Employee>(
      employeesJSON.map(async (employee: EmployeeJSON) => {
        const imageSlug = await handleImages(employee);
        return { ...massageEmployee(employee), imageSlug };
      }),
    );
    return employees.filter((e) => emails.includes(e.email));
  }
  // Trigger fallback on previous version
  throw new Error();
}
