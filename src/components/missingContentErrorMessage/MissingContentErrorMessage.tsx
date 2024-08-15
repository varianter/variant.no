import { LinkType } from '../../../studio/lib/payloads/navigation';
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
    <ErrorMessage
      title={'Missing Content'}
      description={`Navigate to Sanity Studio to add the following: ${description}`}
      link={studioLink}
    />
  );
};