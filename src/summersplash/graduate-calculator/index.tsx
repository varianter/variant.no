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
          <h4>Lønnskalkulator</h4>
          <div
            className={style.gradeContainer}
            role="group"
            aria-labelledby="degree-title"
          >
            <h3 className={style.question} id="degree-title">
              Hvilken grad får du?
            </h3>

            <section className={style.radioContainer}>
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
            </section>
          </div>

          <h3 className={style.question}>
            Estimer bonus for ditt første år her:
          </h3>

          <div>
            <p>
              I Variant får du bonus fra dag én! 30% av overskuddet deles likt
              på alle ansatte. Bonusen for 2021 ligger an til å ende på ca. 70
              000 kr.
            </p>
          </div>

          <div className={style.barSliderContainer}>
            <button
              onClick={decreaseBonus}
              className={style.iconButton}
              aria-label="Minske bonusbeløp med 5 000 kr"
              role="img"
            >
              😃
            </button>
            <Slider
              initial={bonus}
              to={maxBonus}
              from={minBonus}
              onChange={setBonus}
              value={bonus}
              label={'Estimert bonus'}
              step={5000}
            />
            <button
              onClick={increaseBonus}
              className={style.iconButton}
              aria-label="Øke bonusbeløp med 5 000 kr"
              role="img"
            >
              🥳
            </button>
          </div>

          <div className={style.calculatorArrowContainer}>
            <img
              className={style.calculatorArrow}
              aria-label="Pil til bildet av årets sommerstudenter"
              src={require('./../images/pil.svg')}
            />

            <h4>Garantibonus første år</h4>
          </div>

          <footer className={style.summary}>
            <div className={style.calculation}>
              <dl>
                <div className={and(style.salaryRow)}>
                  <dt>Startlønn i Variant</dt>
                  <dd className={and(style.number, style.result)}>
                    {formatCurrency(salary + bonus)} kr
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
