import { useState } from 'react';
import Counter from 'src/advanced-calculator/Counter';
import { firstDayOfTheYear } from 'src/advanced-calculator/helpers/daysUntilNewSalary';
import { getAverageBonus } from 'src/advanced-calculator/helpers/getHistoricBonus';
import getPayscale from 'src/advanced-calculator/helpers/getPayscale';
import {
  formatCurrencyFromNumber,
  getMaxYear,
} from 'src/advanced-calculator/helpers/utils';
import style from 'src/advanced-calculator/calculator.module.css';

const Calculator = () => {
  const [selectedYear, setSelectedYear] = useState(2023);

  const [selectedValidYear, setSelectedValidYear] = useState(2023);
  const [degree, setDegree] = useState('bachelor');
  const year = selectedValidYear + (degree === 'bachelor' ? 1 : 0);
  const payscale = getPayscale(year);

  const MIN_YEAR = 1990;
  const MAX_YEAR = getMaxYear();

  const DEGREE: { [key: string]: string } = {
    bachelor: 'bachelor',
    master: 'master',
  };

  const yearsOfExperience =
    firstDayOfTheYear(MAX_YEAR).getFullYear() - selectedValidYear;

  const totalExperience =
    yearsOfExperience === 0
      ? `Nyutdannet ${DEGREE[degree]}`
      : `${yearsOfExperience} år + ${DEGREE[degree]}`;

  function isValidYear(year: number) {
    return MIN_YEAR <= year && year <= MAX_YEAR;
  }

  function onDegreeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setDegree(value);
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value) onSelectedYearChange(parseInt(value, 10));
  }

  function onSelectedYearChange(value: number) {
    setSelectedYear(value);
    if (isValidYear(value)) setSelectedValidYear(value);
  }

  return (
    <div
      style={{
        backgroundColor: '#FFDCD7',
        padding: '5%',
        borderRadius: '10px',
        width: '80%',
      }}
      className={style['calculator-controls__summary']}
    >
      <div className={style['calculator-controls__row']}>
        <div className={style['form-row']}>
          <div className={style['form-label']}>Hva slags utdanning har du?</div>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignContent: 'center',
            }}
          >
            <input
              aria-labelledby="bachelorLabel"
              className={style.inputRadio}
              type="radio"
              id="Bachelor"
              name="education"
              value="bachelor"
              onChange={onDegreeChange}
              defaultChecked
            />
            <label id="bachelorLabel" htmlFor="Bachelor">
              Bachelor
            </label>

            <input
              aria-labelledby="masterLabel"
              className={style.inputRadio}
              type="radio"
              id="Master"
              name="education"
              value="master"
              onChange={onDegreeChange}
            />
            <label id="masterLabel" htmlFor="Master">
              Master
            </label>
          </div>
          <label htmlFor="experience" className={style['form-row']}>
            <div className={style['form-label']}>
              Når ble eller blir du ferdig med studiene?
            </div>

            <div className={style['range-input-wrapper']}>
              <div
                style={{ backgroundColor: '#FFDCD7' }}
                className={style['range-input']}
              >
                <input
                  aria-label={`range slider for ${'experience'} ${'År'}`}
                  type="range"
                  name={'År'}
                  className={style.inputRange}
                  min={MIN_YEAR}
                  max={2023}
                  value={selectedYear}
                  step={1}
                  onChange={handleOnChange}
                  /* onBlur={handleOnBlur} */
                  disabled={false}
                />
              </div>
              <input
                aria-label={`number input for ${'experience'} ${'År'}`}
                id={'experience'}
                className={style.inputNumber}
                name={'År'}
                type="number"
                size={MAX_YEAR.toString().length}
                maxLength={MAX_YEAR.toString().length}
                min={MIN_YEAR}
                max={MAX_YEAR}
                value={selectedYear}
                onChange={handleOnChange}
                /* onBlur={handleOnBlur} */
                disabled={false}
              />
            </div>
            <span
              className={style['form-error']}
              style={
                isValidYear(selectedYear)
                  ? { opacity: 0, height: 0 }
                  : {
                      opacity: 1,
                      height: '1rem',
                      paddingTop: '5%',
                      paddingBottom: '20%',
                      backgroundColor: '#FFF3F2',
                    }
              }
            >
              Årslønnen for nyutdannede i 2023 oppdateres basert på Teknas
              lønnsstatistikk for 2022, som tilgjengeliggjøres i november.{' '}
            </span>
          </label>
        </div>
        <div className={style['calculator-controls__label']}>
          Vi baserer lønn på erfaring
        </div>
        <div className={style['calculator-controls__value']}>
          {totalExperience}
        </div>
      </div>

      <div className={style['calculator-controls__row']}>
        <div className={style['calculator-controls__label']}>
          Det vil gi en årslønn på
        </div>
        <div className={style['calculator-controls__value']}>
          <Counter
            num={payscale.current}
            formatter={formatCurrencyFromNumber}
          />
        </div>
      </div>

      <div className={style['calculator-controls__row']}>
        <div className={style['calculator-controls__label']}>
          Årslønn + gjenomsnittlig bonus
        </div>
        <div className={style['calculator-controls__value']}>
          <Counter
            num={payscale.current + getAverageBonus()}
            formatter={formatCurrencyFromNumber}
          />
        </div>
      </div>

      <div className={style['calculator-controls__row']}>
        <div className={style['calculator-controls__label']}>
          Årlig pensjon, 7%
        </div>
        <div className={style['calculator-controls__value']}>
          <Counter
            num={payscale.current * 0.07}
            formatter={formatCurrencyFromNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
