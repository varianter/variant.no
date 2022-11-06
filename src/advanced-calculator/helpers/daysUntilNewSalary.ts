export function firstDayOfTheYear(year: number): Date {
  return new Date(year, 0, 1, 0, 0); // 01.01
}

export function gradDateOfTheYear(year: number): Date {
  return new Date(year, 5, 30, 0, 0); // 30. jul
}

export function calculateYearsSince(calcDate: Date) :number {  
  let diffInMs = Date.now() - calcDate.getTime();
  let diffInDate = new Date(diffInMs); // miliseconds from epoch
  return Math.abs(diffInDate.getUTCFullYear() - 1970);
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
