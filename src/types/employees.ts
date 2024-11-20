export interface ChewbaccaEmployeesResponse {
  employees: ChewbaccaEmployee[];
}

export type ChewbaccaEmployeeResponse = ChewbaccaEmployee;

export function isChewbaccaEmployeesResponse(
  value: unknown,
): value is ChewbaccaEmployeesResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "employees" in value &&
    Array.isArray(value.employees) &&
    value.employees.every(isChewbaccaEmployee)
  );
}

export type Competence =
  | "Project Management"
  | "Design"
  | "Utvikling"
  | "Administasjon";

export interface ChewbaccaEmployee {
  email?: string | null;
  name?: string | null;
  telephone?: string | null;
  imageUrl?: string | null;
  imageThumbUrl?: string | null;
  officeName?: string | null;
  startDate?: string | null;
  competences: Competence[];
}

export function isChewbaccaEmployee(
  value: unknown,
): value is ChewbaccaEmployee {
  return (
    typeof value === "object" &&
    value !== null &&
    (!("email" in value) ||
      typeof value.email === "string" ||
      value.email === null) &&
    (!("name" in value) ||
      typeof value.name === "string" ||
      value.name === null) &&
    (!("telephone" in value) ||
      typeof value.telephone === "string" ||
      value.telephone === null) &&
    (!("imageUrl" in value) ||
      typeof value.imageUrl === "string" ||
      value.imageUrl === null) &&
    (!("imageThumbUrl" in value) ||
      typeof value.imageThumbUrl === "string" ||
      value.imageThumbUrl === null) &&
    (!("officeName" in value) ||
      typeof value.officeName === "string" ||
      value.officeName === null) &&
    (!("startDate" in value) ||
      typeof value.startDate === "string" ||
      value.startDate === null) &&
    (!("competences" in value) ||
      typeof value.competences === "object" ||
      value.competences === null)
  );
}
