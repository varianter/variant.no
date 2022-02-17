import { handleImages } from 'src/utils/imageHandler/_local';
import { ApiEmployee, EmployeeItem } from '../types';
import { requestByEmail, requestEmployees } from './request';

export const getEmployeesList = async () => {
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

export const getEmployeeByEmail = async (email: string) => {
  const employee = await requestByEmail(email);

  if (!employee) {
    return false;
  }

  const imageSlug = await handleImages(employee);
  return { ...massageEmployee(employee), imageSlug };
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
