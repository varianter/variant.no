import LinkButton from '../linkButton/LinkButton';
import { LinkType } from '../../../studio/lib/payloads/navigation';
import Text from 'src/components/text/Text';
import { ReactNode } from 'react';
import styles from './errorMessage.module.css';
import Button from '../buttons/Button';


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


const studioLink = {
  _key: 'go-to-sanity-studio',
  _type: 'link',
  linkTitle: 'Go to Studio',
  linkType: LinkType.Internal,
  internalLink: {
    _ref: 'studio',
  },
};


export const MissingContentErrorMessage = ({ description }: { description: string }) => {
  return (
    <ErrorMessage title={'Missing Content'}>
      <Text type={'small'}>Navigate to Sanity Studio to add the following:</Text>
      <p className={styles.missingContentDescription}>{description}</p>
      <LinkButton link={studioLink} />
    </ErrorMessage>
  );
};

const returnToHomeLink = {
  _key: 'return-home',
  _type: 'link',
  linkTitle: 'Return to home',
  linkType: LinkType.Internal,
  internalLink: {
    _ref: '/',
  },
};

export const ErrorNews = ({ onTryAgain }: { onTryAgain: () => void }) => {
  return (
    <ErrorMessage title={'Can’t fetch news'}>
      <Text>
        Struggling to fetch stories, and we dont know why. Please be patient
        and try to refresh the page.
      </Text>
      <div className={styles.buttonWrapper}>
        <Button type="secondary" onClick={onTryAgain}>
          Try again{' '}
        </Button>
        <LinkButton type="secondary" link={returnToHomeLink} />
      </div>
    </ErrorMessage>
  );
};
