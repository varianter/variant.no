import { GetStaticProps } from 'next';
import { handleImages } from 'src/utils/imageHandler';
import { Employee, massageEmployee } from 'src/employees';
import { getEmployeesUrl } from 'src/utils/api/getEmployees';

export { default } from 'src/index';

export const getStaticProps: GetStaticProps<{
  randomEmployee: Employee;
}> = async () => {
  const request = await fetch(getEmployeesUrl);
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employee =
      employeesJSON[Math.floor(Math.random() * employeesJSON.length)];
    const imageSlug = await handleImages(employee);
    const randomEmployee = { ...massageEmployee(employee), imageSlug };
    return { props: { randomEmployee }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
