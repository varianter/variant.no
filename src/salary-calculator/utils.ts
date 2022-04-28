import data from './pay.json';

type SalaryData = { [year: string]: string };

export function calculateEstimatedSalary(
  graduationYear: number,
  degree: Degree,
): number {
  const year = String(graduationYear + (degree === 'bachelor' ? 1 : 0));
  return parseInt((data as SalaryData)[year] ?? '0');
}

export function getMaxYear(): number {
  const keys = Object.keys(data);
  return parseInt(keys[keys.length - 1]) - 1;
}

export const formatCurrency = (pay: string | undefined) => {
  if (!pay) return pay;
  return new Intl.NumberFormat('nb-NO').format(parseInt(pay));
};

export type Degree = 'masters' | 'bachelor';
