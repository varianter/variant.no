import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { ILink } from "studio/lib/interfaces/navigation";
import styles from "./informationSection.module.css";
import React from "react";

interface InformationSectionProps {
  title: string;
  body: string;
  link?: ILink;
}

const InformationSection = ({ title, body, link }: InformationSectionProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.info}>
        <Text type="h1">{title}</Text>
        <span>
          {body.split("\n").map((line, index) => (
            <Text key={index}>
              {line}
              <br />
            </Text>
          ))}
        </span>
        <div className={styles.buttonWrapper}>
          {link && <LinkButton type="primary" link={link} />}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
