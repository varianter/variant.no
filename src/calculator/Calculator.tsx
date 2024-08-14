import styles from './calculator.module.css';
import Text from 'src/components/text/Text';

export const Calculator = () => {
  return (
    <div className={styles.container}>
      <Text>🤖 Beep boop, I&apos;m a calculator</Text>
      <Text type={"small"}>1 + 1 = {1 + 1}</Text>
    </div>
  );
};