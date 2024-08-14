import LinkButton from '../linkButton/LinkButton';
import { LinkType } from '../../../studio/lib/payloads/navigation';
import Text from "src/components/text/Text";
import styles from './missingData.module.css';


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
      <div className={`${styles.content}`}>
        <Text type={"h3"}>Missing Content</Text>
        <Text type={"small"}>Navigate to Sanity Studio to add the following:</Text>
        <p className={styles.description}>{description}</p>
        <LinkButton link={studioLink} />
      </div>
    </div>
  );
};