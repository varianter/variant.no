import { LinkType } from '../../../studio/lib/payloads/navigation';
import Text from '../text/Text';
import styles from './missingContentErrorMessage.module.css';
import LinkButton from '../linkButton/LinkButton';
import { ErrorMessage } from '../errorMessage/ErrorMessage';

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
      <p className={styles.description}>{description}</p>
      <LinkButton link={studioLink} />
    </ErrorMessage>
  );
};