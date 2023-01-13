import { payscale } from '../config';

const data = payscale['2023'];

export type SalaryData = { [year: string]: string };

/* export function experienceNumber = () => {

} */

export function getLastInArray<Type>(arr: Type[]): Type {
  return arr[arr.length - 1];
}

export function calculateEstimatedSalary(
  graduationYear: number,
  degree: Degree,
): number {
  const year = String(graduationYear + (degree === 'bachelor' ? 1 : 0));
  return parseInt((data as SalaryData)[year] ?? '0', 10);
}

export function getMaxYear(): number {
  const keys = Object.keys(data);
  return parseInt(keys[keys.length - 1], 10) - 2;
}

export const formatCurrencyFromNumber = (pay: number | undefined) => {
  if (!pay) return '';
  return new Intl.NumberFormat('nb-NO').format(Math.floor(pay));
};

export type Degree = 'masters' | 'bachelor';
