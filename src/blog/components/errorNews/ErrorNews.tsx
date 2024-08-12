import Button from "src/components/buttons/Button";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { LinkType } from "studio/lib/payloads/navigation";
import styles from "./errorNews.module.css";

const link = {
  _key: "return-home",
  _type: "link",
  linkTitle: "Return to home",
  linkType: LinkType.Internal,
  internalLink: {
    _ref: "/",
  },
};

const ErrorNews = ({ onTryAgain }: { onTryAgain: () => void }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.error}>
        <Text type="h3">Error - Can’t fetch news</Text>
        <Text>
          Struggling to fetch stories, and we dont know why. Please be patient
          and try to refresh the page.
        </Text>
        <div className={styles.buttonWrapper}>
          <Button type="secondary" onClick={onTryAgain}>
            Try again{" "}
          </Button>
          <LinkButton type="secondary" link={link} />
        </div>
      </div>
    </section>
  );
};

export default ErrorNews;
