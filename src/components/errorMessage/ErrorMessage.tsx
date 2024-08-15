import Text from 'src/components/text/Text';
import styles from './errorMessage.module.css';
import Button from '../buttons/Button';
import LinkButton from '../linkButton/LinkButton';
import { ILink } from '../../../studio/lib/payloads/navigation';


export const ErrorMessage = ({ title, description, link, onTryAgain }: { title: string, description: string, link: ILink, onTryAgain?: () => void }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.error}>
        <Text type="h3">Error - {title}</Text>
        <Text>{description}</Text>
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


