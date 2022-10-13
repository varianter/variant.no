import { EmployeeItem } from 'src/employees/types';

const BASE_URL = 'https://cv-partner-layer.vercel.app/api';

export async function requestEmployees(): Promise<EmployeeItem[] | undefined> {
  const request = await fetch(`${BASE_URL}/employees`);

  if (!request.ok) {
    return undefined;
  }
  return (await request.json()).employees as EmployeeItem[];
}

export async function regenerateEmployees(): Promise<
  EmployeeItem[] | undefined
> {
  const request = await fetch(`${BASE_URL}/employees/revalidate`, {
    headers: [['Authorization', process.env.REVALIDATE_TOKEN ?? '']],
  });

  if (!request.ok) {
    return undefined;
  }
  return (await request.json()).employees as EmployeeItem[];
}

export async function requestByEmails(
  emails: string[],
): Promise<EmployeeItem[]> {
  const employeeList = await requestEmployees();

  if (!employeeList) {
    return [];
  }

  const employee = employeeList.filter((e) => emails.includes(e.email));
  return employee;
}
