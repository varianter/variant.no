import { GetStaticProps } from 'next';
import { EmployeeItem } from 'src/employees/types';
import { Office } from 'src/office-selector';
import { getStaticPropsEmployees } from '../../src/employees/utils/getStaticProps';

export { default } from 'src/employees';

export const getStaticProps: GetStaticProps<{
  employeeList: EmployeeItem[];
  officeName?: Office;
}> = async () => {
  return await getStaticPropsEmployees();
};
