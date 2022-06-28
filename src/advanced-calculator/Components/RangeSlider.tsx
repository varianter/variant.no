type RangeSliderInput = {
  min: number;
  max: number;
  value: number;
  step?: number;
  name: string;
  id?: string;
  onChange: (v: number) => void;
  onBlur?: (name: string) => void;
  disabled?: boolean;
};

import style from '../calculator.module.css';

export default function RangeSlider({
  min,
  max,
  value,
  step = 1,
  onChange,
  name,
  id,
  disabled = false,
}: RangeSliderInput) {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value) onChange(parseInt(value, 10));
  }

  /* function handleOnBlur(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("blur");
    if (onBlur) onBlur(name);
  } */

  return (
    <div className={style['range-input-wrapper']}>
      <div className={style['range-input']}>
        <input
          type="range"
          name={name}
          className={style.inputRange}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleOnChange}
          /* onBlur={handleOnBlur} */
          disabled={disabled}
        />
      </div>
      <input
        id={id}
        className={style.inputNumber}
        name={name}
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleOnChange}
        /* onBlur={handleOnBlur} */
        disabled={disabled}
      />
    </div>
  );
}
