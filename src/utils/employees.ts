import {
  ChewbaccaEmployee,
  isChewbaccaEmployeesResponse,
} from "src/types/employees";
import { Result, ResultError, ResultOk } from "studio/utils/result";

import { domainFromHostname } from "./url";

const CHEWBACCA_URL = "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net";

export async function fetchAllChewbaccaEmployees(): Promise<
  Result<ChewbaccaEmployee[], string>
> {
  const employeesRes = await fetch(new URL("employees", CHEWBACCA_URL));
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
  return ResultOk(employeesData.employees);
}

export async function fetchChewbaccaEmployee(
  email: string,
): Promise<Result<ChewbaccaEmployee, string>> {
  const allEmployeesRes = await fetchAllChewbaccaEmployees();
  if (!allEmployeesRes.ok) {
    return allEmployeesRes;
  }
  const employee = allEmployeesRes.value.find(
    (employee) => employee.email === email,
  );
  if (!employee) {
    return ResultError("Employee does not exist for given email");
  }
  return ResultOk(employee);
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

export function domainFromEmail(email: string) {
  return email.split("@")[1];
}
