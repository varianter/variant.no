import PensionGraph from '../Graphs/PensionGraph';
import RangeSlider from '../Components/RangeSlider';
import { useState } from 'react';

import style from '../calculator.module.css';
import { Heading3 } from '@components/heading';

export default function Pension({
  yearlySalary,
  oneG,
}: {
  yearlySalary: number;
  oneG: number;
}) {
  const [compareSalary, setCompareSalary] = useState(500000);
  const [comparePensionPercentage, setComparePensionChange] = useState({
    below7G: 5,
    above7G: 5,
  });

  const sevenG = oneG * 7.1;

  function differenceWhenGreaterThan7G(salary: number) {
    const difference = Math.floor(salary - sevenG);
    return Math.sign(difference) > 0 ? difference : 0;
  }

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
          <div className={style.pension__info}>
            <Heading3 styleLevel="4">Vi kan sammenlignes</Heading3>
            <p>
              Pensjon er ikke alltid enkelt å tenke over, særlig ikke i starten.
              Men det er en viktig ting å tenke på, særlig for unge som i mindre
              grad får dekt pensjonen av staten fremover.
            </p>

            <p>
              Pensjon kan faktisk utgjøre mye av lønna de og det er i praksis
              ekstra sparing som arbeidsplassen gjør for deg. Det er derfor
              viktig å ta det med i beregninger av betingelser.
            </p>

            <p>
              Variant betaler 7% av årslønn opp til 12G ekstra til sparing i
              pensjon for deg.
            </p>
          </div>
          <div className={style['form-wrapper']}>
            <fieldset className={style['form__fieldset']}>
              <legend>Årslønn hos nåverende arbeidsgiver</legend>
              <RangeSlider
                min={500000}
                max={1200000}
                value={compareSalary}
                step={10000}
                id={'compareSalary'}
                name="Nåverende årslønn"
                onChange={handleOnCompareSalaryChange}
              />
            </fieldset>

            <fieldset className={style['form__fieldset']}>
              <legend>Pensjon, i prosent (mellom 0 til 7.1G)</legend>
              <RangeSlider
                min={2}
                max={7}
                value={comparePensionPercentage.below7G}
                step={1}
                id={'comparePensionBelow7G'}
                name="Nåverende pensjon"
                onChange={handleOnCompareBelow7GPensionChange}
              />
            </fieldset>

            <fieldset className={style['form__fieldset']}>
              <legend>Pensjon, i prosent (over 7.1G)</legend>
              <RangeSlider
                min={2}
                max={25}
                value={comparePensionPercentage.above7G}
                step={1}
                id={'comparePensionAbove7G'}
                name="Nåverende pensjon"
                onChange={handleOnCompareAbove7GPensionChange}
                disabled={compareSalary < sevenG}
              />
            </fieldset>

            <a href="https://www.finansportalen.no/pensjon/hva-er-innskuddspensjon/">
              Hva er inskuddspensjon?
            </a>
          </div>
        </div>

        <PensionGraph
          data={[
            {
              text: `Sammenligning, ${(
                ((pensionBelow7G + pensionAbove7G) * 100) /
                compareSalary
              ).toPrecision(2)}%`,
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
