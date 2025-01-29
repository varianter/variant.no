import { getLastInArray } from "./utils";

type PayscaleSingleYear = {
  [experienceYear: string]: string;
};

export type HistoricalPayscaleData = {
  [payscaleYear: string]: PayscaleSingleYear;
};

export type PayscaleEntry = {
  year: number;
  date: Date;
  pay: number;
  flag: "historic" | "prognosis";
};

export type Payscale = {
  current: number;
  diffSinceLast?: number;
  historic: PayscaleEntry[];
  prognosis: PayscaleEntry[];
};

function getHistoricPayscale(
  selectedYear: number,
  payscale: HistoricalPayscaleData,
) {
  return function fn(yearKey: string): PayscaleEntry {
    return {
      year: parseInt(yearKey, 10),
      date: firstDayOfTheYear(parseInt(yearKey, 10)),
      pay: parseInt(payscale[yearKey][selectedYear], 10),
      flag: "historic",
    };
  };
}

function createPrognosisPayscale(
  selectedYear: number,
  latestYear: string,
  latestPayscale: PayscaleSingleYear,
  numberOfYearsToCreate: number,
): PayscaleEntry[] {
  return Array.from({ length: numberOfYearsToCreate }, (_, i) => {
    const num = i + 1;
    const y = parseInt(latestYear, 10) + num;
    return {
      year: y,
      date: firstDayOfTheYear(y),
      pay: parseInt(latestPayscale[selectedYear - num], 10),
      flag: "prognosis",
    };
  });
}

export default function getPayscale(
  selectedYear: number,
  payscale: HistoricalPayscaleData,
): Payscale {
  const availablePayscaleYears = Object.keys(payscale);
  const latestYearInPayscaleArray = getLastInArray(availablePayscaleYears);

  const latestPayscale = payscale[latestYearInPayscaleArray];
  const payForSelectedYear = parseInt(latestPayscale[selectedYear], 10);

  const historic = availablePayscaleYears
    .map(getHistoricPayscale(selectedYear, payscale))
    .filter((i) => !Number.isNaN(i.pay));

  const prognosis = createPrognosisPayscale(
    selectedYear,
    latestYearInPayscaleArray,
    latestPayscale,
    2,
  );

  const prev = historic[historic.length - 2];

  return {
    current: payForSelectedYear,
    historic,
    diffSinceLast: prev ? payForSelectedYear - prev.pay : undefined,
    prognosis,
  };
}

function firstDayOfTheYear(year: number): Date {
  return new Date(year, 0, 1, 0, 0); // 01.01
}
