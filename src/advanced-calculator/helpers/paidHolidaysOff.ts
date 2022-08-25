const potentialWorkDates = [24, 27, 28, 29, 30, 31]; // 25 and 26 omitted

const createJSDate = (year: number, month: number, day: number) => {
  return new Date(year, month - 1, day); // f*ck you indexed month
};

export function isWeekday(jsDate: Date) {
  const dayNumber = jsDate.getDay();
  return dayNumber !== 6 && dayNumber !== 0; // because weeks starts at a sunday...
}

export function numberOfWorkingDaysInChristmas(year: number) {
  const weekdays = potentialWorkDates
    .map((date) => createJSDate(year, 12, date))
    .filter(isWeekday);
  return weekdays.length;
}
