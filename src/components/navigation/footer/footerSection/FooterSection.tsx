import React, { Children } from "react";

import { TextTertiary } from "src/components/navigation/footer/textTertiary/TextTertiary";

import styles from "./footerSection.module.css";

interface IFooterSection {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: IFooterSection) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={styles.footerSection}>
      <TextTertiary>{title}</TextTertiary>
      <ul className={styles.footerSectionLinks}>
        {childrenArray.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </div>
  );
};
