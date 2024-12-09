import { ChewbaccaEmployee } from "src/types/employees";

export type EmployeeAndMetadata = {
  employee: ChewbaccaEmployee;
  tag: string;
  tagSlug: string;
  overrideTitle: string;
};
