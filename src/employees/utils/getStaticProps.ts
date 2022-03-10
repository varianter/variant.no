import { Office } from 'src/office-selector';
import { getEmployeesByOffice, getEmployeesList } from './getEmployeesList';

export async function getStaticPropsEmployees(officeName?: Office) {
  // Set so we can run local as fallback.
  const employeeList = officeName
    ? await getEmployeesByOffice(officeName)
    : await getEmployeesList();

  if (employeeList) {
    return {
      props: officeName
        ? {
            employeeList,
            officeName,
          }
        : {
            employeeList,
          },
      revalidate: 24 * 60 * 60,
    };
  }
  // Trigger fallback on previous version
  throw new Error();
}
