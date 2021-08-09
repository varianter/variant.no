import { GetStaticProps } from 'next';
import { Employee } from 'src/employees';
import {
  getStaticPropsEmployees, Office,
} from '../../src/employees/utils/getStaticProps';

export { default } from 'src/employees';

export const getStaticProps: GetStaticProps<{
  employeeList: Employee[];
  officeName?: Office;
}> = async () => {
  return await getStaticPropsEmployees();
};
