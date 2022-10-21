import { useEffect, useState } from 'react';
import style from 'src/advanced-calculator/calculator.module.css';
import { Degree, startSalery } from 'src/advanced-calculator/config';
import Counter from 'src/advanced-calculator/Counter';
import { getAverageBonus } from 'src/advanced-calculator/helpers/getHistoricBonus';
import { formatCurrencyFromNumber } from 'src/advanced-calculator/helpers/utils';

const Calculator = () => {
  const [degree, setDegree] = useState<Degree>('masters');
  const totalSalary = startSalery[degree];

  const [isMobile, setIsMobile] = useState(false);

  function onDegreeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value as Degree;
    setDegree(value);
  }

  const handleResize = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        setIsMobile(true);
      }
      window.addEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#FFDCD7',
        padding: '5%',
        borderRadius: '10px',
        width: isMobile ? '100%' : '80%',
        marginTop: isMobile ? '10%' : 0,
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
            <div
              style={{ backgroundColor: '#FFDCD7' }}
              className={style['radio-button-wrapper']}
            >
              <input
                aria-labelledby="bachelorLabel"
                className={style.inputRadio}
                type="radio"
                id="Bachelor"
                name="education"
                value="bachelor"
                checked={degree == 'bachelor'}
                onChange={onDegreeChange}
              />
              <label id="bachelorLabel" htmlFor="Bachelor">
                Bachelor
              </label>
            </div>

            <div
              style={{ backgroundColor: '#FFDCD7' }}
              className={style['radio-button-wrapper']}
            >
              <input
                aria-labelledby="masterLabel"
                className={style.inputRadio}
                type="radio"
                id="Master"
                name="education"
                value="masters"
                checked={degree == 'masters'}
                onChange={onDegreeChange}
              />
              <label id="masterLabel" htmlFor="Master">
                Master
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className={style['calculator-controls__row']}>
        <div className={style['calculator-controls__label']}>
          Det vil gi en årslønn på
        </div>
        <div className={style['calculator-controls__value']}>
          <Counter num={totalSalary} formatter={formatCurrencyFromNumber} />
        </div>
      </div>

      <div className={style['calculator-controls__row']}>
        <div className={style['calculator-controls__label']}>
          Årslønn + gjenomsnittlig bonus
        </div>
        <div className={style['calculator-controls__value']}>
          <Counter
            num={totalSalary + getAverageBonus()}
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
            num={(totalSalary + getAverageBonus()) * 0.07}
            formatter={formatCurrencyFromNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
