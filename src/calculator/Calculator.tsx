import styles from './calculator.module.css';
import textStyles from 'src/components/text/text.module.css';

export const Calculator = () => {
  return (
    <div className={styles.container}>
      <p className={textStyles.body}>🤖 Beep boop, I&apos;m a calculator</p>
      <p className={textStyles.small}>1 + 1 = {1 + 1}</p>
    </div>
  );
};