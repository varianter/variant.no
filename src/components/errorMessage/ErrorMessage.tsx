import Text from 'src/components/text/Text';
import { ReactNode } from 'react';
import styles from './errorMessage.module.css';


export const ErrorMessage = ({ title, children }: { title: string, children: ReactNode }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.error}>
        <Text type="h3">Error - {title}</Text>
        {children}
      </div>
    </section>
  );
};


