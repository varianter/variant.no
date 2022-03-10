import { handleImages } from 'src/employees/utils/imageHandler';
import { Office } from 'src/office-selector';
import { ApiEmployee, EmployeeItem } from '../types';
import { requestByEmails, requestEmployees } from './request';

export const getEmployeesList = async (): Promise<EmployeeItem[] | false> => {
  const employees = await requestEmployees();

  if (!employees) {
    return false;
  }

  // Make images
  return await Promise.all<EmployeeItem>(
    employees.map(async (employee) => {
      const imageUrl = await handleImages(employee);
      return { ...massageEmployee(employee), imageUrl };
    }),
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
    employees
      .filter((employee) => employee.office_name?.toLowerCase() === officeName)
      .map(async (employee) => {
        const imageUrl = await handleImages(employee);
        return { ...massageEmployee(employee), imageUrl };
      }),
  );
};

export const getRandomEmployee = async (): Promise<EmployeeItem | false> => {
  const employees = await requestEmployees();

  if (!employees) {
    return false;
  }

  const randomEmployee =
    employees[Math.floor(Math.random() * employees.length)];

  const imageUrl = await handleImages(randomEmployee);
  return { ...massageEmployee(randomEmployee), imageUrl };
};

export async function getContactsByEmails(
  emails: string[],
): Promise<EmployeeItem[]> {
  const employees = await requestByEmails(emails);

  if (!employees) {
    return [];
  }

  // Make images
  return await Promise.all<EmployeeItem>(
    employees.map(async (employee) => {
      const imageUrl = await handleImages(employee);
      return { ...massageEmployee(employee), imageUrl };
    }),
  );
}

function massageEmployee(employee: ApiEmployee) {
  return {
    fullName: employee.name,
    name: employee.name.split(' ')[0],
    email: employee.email,
    telephone: (employee.telephone.startsWith('+47')
      ? employee.telephone.slice(3)
      : employee.telephone
    )
      .replace(/\s/g, '')
      .replace(/(\d{3})(\d{2})/g, '$1 $2 '),
    officeName: employee.office_name,
  };
}
