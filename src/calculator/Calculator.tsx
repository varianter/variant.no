'use client';
import styles from './calculator.module.css';
import Text from 'src/components/text/Text';
import InputYear from '../components/forms/inputYear/InputYear';
import { useState } from 'react';

export const Calculator = () => {

  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState<number>(0);

  return (
    <div className={styles.content}>
      <Text>🤖 Beep boop, I&apos;m a calculator</Text>
      <InputYear defaultValue={currentYear - 5} min={currentYear - 50} max={currentYear} onChange={setYear} />
      <div>Lønn: {year + 1000}</div>
    </div>
  );
};