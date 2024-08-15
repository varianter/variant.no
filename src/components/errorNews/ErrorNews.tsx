import { LinkType } from '../../../studio/lib/payloads/navigation';
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
    <ErrorMessage
      title={'Can’t fetch news'}
      description={'Struggling to fetch stories, and we dont know why. Please be patient and try to refresh the page.'}
      onTryAgain={onTryAgain}
      link={returnToHomeLink}
    />
  );
};