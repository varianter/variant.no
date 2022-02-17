import { GetStaticProps } from 'next';
import { CaseJSON } from 'src/case/Case';
import { CaseList } from 'src/case/cases';
import { EmployeeItem } from 'src/employees/types';
import { getEmployeesList } from 'src/employees/utils/getEmployeesList';

export { default } from 'src/index';

function shuffle<T>(array: Array<T>): Array<T> {
  return [...array].sort(() => Math.random() - 0.5);
}

export const getStaticProps: GetStaticProps<{
  randomEmployee: EmployeeItem;
  randomCases: CaseJSON[];
}> = async () => {
  const employeesJSON = await getEmployeesList();
  if (employeesJSON) {
    const randomEmployee =
      employeesJSON[Math.floor(Math.random() * employeesJSON.length)];
    const randomCases = shuffle(CaseList).slice(0, 3);

    return {
      props: { randomEmployee, randomCases },
      revalidate: 7 * 24 * 60 * 60,
    };
  }
  // Trigger fallback on previous version
  throw new Error();
};
