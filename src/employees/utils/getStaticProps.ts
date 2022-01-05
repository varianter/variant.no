import { getEmployeesList } from './getEmployeesList';

export const offices = ['Oslo', 'Trondheim'] as const;
export type Office = typeof offices[number];

export async function getStaticPropsEmployees(officeName?: Office) {
  // Set so we can run local as fallback.
  const employeeList = await getEmployeesList();
  if (employeeList) {
    return {
      props: officeName
        ? {
            employeeList: employeeList.filter(
              (employee) => employee.officeName?.toLowerCase() === officeName,
            ),
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
