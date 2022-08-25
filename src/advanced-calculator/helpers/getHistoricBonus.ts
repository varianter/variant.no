import { historicBonus } from '../config';

export const getHistoricBonus = [...historicBonus];

export const average = (numbers: number[]) => {
  return Math.floor(
    numbers.reduce((prev, amount) => amount + prev, 0) / numbers.length,
  );
};

export const getAverageBonus = () => {
  const lol = historicBonus.map(([_year, bonus]) => bonus);
  const averageBonus = average(lol);
  return averageBonus;
};
