import anime from 'animejs';
import { useEffect, useState } from 'react';
import { calculateEstimatedSalary, Degree } from './utils';

export default function useCalculatorData(
  initialYear: number,
  initialDegree: Degree,
) {
  const [degree, setDegree] = useState<Degree>(initialDegree);
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const minBonus = 0;
  const maxBonus = 100000;
  const estimatedBonus = 70420;
  const [salary, setSalary] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(0);

  useEffect(() => {
    let payObj = { value: salary };
    anime({
      targets: payObj,
      value: calculateEstimatedSalary(selectedYear, degree),
      duration: 500,
      round: 1,
      easing: 'easeInOutExpo',
      update: () => setSalary(payObj.value ?? 0),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, bonus, degree]);

  function increaseBonus() {
    const yr = bonus + 10000;
    if (yr <= maxBonus) setBonus(bonus);
  }

  function decreaseBonus() {
    const yr = bonus - 10000;
    if (yr >= minBonus) setBonus(bonus);
  }

  return {
    selectedYear,
    setSelectedYear,
    degree,
    setDegree,
    estimatedBonus,
    bonus,
    setBonus,
    minBonus,
    maxBonus,
    salary,
    increaseBonus,
    decreaseBonus,
  };
}
