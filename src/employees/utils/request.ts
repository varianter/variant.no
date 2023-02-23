import { EmployeeItem } from 'src/employees/types';

const BASE_URL = 'https://cv-partner-layer.vercel.app/api';

export async function requestEmployees(): Promise<EmployeeItem[] | undefined> {
  const request = await fetch(`${BASE_URL}/employees`);

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

  return emails
    .map((email) => employeeList.find((e) => e.email == email))
    .filter(Boolean) as EmployeeItem[];
}
