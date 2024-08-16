import Button from "src/components/buttons/Button";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { ILink, LinkType } from "studio/lib/payloads/navigation";
import styles from "./customErrorMessage.module.css";

export const homeLink = {
  _key: "return-home",
  _type: "link",
  linkTitle: "Return to home",
  linkType: LinkType.Internal,
  internalLink: {
    _ref: "/",
  },
};

export const studioLink = {
  _key: "go-to-studio",
  _type: "link",
  linkTitle: "Go to studio",
  linkType: LinkType.Internal,
  internalLink: { _ref: "/studio" },
};

interface CustomErrorMessageProps {
  title: string;
  body: string;
  button?: {
    label: string;
    onClick: () => void;
  };
  link?: ILink;
}

const CustomErrorMessage = ({
  title,
  body,
  button,
  link,
}: CustomErrorMessageProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.error}>
        <Text type="h3">{title}</Text>
        <Text>{body}</Text>
        <div className={styles.buttonWrapper}>
          {button && (
            <Button type="secondary" onClick={button.onClick}>
              {button.label}
            </Button>
          )}
          {link && <LinkButton type="secondary" link={link} />}
        </div>
      </div>
    </section>
  );
};

export default CustomErrorMessage;
