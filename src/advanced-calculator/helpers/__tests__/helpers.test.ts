import { daysUntilSalaryRaise } from '../daysUntilNewSalary';
import { it, expect } from 'vitest';

it('Number of days between date and 01.01 next year', () => {
  expect(daysUntilSalaryRaise(new Date('2021-12-30'))).toEqual(2);
  expect(daysUntilSalaryRaise(new Date('2021-01-01'))).toEqual(365);
  expect(daysUntilSalaryRaise(new Date('2024-01-01'))).toEqual(366); // leap year
  expect(daysUntilSalaryRaise(new Date('2022-12-01'))).toEqual(31);
});
