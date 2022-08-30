import { it, expect } from 'vitest';
import { numberOfWorkingDaysInChristmas } from '../paidHolidaysOff';

it('Number of weekdays between Christmas Eve and New Years Eve', () => {
  expect(numberOfWorkingDaysInChristmas(2017)).toEqual(3);
  expect(numberOfWorkingDaysInChristmas(2020)).toEqual(5);
  expect(numberOfWorkingDaysInChristmas(2021)).toEqual(6);
  expect(numberOfWorkingDaysInChristmas(2022)).toEqual(4);
  expect(numberOfWorkingDaysInChristmas(2023)).toEqual(3);
});
