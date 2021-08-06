import { GetStaticProps } from 'next';
import { Employee } from 'src/employees';
import {
  getEmployeesList,
  Office,
} from '../../src/employees/utils/getEmployeesList';

export { default } from 'src/employees';

export const getStaticProps: GetStaticProps<{
  employeeList: Employee[];
  officeName?: Office;
}> = async () => {
  // Set so we can run local as fallback.
  const employeeList = await getEmployeesList();
  if (employeeList) {
    return { props: { employeeList }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
