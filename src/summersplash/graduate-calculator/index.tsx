import React from 'react';
import RadioButton from '../../components/radio-button';
import Slider from './slider';
import { Degree, formatCurrency } from './utils';
import style from './index.module.css';
import { and } from 'src/utils/strings';
import useCalculatorData from './use-calculator-data';

type Props = {
  year: number;
  degree: Degree;
};

export const Calculator = (props: Props) => {
  const {
    selectedYear,
    degree,
    setDegree,
    bonus,
    setBonus,
    minBonus,
    maxBonus,
    salary,
    increaseBonus,
    decreaseBonus,
  } = useCalculatorData(props.year, props.degree);

  return (
    <div className={style.container}>
      <div className={style.calculatorContainer}>
        <fieldset className={style.contentContainer}>
          <h3 className={style.title}>Lønnskalkulator</h3>

          <p>Vil du vite hva du vil tjene i Variant som nyutdannet i 2022?</p>

          <p>Da trenger du bare svare på to spørsmål:</p>

          <div
            className={style.gradeContainer}
            role="group"
            aria-labelledby="degree-title"
          >
            <h3 className={style.question} id="degree-title">
              Hvilken grad får du?
            </h3>

            <RadioButton
              changed={setDegree}
              id="degree-1"
              isSelected={degree === 'bachelor'}
              label="Bachelor"
              value="bachelor"
              name="degree"
            />

            <RadioButton
              changed={setDegree}
              id="degree-2"
              isSelected={degree === 'masters'}
              label="Master"
              value="masters"
              name="degree"
            />
          </div>

          <h3 className={style.question}>Hvor optimistisk er du på bonus?</h3>
          <div className={style.barSliderContainer}>
            <button
              onClick={decreaseBonus}
              className={style.iconButton}
              aria-label="Minske bonusbeløp med 10 000 kr"
              role="img"
            >
              😬
            </button>
            <Slider
              initial={bonus}
              to={maxBonus}
              from={minBonus}
              onChange={setBonus}
              value={bonus}
              label={'Estimert bonus'}
              step={1000}
            />
            <button
              onClick={increaseBonus}
              className={style.iconButton}
              aria-label="Øke bonusbeløp med 10 000 kr"
              role="img"
            >
              🥳
            </button>
          </div>

          <div>
            <p>I Variant får alle ansatte lik bonus.</p>

            <p>I 2020 var bonusen 70 420 kroner.</p>
          </div>

          <footer className={style.summary}>
            <div className={style.calculation}>
              <h3 className={style.question}>Da blir lønnen din sånn:</h3>

              <dl>
                <div className={style.flexRow}>
                  <dt>Fast årslønn</dt>
                  <dd className={style.number}>{formatCurrency(salary)}</dd>
                </div>

                <div className={style.flexRow}>
                  <dt>Bonusestimat</dt>
                  <dd className={style.number}>{formatCurrency(bonus)}</dd>
                </div>

                <div className={style.flexRow}>
                  <dt>Din årslønn i Variant</dt>
                  <dd className={and(style.number, style.result)}>
                    {formatCurrency(salary + bonus)}
                  </dd>
                </div>
              </dl>
            </div>
          </footer>
        </fieldset>
      </div>
    </div>
  );
};
