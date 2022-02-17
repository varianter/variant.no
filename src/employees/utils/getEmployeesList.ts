import { handleImages } from 'src/employees/utils/imageHandler';
import { ApiEmployee, EmployeeItem } from '../types';
import { requestByEmail, requestEmployees } from './request';

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

export const getEmployeeByEmail = async (
  email: string,
): Promise<EmployeeItem | false> => {
  const employee = await requestByEmail(email);

  if (!employee) {
    return false;
  }

  const imageUrl = await handleImages(employee);
  return { ...massageEmployee(employee), imageUrl };
};

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
