import anime from 'animejs';
import { useEffect, useState } from 'react';
import {
  calculateEstimatedSalary,
  Degree,
  formatCurrency,
  getMaxYear,
} from './utils';

export default function useCalculatorData(
  initialYear: number,
  initialDegree: Degree,
  addition?: number,
) {
  const [degree, setDegree] = useState<Degree>(initialDegree);
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const minYear = 1990;
  const maxYear = getMaxYear();
  const [salary, setSalary] = useState('0');

  useEffect(() => {
    let payObj = { value: salary };
    anime({
      targets: payObj,
      value: calculateEstimatedSalary(selectedYear, degree) + (addition ?? 0),
      duration: 500,
      round: 1,
      easing: 'easeInOutExpo',
      update: () => setSalary(formatCurrency(payObj.value) ?? ''),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, degree, addition]);

  function incrementYear() {
    const yr = selectedYear + 1;
    if (yr <= maxYear) setSelectedYear(yr);
  }

  function decrementYear() {
    const yr = selectedYear - 1;
    if (yr >= minYear) setSelectedYear(yr);
  }

  return {
    selectedYear,
    setSelectedYear,
    degree,
    setDegree,
    minYear,
    maxYear,
    salary,
    incrementYear,
    decrementYear,
  };
}
