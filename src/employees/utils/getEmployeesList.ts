import { Office } from 'src/office-selector';
import { EmployeeItem } from '../types';
import { requestByEmails, requestEmployees } from './request';
import { offices } from 'src/office-selector';

export const getEmployeesList = async (): Promise<EmployeeItem[] | false> => {
  const employees = await requestEmployees();

  if (!employees) {
    return false;
  }

  // Make images
  return employees.filter((employee) =>
    offices.includes(employee.officeName.toLowerCase() as Office),
  );
};

export const getEmployeesByOffice = async (
  officeName?: Office,
): Promise<EmployeeItem[] | false> => {
  const employees = await requestEmployees();

  if (!employees) {
    return false;
  }

  // Make images
  return await Promise.all<EmployeeItem>(
    employees.filter(
      (employee) => employee.officeName?.toLowerCase() === officeName,
    ),
  );
};

export const getRandomEmployee = async (): Promise<
  EmployeeItem | undefined
> => {
  const employees = await requestEmployees();

  if (!employees) {
    return undefined;
  }

  return employees[Math.floor(Math.random() * employees.length)];
};

export async function getContactsByEmails(
  emails: string[],
): Promise<EmployeeItem[]> {
  const employees = await requestByEmails(emails);
  return employees ?? [];
}
