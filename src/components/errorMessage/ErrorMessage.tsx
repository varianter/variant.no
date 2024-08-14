import Text from 'src/components/text/Text';
import { ReactNode } from 'react';
import styles from './errorMessage.module.css';
import Button from '../buttons/Button';
import LinkButton from '../linkButton/LinkButton';
import { ILink } from '../../../studio/lib/payloads/navigation';


export const ErrorMessage = ({ title, link, onTryAgain, children }: { title: string, link: ILink, onTryAgain?: () => void, children: ReactNode }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.error}>
        <Text type="h3">Error - {title}</Text>
        {children}
        <div className={styles.buttonWrapper}>
          {onTryAgain && (
            <Button type="secondary" onClick={onTryAgain}>
              Try again{' '}
            </Button>
          )}
          {link && <LinkButton type="secondary" link={link} />}
        </div>
      </div>
    </section>
  );
};


