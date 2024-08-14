import { LinkType } from '../../../studio/lib/payloads/navigation';
import Text from '../text/Text';
import styles from '../errorMessage/errorMessage.module.css';
import Button from '../buttons/Button';
import LinkButton from '../linkButton/LinkButton';
import { ErrorMessage } from '../errorMessage/ErrorMessage';

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