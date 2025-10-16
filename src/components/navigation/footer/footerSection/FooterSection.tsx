import React, { Children } from "react";

import Text from "src/components/text/Text";

import styles from "./footerSection.module.css";

interface IFooterSection {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: IFooterSection) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={styles.footerSection}>
      <Text type="description" color="tertiary">
        {title}
      </Text>
      <ul className={styles.linkColumn}>
        {childrenArray.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </div>
  );
};
