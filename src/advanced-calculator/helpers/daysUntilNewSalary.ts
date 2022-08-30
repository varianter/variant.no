export function firstDayOfTheYear(year: number): Date {
  return new Date(year, 0, 1, 0, 0); // 01.01
}

export function daysBetweenDates(startDate: Date, endDate: Date) {
  const dayInMs = 1000 * 60 * 60 * 24;

  const start = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );
  const end = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  return (start - end) / dayInMs;
}

export function daysUntilSalaryRaise(date: Date) {
  const nextYear = firstDayOfTheYear(date.getFullYear() + 1);
  return daysBetweenDates(date, nextYear);
}
