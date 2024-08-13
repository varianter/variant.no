import LinkButton from '../linkButton/LinkButton';
import { LinkType } from '../../../studio/lib/payloads/navigation';
import styles from './missingData.module.css';
import textStyles from "src/components/text/text.module.css";

const studioLink = {
  _key: "go-to-sanity-studio",
  _type: "link",
  linkTitle: "Go to Studio",
  linkType: LinkType.Internal,
  internalLink: {
    _ref: "studio",
  },
};

export const MissingData = ({ description }: { description: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${textStyles.small} ${styles.container}`}>
        <h3>Missing Content</h3>
        <p>Navigate to Sanity Studio to add the following:</p>
        <strong>
          <pre>{description}</pre>
        </strong>
        <LinkButton link={studioLink} />
      </div>
    </div>
  );
};