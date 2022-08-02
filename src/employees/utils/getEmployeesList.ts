import handleImages from 'src/employees/utils/imageHandler';
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

export const getRandomEmployee = async (): Promise<
  EmployeeItem | undefined
> => {
  const employees = await requestEmployees();

  if (!employees) {
    return undefined;
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

const offices = ['Trondheim', 'Oslo', 'Bergen'];
const givenName = [
  'Nora',
  'Emma',
  'Sofie',
  'Olivia',
  'Ella',
  'Sofia',
  'Maya',
  'Lea',
  'Frida',
  'Ingrid',
  'Noah',
  'Oskar',
  'Oliver',
  'Lukas',
  'Isak',
  'Axel',
  'Emil',
  'Fillip',
  'Jakob',
  'Will',
];
const sureName = [
  'Hansen',
  'Johansen',
  'Olsen',
  'Larsen',
  'Andersen',
  'Pedersen',
  'Nilsen',
  'Kristiansen',
  'Jensen',
  'Karlsen',
  'Johnsen',
  'Pettersen',
  'Eriksen',
  'Berg',
  'Haugen',
  'Johannessen',
];
function getMockEmployee() {
  const randomOffice = offices[Math.floor(Math.random() * offices.length)];
  const randomGivenName =
    givenName[Math.floor(Math.random() * givenName.length)];
  const randomSureName = sureName[Math.floor(Math.random() * sureName.length)];

  return {
    name: `${randomGivenName} ${randomSureName}`,
    email: 'email',
    telephone: '81549300',
    image: {
      url: `https://robohash.org/${randomGivenName}${randomSureName}`,
      thumb: {
        url: `https://robohash.org/${randomGivenName}${randomSureName}`,
      },
      fit_thumb: {
        url: `https://robohash.org/${randomGivenName}${randomSureName}`,
      },
      large: {
        url: `https://robohash.org/${randomGivenName}${randomSureName}`,
      },
      small_thumb: {
        url: `https://robohash.org/${randomGivenName}${randomSureName}`,
      },
    },
    office_name: randomOffice,
  };
}

export function getMockEmployeeList(numberOfEmployeesToGenerate: number) {
  return [...Array(numberOfEmployeesToGenerate)].map(getMockEmployee);
}
