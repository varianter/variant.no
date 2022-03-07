import { Employee, massageEmployee } from '..';
import { getEmployeesUrl } from '../../utils/api/getEmployees';
import { handleImages } from '../../utils/imageHandler';
import { EmployeeJSON } from '../../utils/typings/Employee';

export const getEmployeesList = async () => {
  // Set so we can run local as fallback.
  const response = await fetch(getEmployeesUrl);
  if (response.ok) {
    const employeesJSON = await response.json();
    // Make images
    const employeeList = await Promise.all<Employee>(
      employeesJSON.map(async (employee: EmployeeJSON) => {
        const imageSlug = await handleImages(employee);
        return { ...massageEmployee(employee), imageSlug };
      }),
    );
    return employeeList;
  }
  return false;
};

export const getEmployeesListByEmail = async (
  emails: string[],
): Promise<Employee[]> => {
  // Set so we can run local as fallback.
  const response = await fetch(getEmployeesUrl);
  if (response.ok) {
    const employeesJSON = await response.json();
    // Make images
    const employeeList = await Promise.all<Employee>(
      employeesJSON
        .filter((j: EmployeeJSON) => emails.includes(j.email))
        .map(async (employee: EmployeeJSON) => {
          const imageSlug = await handleImages(employee);
          return { ...massageEmployee(employee), imageSlug };
        }),
    );
    return employeeList;
  }
  return [];
};
