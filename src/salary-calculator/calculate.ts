import data from './pay.json';

type SalaryData = { [year: string]: string };

export function calculateEstimatedSalary(
  graduationYear: number,
  degree: Degree,
): string | undefined {
  const year = String(graduationYear + (degree === 'bachelor' ? 1 : 0));
  return (data as SalaryData)[year];
}

export function getMaxYear(): number {
  const keys = Object.keys(data);
  return parseInt(keys[keys.length - 1]) - 2;
}

export type Degree = 'masters' | 'bachelor';
