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
    telephone:
      (employee.telephone?.startsWith('+47')
        ? employee.telephone?.slice(3)
        : employee.telephone
      )
        ?.replace(/\s/g, '')
        ?.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/g, '$1 $2 $3 $4') ?? null,
    officeName: employee.office_name,
  };
}

function getRandomElementFromList(list: Array<string>) {
  return list[Math.floor(Math.random() * list.length)];
}

const offices = ['Trondheim', 'Oslo', 'Bergen'];
const givenName = [
  'Wall-E',
  'R2D2',
  'HAL 9000',
  'ASIOMO',
  'K9',
  'MICRO',
  'Machina',
  'EVA',
  'Screwie',
  'Sparkles',
  'Alexa',
  'Siri',
  'Rusty',
  'Omega',
  'Intel',
  'Bender',
];
const surname = [
  'Spirit',
  'Ratchet',
  'Cybel',
  'Droid',
  'Ahx',
  'Ijg',
  'Ratchet',
  'Ixim',
  'Utaqroid',
  'Plex',
  'Scrappie',
  'Silver',
  'Grezzer',
  'Odu',
  'Adx',
  'Tracker',
  'Ash',
  'Mach',
  'Ejukroid',
  'Icaf',
  'Rodríguez',
];

function getMockEmployee() {
  const randomOffice = getRandomElementFromList(offices);
  const randomGivenName = getRandomElementFromList(givenName);
  const randomSurname = getRandomElementFromList(surname);

  return {
    name: `${randomGivenName} ${randomSurname}`,
    email: 'email',
    telephone: '81549300',
    image: {
      url: `https://robohash.org/${randomGivenName}${randomSurname}`,
      thumb: {
        url: `https://robohash.org/${randomGivenName}${randomSurname}`,
      },
      fit_thumb: {
        url: `https://robohash.org/${randomGivenName}${randomSurname}`,
      },
      large: {
        url: `https://robohash.org/${randomGivenName}${randomSurname}`,
      },
      small_thumb: {
        url: `https://robohash.org/${randomGivenName}${randomSurname}`,
      },
    },
    office_name: randomOffice,
  };
}

export function getMockEmployeeList(numberOfEmployeesToGenerate: number) {
  return [...Array(numberOfEmployeesToGenerate)].map(getMockEmployee);
}
