import { ONE_G } from '../config';

import PensionGraph from '../Graphs/PensionGraph';
import RangeSlider from '../Components/RangeSlider';
import { useState } from 'react';

import style from '../calculator.module.css';

const SEVEN_POINT_ONE_G = ONE_G * 7.1;
// const TWELVE_G = ONE_G * 12;

const differenceWhenGreaterThan7G = (salary: number) => {
  const difference = Math.floor(salary - SEVEN_POINT_ONE_G);
  return Math.sign(difference) > 0 ? difference : 0;
};

export default function Pension({ yearlySalary }: { yearlySalary: number }) {
  const [compareSalary, setCompareSalary] = useState(500000);
  const [comparePensionPercentage, setComparePensionChange] = useState({
    below7G: 5,
    above7G: 5,
  });

  function handleOnCompareSalaryChange(value: number) {
    setCompareSalary(value);
  }

  function handleOnCompareBelow7GPensionChange(value: number) {
    setComparePensionChange({ ...comparePensionPercentage, below7G: value });
  }

  function handleOnCompareAbove7GPensionChange(value: number) {
    setComparePensionChange({ ...comparePensionPercentage, above7G: value });
  }

  const salaryBelow7G =
    compareSalary - differenceWhenGreaterThan7G(compareSalary);

  const pensionBelow7G = Math.floor(
    0.01 * comparePensionPercentage.below7G * salaryBelow7G,
  );

  const pensionAbove7G = Math.floor(
    0.01 *
      comparePensionPercentage.above7G *
      differenceWhenGreaterThan7G(compareSalary),
  );

  return (
    <div>
      <div className={style.pension}>
        <div className={style.pension__controls}>
          <div>
            <h4>Vi tåles å sammenlignes</h4>
            <p>
              En liten text om vad som skjer her vore jo på sin plass. Kanskje
              med lenke til statistikk, kilde eller noe lignende.
            </p>
          </div>
          <div className={style['form-wrapper']}>
            <label htmlFor="compareSalary">
              Årslønn
              <RangeSlider
                min={500000}
                max={1200000}
                value={compareSalary}
                step={10000}
                id={'compareSalary'}
                name="Sammenlign pensjon, årslønn"
                onChange={handleOnCompareSalaryChange}
              />
            </label>
            <label htmlFor="comparePension">
              Pensjon, i prosent (mellom 0 til 7.1G)
              <RangeSlider
                min={2}
                max={7}
                value={comparePensionPercentage.below7G}
                step={1}
                id={'comparePension'}
                name="Sammenlign pensjon, prosent"
                onChange={handleOnCompareBelow7GPensionChange}
              />
            </label>

            <label htmlFor="comparePension">
              Tjener du over 7.1G kan arbeidsgiver
              <RangeSlider
                min={2}
                max={25}
                value={comparePensionPercentage.above7G}
                step={1}
                id={'comparePension'}
                name="Sammenlign pensjon, prosent"
                onChange={handleOnCompareAbove7GPensionChange}
                disabled={compareSalary < SEVEN_POINT_ONE_G}
              />
            </label>
            <a href="https://www.finansportalen.no/pensjon/hva-er-innskuddspensjon/">
              Hva er inskuddspensjon?
            </a>
          </div>
        </div>

        <PensionGraph
          data={[
            {
              text: `[sammenlign]`,
              num: pensionBelow7G + pensionAbove7G,
              settings: {
                gradient: ['#534DAC', '#FFE7E4'],
                position: 'left',
              },
            },
            {
              text: 'Variant, 7%',
              num: yearlySalary * 0.07,
              settings: {
                gradient: ['#F076A6', '#F8D2D2'],
                position: 'right',
              },
            },
          ]}
        />
      </div>
    </div>
  );
}
