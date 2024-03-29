import { GetStaticPaths, GetStaticProps } from 'next';
import { EmployeeItem } from 'src/employees/types';
import { Office, offices } from 'src/office-selector';
import { getStaticPropsEmployees } from '../../src/employees/utils/getStaticProps';

export { default } from 'src/employees';

function queryToOffice(input?: string | string[]): Office | undefined {
  for (let office of offices) {
    if (office == input) {
      return office;
    }
  }
  return undefined;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    return {
      paths: offices.map((i) => ({ params: { office: i.toLowerCase() } })),
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps<{
  employeeList: EmployeeItem[];
  officeName?: Office;
}> = async (context) => {
  return getStaticPropsEmployees(queryToOffice(context.params?.office));
};
