import styles from '../../../calculator/calculator.module.css';
import { useEffect, useState } from 'react';
import InputField from '../inputField/InputField';

export default function InputYear({ defaultValue, min, max, onChange }: {
  defaultValue: number,
  min: number,
  max: number,
  onChange: (year: number) => void
}) {

  const [yearValue, setYearValue] = useState((defaultValue).toString());

  const year = Number(yearValue);

  useEffect(() => {
    if (year < min || max < year) {
      return;
    }
    onChange(year);
  }, [min, max, year, onChange]);

  const yearError = (year < min || max < year) ? `Must be between ${min} and ${max}` : undefined;

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearValue(event.target.value);
  };

  return (
    <div className={styles.yearInput}>
      <InputField
        label={'År'}
        name={'year'}
        type={'number'}
        value={yearValue}
        min={min}
        max={max}
        onChange={(_, v) => setYearValue(v)}
        error={yearError}
        required
      />
      <hr/>
      <label>
        År
        <input type={'number'} value={yearValue} min={min} max={max} onChange={handleYearChange} />
      </label>

      {yearError && (
        <span>
          <p
            id={`year-hint`}
            className={styles.error}
            aria-live="assertive"
          >
            {yearError}
          </p>
        </span>
      )
      }
    </div>
  );
}