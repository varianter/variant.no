import { GetStaticProps } from 'next';
import { CaseJSON } from 'src/case/Case';
import { CaseList } from 'src/case/cases';
import { EmployeeItem } from 'src/employees/types';
import { getRandomEmployee } from 'src/employees/utils/getEmployeesList';

export { default } from 'src/index';

function shuffle<T>(array: Array<T>): Array<T> {
  return [...array].sort(() => Math.random() - 0.5);
}

export const getStaticProps: GetStaticProps<{
  randomEmployee: EmployeeItem;
  randomCases: CaseJSON[];
}> = async () => {
  const randomEmployee = await getRandomEmployee();
  if (randomEmployee) {
    const randomCases = shuffle(CaseList).slice(0, 3);

    return {
      props: { randomEmployee, randomCases },
      revalidate: 7 * 24 * 60 * 60,
    };
  }
  // Trigger fallback on previous version
  throw new Error();
};
