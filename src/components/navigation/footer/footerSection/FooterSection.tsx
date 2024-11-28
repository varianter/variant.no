import React from "react";

import { TextTertiary } from "src/components/navigation/footer/textTertiary/TextTertiary";

import styles from "./footerSection.module.css";

interface IFooterSection {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: IFooterSection) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={styles.footer_section}>
      <TextTertiary>{title}</TextTertiary>
      <ul className={styles.footer_section_links}>
        {childrenArray.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </div>
  );
};
