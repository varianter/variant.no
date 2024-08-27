import Button from "src/components/buttons/Button";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { ILink, LinkType } from "studio/lib/payloads/navigation";
import styles from "./informationMessage.module.css";
import React from "react";

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

interface InformationMessageProps {
  title: string;
  body: string;
  button?: {
    label: string;
    onClick: () => void;
  };
  link?: ILink;
}

const InformationMessage = ({
  title,
  body,
  button,
  link,
}: InformationMessageProps) => {
  return (
    <section className={styles.wrapper} role="status" aria-live="assertive">
      <div className={styles.info}>
        <Text type="h1">{title}</Text>
        <span> 
        {body.split('\n').map((line, index) => (
        <Text key={index}>
            {line}
            <br />
        </Text>
        ))}</span>
        <div className={styles.buttonWrapper}>
          {button && (
            <Button type="primary" onClick={button.onClick}>
              {button.label}
            </Button>
          )}
          {link && <LinkButton type="primary" link={link} />}
        </div>
      </div>
    </section>
  );
};

export default InformationMessage;
