import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { CallToActionSection } from "studio/lib/interfaces/pages";

import styles from "./callToAction.module.css";

interface CallToActionProps {
  callToAction: CallToActionSection;
}

const CallToAction = ({ callToAction }: CallToActionProps) => {
  return (
    <article className={`${styles.article}`} id={callToAction._key}>
      <Text type="h2">{callToAction?.basicTitle}</Text>
      <ul className={styles.list}>
        {callToAction?.callToActions?.map((cta, index) => (
          <li key={`cta-${index}`}>
            <LinkButton
              link={cta}
              type={index == 0 ? "primary" : "secondary"}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CallToAction;
