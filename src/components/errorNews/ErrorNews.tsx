import { LinkType } from '../../../studio/lib/payloads/navigation';
import Text from '../text/Text';
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
    <ErrorMessage title={'Can’t fetch news'} onTryAgain={onTryAgain} link={returnToHomeLink}>
      <Text>
        Struggling to fetch stories, and we dont know why. Please be patient
        and try to refresh the page.
      </Text>
    </ErrorMessage>
  );
};