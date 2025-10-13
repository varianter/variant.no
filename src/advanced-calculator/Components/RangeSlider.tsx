import styles from "src/advanced-calculator/calculator.module.css";
import { formatCurrencyFromNumber } from "src/advanced-calculator/helpers/utils";
import Text from "src/components/text/Text";

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
  displayCurrency?: boolean;
  displayPercentage?: boolean;
};

export default function RangeSlider({
  min,
  max,
  value,
  step = 1,
  onChange,
  name,
  id,
  disabled = false,
  displayCurrency = false,
  displayPercentage = false,
}: RangeSliderInput) {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value) onChange(parseInt(value, 10));
  }

  function formatValue(value: number): string {
    if (displayCurrency) {
      return formatCurrencyFromNumber(value);
    }
    if (displayPercentage) {
      return `${value}%`;
    }
    return value.toString();
  }

  return (
    <div className={styles.rangeSliderWrapper}>
      <div className={styles.rangeInput}>
        <input
          aria-label={name}
          type="range"
          name={id}
          className={styles.inputRange}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleOnChange}
          disabled={disabled}
        />
      </div>
      <div className={styles.rangeInputValue}>
        <Text type="label">{formatValue(min)}</Text>
        <Text type="label">{formatValue(max)}</Text>
      </div>
    </div>
  );
}
