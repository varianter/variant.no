import {
  ChewbaccaEmployee,
  isChewbaccaEmployeesResponse,
} from "src/types/employees";
import { Result, ResultError, ResultOk } from "studio/utils/result";

import { domainFromHostname } from "./url";

const CHEWBACCA_URL = "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net";

export async function fetchAllChewbaccaEmployees(
  countryCode?: string,
): Promise<Result<ChewbaccaEmployee[], string>> {
  const url = countryCode
    ? `${CHEWBACCA_URL}/employees?country=${countryCode}`
    : `${CHEWBACCA_URL}/employees`;

  const employeesRes = await fetch(url, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  if (!employeesRes.ok) {
    return ResultError(
      `Fetch returned status ${employeesRes.status} ${employeesRes.statusText}`,
    );
  }
  const employeesData = await employeesRes.json();
  if (!isChewbaccaEmployeesResponse(employeesData)) {
    return ResultError(
      `Expected ChewbaccaEmployeesResponse, was ${employeesData}`,
    );
  }
  return ResultOk(shuffleEmployees(employeesData.employees));
}
function shuffleEmployees(employees: ChewbaccaEmployee[]) {
  return employees.sort(() => Math.random() - 0.5);
}

export async function fetchChewbaccaEmployee(
  alias: string,
  hostname: string | null,
): Promise<Result<ChewbaccaEmployee, string>> {
  const url = `${CHEWBACCA_URL}/employees/${aliasFromEmail(alias)}?country=${countryCodeFromEmail(hostname)}`;

  const employeeRes = await fetch(url, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  if (!employeeRes.ok) {
    return ResultError("Employee does not exist for given email");
  }

  return ResultOk(await employeeRes.json());
}

export function emailFromAliasAndHostname(
  alias: string,
  hostname: string | null,
) {
  return `${alias}@${domainFromHostname(hostname)}`;
}

export function aliasFromEmail(email: string): string {
  return email.split("@")[0];
}
export function countryCodeFromEmail(hostname: string | null): string {
  return domainFromHostname(hostname).split(".").at(-1) ?? "no";
}
export function domainFromEmail(email: string) {
  return email.split("@")[1];
}

export async function fetchEmployeesByEmails(
  emails: string[],
): Promise<Result<ChewbaccaEmployee[], string>> {
  const allEmployeesRes = await fetchAllChewbaccaEmployees();
  if (!allEmployeesRes.ok) {
    return allEmployeesRes;
  }
  return ResultOk(
    // mapping from input array (instead of filtering all employees) to preserve order
    emails
      .map((email) =>
        allEmployeesRes.value.find((employee) => employee.email === email),
      )
      .filter((employee) => employee !== undefined),
  );
}
