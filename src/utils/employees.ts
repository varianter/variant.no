import {
  ChewbaccaEmployee,
  isChewbaccaEmployeesResponse,
} from "src/types/employees";
import { Result, ResultError, ResultOk } from "studio/utils/result";

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
