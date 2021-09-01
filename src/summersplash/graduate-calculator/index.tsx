import React from 'react';
import RadioButton from '../../components/radio-button';
import { Degree, formatCurrency } from './utils';
import style from './index.module.css';
import { and } from 'src/utils/strings';
import useCalculatorData from './use-calculator-data';

type Props = {
  year: number;
  degree: Degree;
  addition?: number;
};

export const Calculator = (props: Props) => {
  const { degree, setDegree, salary } = useCalculatorData(
    props.year,
    props.degree,
    props.addition,
  );

  return (
    <div className={style.container}>
      <div className={style.calculatorContainer}>
        <fieldset className={style.contentContainer}>
          <h3 className={style.title}>Lønnskalkulator</h3>

          <p>Vil du vite hva du vil tjene i Variant som nyutdannet i 2022?</p>

          <p>Da trenger du bare svare på ett eneste spørsmål:</p>

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

          <div>
            <p>
              I tillegg til lønn, får alle varianter også kvartalsvis bonus.
              Denne utgjør 30% av kvartalets overskudd, fratrukket arbeidsavgift
              på 14,1%. Dette har det siste året utgjort ca kr. 70 000 for hver
              variant.
            </p>
          </div>

          <footer className={style.summary}>
            <div className={style.calculation}>
              <h3 className={style.question}>Da blir lønnen din sånn:</h3>

              <dl>
                {!!props.addition && (
                  <div className={style.flexRow}>
                    <dd className={style.number}>
                      {formatCurrency(props.addition.toString())}
                    </dd>
                  </div>
                )}

                <div className={style.flexRow}>
                  <dt>Din årslønn i Variant</dt>
                  <dd className={and(style.number, style.result)}>{salary}</dd>
                </div>
              </dl>
            </div>
          </footer>
        </fieldset>
      </div>
    </div>
  );
};
