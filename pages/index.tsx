import { GetStaticProps } from 'next';
import { handleImages } from 'src/utils/imageHandler';
import { Employee, massageEmployee } from 'src/employees';
import { getEmployeesUrl } from 'src/utils/api/getEmployees';
import { CaseJSON } from '../src/case/Case';
import { CaseList } from '../src/case/cases';

export { default } from 'src/index';

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

    const getCases: CaseJSON[] = CaseList;
    var numbers: Array<number> = [];
    const randomCases = [];

    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * getCases.length);
      if (!numbers.includes(num)) {
        numbers.push(num);
        randomCases.push(getCases[num]);
      } else {
        i--;
      }
    }

    return { props: { randomEmployee, randomCases }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
