import data from './pay.json';

type SalaryData = { [year: string]: string };

export function calculateEstimatedSalary(
  graduationYear: number,
  degree: Degree,
): number {
  const year = String(graduationYear + (degree === 'bachelor' ? 1 : 0));
  return parseInt((data as SalaryData)[year] ?? '0');
}

export const formatCurrency = (pay: number | undefined) => {
  if (!pay) return pay;
  return new Intl.NumberFormat('nb-NO').format(parseInt(pay.toString()));
};

export type Degree = 'masters' | 'bachelor';
