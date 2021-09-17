import anime from 'animejs';
import { useEffect, useState } from 'react';
import { calculateEstimatedSalary, Degree } from './utils';

export default function useCalculatorData(
  initialYear: number,
  initialDegree: Degree,
) {
  const [degree, setDegree] = useState<Degree>(initialDegree);
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const minBonus = 60000;
  const maxBonus = 100000;
  const [salary, setSalary] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(70000);

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
    const yr = bonus + 5000;
    if (yr <= maxBonus) setBonus(bonus + 5000);
  }

  function decreaseBonus() {
    const yr = bonus - 5000;
    if (yr >= minBonus) setBonus(bonus - 5000);
  }

  return {
    selectedYear,
    setSelectedYear,
    degree,
    setDegree,
    bonus,
    setBonus,
    minBonus,
    maxBonus,
    salary,
    increaseBonus,
    decreaseBonus,
  };
}
