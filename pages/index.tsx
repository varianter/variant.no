import { GetStaticProps } from 'next';
import { handleImages } from 'src/utils/imageHandler';
import { Employee, massageEmployee } from 'src/employees';
import { getEmployeesUrl } from 'src/utils/api/getEmployees';
import { CaseJSON } from 'src/case/Case';
import { CaseList } from 'src/case/cases';

export { default } from 'src/index';

function shuffle<T>(array: Array<T>): Array<T> {
  return [...array].sort(() => Math.random() - 0.5);
}

export const getStaticProps: GetStaticProps<{
  randomEmployee: Employee;
  randomCases: CaseJSON[];
}> = async () => {
  const request = await fetch(getEmployeesUrl);
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employee =
      employeesJSON[Math.floor(Math.random() * employeesJSON.length)];
    const imageSlug = await handleImages(employee);
    const randomEmployee = { ...massageEmployee(employee), imageSlug };

    const randomCases = shuffle(CaseList).slice(0, 3);

    return { props: { randomEmployee, randomCases }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
